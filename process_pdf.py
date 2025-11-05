# process_pdf.py (Advanced Version)
# A sophisticated pipeline to extract, intelligently chunk, and enrich data from a PDF.

import json
import re
from unstructured.partition.pdf import partition_pdf

# --- CONFIGURATION PARAMETERS ---
# You can tune these values to optimize for your specific documents.

PDF_INPUT_PATH = "source_document.pdf"
JSON_OUTPUT_PATH = "processed_data.json"
MIN_CHUNK_SIZE = 200     # Chunks smaller than this will be merged with their neighbors.
MAX_CHUNK_CHARACTERS = 1500 # The hard character limit for a chunk.

# --- HELPER FUNCTIONS ---

def clean_text(text):
    """A helper function to clean up common text artifacts."""
    text = text.replace('\n', ' ').strip() # Replace newlines with spaces for cleaner text
    text = re.sub(r'\s+', ' ', text)       # Collapse multiple whitespace characters
    return text

# --- MAIN PROCESSING PIPELINE ---

def process_document(pdf_path):
    """
    The main pipeline that orchestrates the extraction, chunking, and enrichment.
    """
    print(f"Step 1: High-fidelity extraction from '{pdf_path}' using 'unstructured'...")
    
    try:
        # 'unstructured' partitions the PDF into a list of "elements" like Title, NarrativeText, ListItem, etc.
        # The "hi_res" strategy is powerful but can be slow. For faster processing, use "fast".
        elements = partition_pdf(filename=pdf_path, strategy="hi_res")
    except Exception as e:
        print(f"ERROR: Failed to partition the PDF. Is Poppler installed and in your PATH? Error: {e}")
        return None

    print(f"   ...Success. Found {len(elements)} elements.")

    # --- Chunking and Enrichment Logic ---
    print("Step 2: Performing intelligent chunking and contextual enrichment...")
    
    chunks = []
    current_chunk_text = ""
    current_section_title = "Introduction" # Default title for the beginning of the document

    for el in elements:
        element_text = str(el)
        
        # Keep track of the current section title to add it as context to our chunks.
        if el.category == "Title":
            # If we find a new title, it likely signals a new section.
            # We save the previous chunk and start a new one.
            if current_chunk_text:
                chunks.append(current_chunk_text)
            current_section_title = clean_text(element_text)
            current_chunk_text = "" # Reset for the new section
        
        # Add the current element's text to the chunk we're building.
        # Prepend the section title as metadata-in-text. This is a powerful trick.
        text_to_add = f"Section: {current_section_title}; Content: {clean_text(element_text)}\n"

        # If adding the new element would make the chunk too big, we finalize the current chunk and start a new one.
        if len(current_chunk_text) + len(text_to_add) > MAX_CHUNK_CHARACTERS:
            if current_chunk_text:
                chunks.append(current_chunk_text)
            current_chunk_text = text_to_add
        else:
            current_chunk_text += text_to_add

    # Add the last remaining chunk
    if current_chunk_text:
        chunks.append(current_chunk_text)

    print(f"   ...Chunking complete. Created {len(chunks)} initial chunks.")

    # --- Post-processing: Merge small "orphan" chunks ---
    print("Step 3: Post-processing and cleaning chunks...")
    
    final_chunks = []
    i = 0
    while i < len(chunks):
        current_chunk = chunks[i]
        
        # If a chunk is too small, merge it with the next one.
        if len(current_chunk) < MIN_CHUNK_SIZE and i < len(chunks) - 1:
            merged_chunk = current_chunk + " " + chunks[i+1]
            # Check if the merged chunk is not too large
            if len(merged_chunk) <= MAX_CHUNK_CHARACTERS:
                final_chunks.append(merged_chunk)
                i += 2 # Skip the next chunk since it has been merged
                continue
        
        final_chunks.append(current_chunk)
        i += 1
    
    print(f"   ...Success. Final chunk count is {len(final_chunks)}.")
    return final_chunks

def format_for_database(chunks, source_filename):
    """Formats the processed chunks into the JSON structure needed by our application."""
    mock_db_data = []
    for i, chunk_text in enumerate(chunks):
        mock_db_data.append({
            "id": f"doc-{source_filename}-{i+1}",
            "text": chunk_text,
            "source": source_filename,
            "metadata": {"category": "Processed Document"}
        })
    return mock_db_data

# --- Main Execution Block ---

if __name__ == "__main__":
    
    final_chunks = process_document(PDF_INPUT_PATH)

    if final_chunks:
        print("Step 4: Formatting data for the database...")
        db_data = format_for_database(final_chunks, PDF_INPUT_PATH)
        
        print(f"Step 5: Saving formatted data to '{JSON_OUTPUT_PATH}'...")
        try:
            with open(JSON_OUTPUT_PATH, "w", encoding="utf-8") as f:
                json.dump(db_data, f, indent=2, ensure_ascii=False)
            print("\n--- All Done! ---")
            print(f"Successfully created '{JSON_OUTPUT_PATH}'.")
            print("Next Step: Copy the content of this file and paste it into 'scripts/mock_vector_db.js'.")
        except Exception as e:
            print(f"Error saving to JSON file: {e}")