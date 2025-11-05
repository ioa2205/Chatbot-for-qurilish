const http = require('http');

const documents = [
  {
    "id": "doc-pdf-1",
    "text": "Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 1 of 10    RWS Terms and Conditions for Vendors  These RWS Terms and Conditions for Vendors (“Terms”) is entered into on the Effective Date by and  between RWS Group Limited, with its registered address at Europa House, Chiltern Park, Chiltern Hill,  Chalfont St Peter, SL9 9FG, United Kingdom, on behalf of itself and Affiliates (collectively, “RWS”), and  Vendor as identified in the RWS Vendor Management System (“Vendor”) to which these Terms are  executed and made part of.    1.  Definitions  “Acceptance Criteria” means the requirements  and conditions that a Service or Deliverable  stated in an Order Form and under these Terms  which Vendor must satisfy to be accepted by  RWS.  “Affiliate” means an entity (a) that directly or  indirectly controls, is controlled by, or is under  common control with a party under these Terms,  where “control” means ownership of more than  fifty percent (50%) of the securities or voting  power of the subject entity, and in the context of  any other business entity, shall mean the right to  exercise similar management and control of such",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-2",
    "text": "power of the subject entity, and in the context of  any other business entity, shall mean the right to  exercise similar management and control of such  entity, or (b) which is controlled, directly or  indirectly, by the ultimate parent company.   “RWS Client” means any RWS existing or  prospective customer, whether a person, firm or  entity.   “Confidential Information” means (i) any data,  information, materials or knowledge regarding  RWS, including but not limited to, RWS Clients,  respective  businesses,  financial  condition,  products,  software,  services,  programming  techniques, pricing, suppliers, technology, or  research and development that is disclosed to  Vendor or to which the Vendor has access in  connection with performing the Services, (ii) any  data, information, documents, files, software,  materials,  reports,  process,  procedures,  methodologies, or knowledge acquired or used  by the Vendor  as provided by RWS or any RWS  Client in the performance of the Services, (iii)  RWS Materials and Deliverables, and (iv) the  existence and terms and conditions of these  Terms. Confidential Information does not include  any information that is or becomes part of the",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-3",
    "text": "RWS Materials and Deliverables, and (iv) the  existence and terms and conditions of these  Terms. Confidential Information does not include  any information that is or becomes part of the  public domain through no fault of the Vendor or  that RWS regularly gives to third parties without  restrictions on use or disclosure.   “Deliverables” means the work product, output or  result of the Services required to be delivered by  Vendor as specified in the applicable Order Form.   “Effective Date” means the date these Terms  were accepted by the Vendor in the RWS Vendor  Management System.   “Fees” means the fees payable for the Services  at the rates set forth in the RWS Vendor  Management Systems or as otherwise provided  in the relevant Order Form.   “IPR” means all intellectual property rights,  including without limitation, copyright, patents,  trademarks, domain names, data, software  systems and information and anything similar or  related thereto, whether registered, unregistered  or applied for (or pending) created by the Vendor  or its Personnel in the course of the Service.  “Order Form” means the ordering record agreed  by RWS and Vendor specifying the Services and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-4",
    "text": "or applied for (or pending) created by the Vendor  or its Personnel in the course of the Service.  “Order Form” means the ordering record agreed  by RWS and Vendor specifying the Services and  Deliverables that Vendor is required to provide  and all other relevant project and Fee related  terms.  “Personnel” means individually or collectively,  Vendor’s employees, contractors, and agents  who are authorized in accordance with these  Terms to perform Services, and to provide  Deliverables to RWS on behalf of Vendor.   “RWS Materials” means all information, files,  materials, tools, software, project specifications,  equipment, or any other intellectual property  furnished to Vendor by RWS, on behalf of RWS  or any RWS Client for use in connection with or  arising out of the Services and Deliverables to be  provided under these Terms.  “RWS Vendor Management System” means  RWS’ web-based tool for onboarding and  administration of Vendors.    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 2 of 10    “Services” means such Types of Services as are  designated in the applicable Order Form which  Vendor is required to perform.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-5",
    "text": "“Services” means such Types of Services as are  designated in the applicable Order Form which  Vendor is required to perform.  “Terms” means collectively, these RWS Terms  and Conditions for Vendors, any Order Forms,  and any exhibits, schedules and other documents  made part of these Terms or otherwise included  by reference.  “Types of Services” means services as defined  in Article 2 of these Terms.  2.  Services  2.1. Scope of Work and Order Forms. Under  these Terms, the Vendor undertakes to carry out  specific Services and to provide Deliverables  from time to time in accordance with an Order  Form. These Terms are hereby incorporated by  reference into each Order Form. In consideration  of the performance of such Services and  Deliverables by the Vendor, RWS shall pay the  Vendor the Fees specified in the applicable Order  Form.  2.2.  Conflict. In the event of any conflict or  inconsistency between the provisions of these  Terms and the provisions of an Order Form, the  provisions of the Order Form shall control.  Nothing in these Terms commits either party to  enter into any Order Form hereunder.   2.3.  Non-Exclusivity.  RWS and the Vendor",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-6",
    "text": "provisions of the Order Form shall control.  Nothing in these Terms commits either party to  enter into any Order Form hereunder.   2.3.  Non-Exclusivity.  RWS and the Vendor  accept and agree that any work undertaken in  accordance with these Terms is on a non- exclusive basis.  2.4.  Acceptance of Order Form.  An Order  shall  be deemed accepted by the Vendor upon receipt,  unless Vendor notifies RWS in writing of its  rejection within one (1) day of receipt. In the event  of a timely rejection, the parties shall use their  best efforts resolve their differences.   2.5.  Process of Change of Order Form. RWS  may modify an Order Form during the term of the  project to reflect changes in the project scope,  volume, changes to the RWS Materials, and  dates of Service. In such case the parties will  mutually agree on delivery date(s) and make  appropriate adjustment to the Fees if necessary.  2.6.  Affiliates. These Terms may extend to  RWS Affiliates. An RWS Affiliate may purchase  Services hereunder by executing an Order Form  with Vendor which specifically references these  Terms. Such Order Form, including these Terms  incorporated therein, shall form a contract solely",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-7",
    "text": "Services hereunder by executing an Order Form  with Vendor which specifically references these  Terms. Such Order Form, including these Terms  incorporated therein, shall form a contract solely  between the parties executing that Order Form.  With respect to each Order Form signed by an  Affiliate, all references to “RWS” in these Terms  and such Order Form shall be deemed to refer  solely to such RWS Affiliate.  2.7.  Types of Services. The Services may  include one or more of the following Types of  Services:   (a)  Localisation of written text, software files,  documentation and ancillary materials including  post-editing, copywriting and transcreation, to  meet the requirements and standard idioms of the  language or languages used in a particular  country or countries (\"Translation\");   (b)  Software testing, including linguistic  software testing (“Software Services”);  (c)  Reading or supporting readings from a  prepared script or such other medium as may be  prescribed or amended from time to time in  accordance  with direction from  RWS  for  recording as a spoken or other vocal performance  (\"Voice Over\");  (d)  Engineering of software files, text and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-8",
    "text": "prescribed or amended from time to time in  accordance  with direction from  RWS  for  recording as a spoken or other vocal performance  (\"Voice Over\");  (d)  Engineering of software files, text and  other computer medium (\"Engineering\");  (e)  Desk Top Publishing work that brings  together text and graphics into an electronic  format (\"DTP\");  (f)  Interpreting;  (g)  Proofreading and Quality Assurance;   (h)  Filing and Validation Services;  (i)  Data Services;  (j)  Creative Services;  (k)  E-Learning Services; and  (l)  Other services as further specified in an  Order Form.        Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 3 of 10    3.  Representations and Warranties  3.1. Vendor  acknowledges  that  prior  to  commencing any Services, Vendor may be  subject to further qualification and/or testing (e.g.  test translation, recording, DTP, etc.) All  qualification and testing tasks will be performed  by Vendor free of charge.   3.2. The Vendor expressly warrants that:  (a)  it is a citizen and / or legal resident or  legal entity of the country listed on the RWS  Vendor Management System;  (b)",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-9",
    "text": "by Vendor free of charge.   3.2. The Vendor expressly warrants that:  (a)  it is a citizen and / or legal resident or  legal entity of the country listed on the RWS  Vendor Management System;  (b)  it will only accept work which is within the  competence of the Vendor;   (c)  it has obtained all necessary licenses for  all software used on its premises or by its  Personnel or as otherwise required to perform the  Services;   (d)  it has no pre-existing obligations or  commitments (and will not assume or otherwise  undertake any obligations or commitments) that  will create a conflict of interest with its obligations  owed to RWS under these Terms or that would  hinder its obligations under these Terms;   (e)  it will deliver the Services on time in  accordance  with  the  requirements  and  Acceptance Criteria set forth in applicable Order  Form;  (f)  it will promptly, but in no event later than  within 24 hours from any actual or expected event  that will or could cause there to be a delay in  providing the Services, notify RWS;  (g)  its Services will be performed in a timely,  efficient, and professional and workmanlike  manner, and in conformity with the highest",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-10",
    "text": "providing the Services, notify RWS;  (g)  its Services will be performed in a timely,  efficient, and professional and workmanlike  manner, and in conformity with the highest  professional  standards  for  comparable  services in the industry;  (h)  it will not violate the intellectual property  rights of any third party;  (i)  it does not exceed local statutory limits  for  working  hours  which  may  constitute  reclassification of the business relationship into  employment;   (j)  neither Vendor nor its Personnel are  subject to any Sanction Regulations as outlined  below; and   (k)  Services and Deliverables shall be free  from any errors, inaccuracies, inconsistencies,  incorrect references and shall conform to all  specifications, requirements and instructions set  forth in the applicable Order Form.  3.3. In the event of breach of this warranty,  Vendor hereby agrees to promptly correct or re- perform any Service or Deliverable. If Vendor fails  to correct or re-perform the Service or Deliverable,  RWS may terminate the relevant Order Form with  immediate effect.   3.4. Each party warrants that when performing  their obligations under these Terms each party",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-11",
    "text": "RWS may terminate the relevant Order Form with  immediate effect.   3.4. Each party warrants that when performing  their obligations under these Terms each party  will comply with all applicable local, national and  international laws and regulations.   4.  Independent Contractor  4.1. It is understood and agreed that the  relationship between the parties is that of  independent contractors and nothing in these  Terms or in any Order Form will be deemed to  create an employment, agency, joint venture or  partnership relationship between the parties  hereto or any of their Personnel, or any other  legal arrangement that would impose liability  upon a party for the act or failure to act of the  other party.  4.2. Neither Vendor nor its Personnel shall have  the  authority  to  make  any  statements,  representations or commitments of any kind, or  take any action, which shall be binding of RWS,  its RWS Clients, or any other third party  authorized by RWS, without the prior consent of  RWS.  4.3. Neither RWS nor RWS Clients assume the  debts of the Vendor or its Personnel as a result of  executing these Terms. Neither RWS nor RWS  Clients shall  be responsible for worker’s",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-12",
    "text": "RWS.  4.3. Neither RWS nor RWS Clients assume the  debts of the Vendor or its Personnel as a result of  executing these Terms. Neither RWS nor RWS  Clients shall  be responsible for worker’s  compensation,  disability  or  unemployment  insurance for the Vendor or its Personnel. Vendor  acknowledges and agrees that the Services  rendered pursuant to these Terms will not form  the basis for any rights or eligibility, vesting or    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 4 of 10    participation in any fringe benefits afforded to any  employees of RWS or RWS Clients.  4.4. Services shall be provided at Vendor’s  place of business described in the RWS Vendor  Management System unless alternative locations  are expressly agreed by the parties in the  applicable Order Form. Save to any extent  expressly provided for in these Terms or an Order  Form, the Vendor and its Personnel shall be  responsible for the provision of equipment used  by the Vendor in the performance of the Services,  and all general expenses incurred by the Vendor  and its Personnel in performing the Services.  5.  Code of Conduct",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-13",
    "text": "by the Vendor in the performance of the Services,  and all general expenses incurred by the Vendor  and its Personnel in performing the Services.  5.  Code of Conduct  The Vendor will comply with the RWS’s Supplier  Code of Conduct, which includes without  limitation, anti-corruption and anti-bribery, safe  working environment, non-discrimination and  anti-harassment policies and procedures. The  most current version of RWS’s Supplier Code of  Conduct is available here and shall be  incorporated herein by reference.   6.  Background Screening  6.1. Vendor hereby agrees to submit itself and  its Personnel to background screening and,  where required by RWS, supply all necessary  information to enable screening of identity,  educational and professional qualifications to the  extent permitted by applicable law. In addition,  Vendor agrees that where required, due to the  sensitive nature of the Services, to submit itself  and its Personnel to more rigorous checks such  as financial status, criminal convictions, watchlist  screen (such as Terrorist Exclusion List) and drug  screening to the extent permitted by applicable  law. Vendor understands that failing to agree to",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-14",
    "text": "screen (such as Terrorist Exclusion List) and drug  screening to the extent permitted by applicable  law. Vendor understands that failing to agree to  these requirements may result in exclusion from  the opportunity to receive work and perform  Services.  6.2. Vendor and its Personnel shall comply with,  and shall not engage or pay any persons or  entities who are subject to all applicable trade  sanctions laws, including the EU sanctions  regulations, the United States Office of Foreign  Assets Control (“OFAC”) sanctions regulations,  the Export Administration Regulations (“EAR”),  the UK Statutory Instruments which implement  EU sanctions regulations,  and the UK Export  Control  requirements,  along  with    the  governments of the other jurisdictions where  RWS operates (“Sanction Regulations”).   7.  Confidentiality  Vendor agrees that it shall: (a) hold (and to  procure that its Personnel hold, the Confidential  Information in strict confidence and shall use  such Confidential Information only for the  purposes of performing its obligations under  these Terms; (b)  not disclose (and  procure that  its Personnel shall not disclose) any RWS",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-15",
    "text": "such Confidential Information only for the  purposes of performing its obligations under  these Terms; (b)  not disclose (and  procure that  its Personnel shall not disclose) any RWS  Confidential Information to any third party other  than its Personnel who have a need to know such  information; (c) use the same degree of care with  respect to Confidential Information as Vendor  takes  to  safeguard  its  own  Confidential  Information, but in no event less than a  reasonable degree of care; (d) comply with  specific non-disclosure obligations, as notified to  the Vendor in any Order Form, that may be  imposed on RWS by any RWS Client; and (e) not  modify, copy, adapt, customize, reverse engineer  (or  attempt  to  reverse  engineer),  create  decompile, disassemble, download, share or  create derivative works from the RWS Materials  supplied by RWS, any RWS Clients, or produced  by Vendor under a relevant Order Form unless  such action is specifically required by RWS as is  essential to the performance of the Services  under  these  Terms.    The  confidentiality  obligations of this Article 7 shall survive expiration  or termination of these Terms.   8.  Non-solicitation",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-16",
    "text": "under  these  Terms.    The  confidentiality  obligations of this Article 7 shall survive expiration  or termination of these Terms.   8.  Non-solicitation  8.1. Vendor  acknowledges  that  RWS’s  relationships with its principals, employees, RWS  Clients and other suppliers are valuable business  assets of RWS. Vendor agrees that during the  term of these Terms and one year thereafter,  Vendor shall not directly or indirectly divert or  solicit or attempt to divert or solicit from RWS any  such principal, employee, RWS Client or supplier  through solicitation or otherwise. In the event  Vendor violates this non-solicitation clause, RWS  shall be entitled to seek and obtain injunctive or  other equitable relief or restitution. Without  prejudice to its right to receive money damages,  RWS shall also have a right to terminate these  Terms upon notice with immediate effect.  Copyright© 2023 RWS Holdings plc. All rights reserved.              Page 5 of 10  8.2. Vendor shall immediately inform RWS in  case he or she was directly or indirectly solicited  by RWS Clients or any other RWS vendor.  9. Non-compete Except as otherwise prohibited by applicable law,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-17",
    "text": "case he or she was directly or indirectly solicited  by RWS Clients or any other RWS vendor.  9. Non-compete Except as otherwise prohibited by applicable law,  Vendor agrees that during the term of these  Terms and for a period of one year thereafter,  Vendor shall not perform services for any RWS  Clients for which RWS has requested Vendor to  provide Services.  10. Defamation Vendor will not, throughout and succeeding the  term of these Terms, compose, declare or  transmit (by any method or through any medium)  any declaration which defames or damages (or  which might have the consequence of defaming  or damaging) the reputation of RWS or any of  their  officers,  employees,  contractors,  representatives, agents and/or RWS Clients.  11. RWS’s Obligations RWS shall: (a) provide the Vendor with relevant RWS Materials, documents, and other items required by the Order Form for Vendor to carry out the Services; (b) support the Vendor during projects in a professional and timely manner, particularly regarding queries and technical issues; and (c) pay the Fees, including any Allowable Expenses, upon receipt of an appropriate invoice and acceptance of the Deliverables and/or",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-18",
    "text": "regarding queries and technical issues; and (c) pay the Fees, including any Allowable Expenses, upon receipt of an appropriate invoice and acceptance of the Deliverables and/or Services in accordance with Acceptance Criteria. Where payment is to be made by bank transfer or through some other electronic process, RWS will be obligated for only those charges levied by the originating bank. 12. Vendor’s Obligations Vendor shall: (a) provide Services in a professional  manner, using industry best practices and  procedures and in accordance with the applicable  Order Form; (b) comply with the obligations related to the  specific Type of Services described in Article 2 of  these Terms as agreed by the parties in the  relevant Order Form; (c) not use Machine Translation (“MT”),  Artificial Intelligence (“AI”) and Large Language  Models (“LLMs”) while performing Services,  unless specifically requested by RWS. The  Vendor must inform its Personnel about such  prohibition. In case the Vendor discovers that  some of its Personnel have used MT, AI or LLMs,  the Vendor must notify RWS immediately. Use of  MT, AI or LLMs without prior consent of RWS",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-19",
    "text": "prohibition. In case the Vendor discovers that  some of its Personnel have used MT, AI or LLMs,  the Vendor must notify RWS immediately. Use of  MT, AI or LLMs without prior consent of RWS  shall be considered a breach of these Terms and  subject to immediate termination of these Terms;  and (d) not utilize any  external translation  memories which are not approved by RWS in  advance of the project commencement date. If  external translation memories are identified in  Vendor’s work it may result in a reduction of  payment. 13. Delivery 13.1. Time of Essence. Time is of the essence in  with respect to the obligations to be performed  under these Terms. Vendor will provide the  Services at such time as RWS may specify in an  Order Form. In the event Vendor fails to meet its  required  delivery  obligations,  RWS  may  terminate the Order Form with immediate effect,   13.2. Among other remedies for Vendor’s delay,  RWS may supplement the Vendor’s work and  deduct associated costs at RWS’s election.   14. Pricing, Invoicing, Payment 14.1. Rates, Expenses, Costs. The Fees for the  Services are agreed with RWS and are confirmed  via the RWS Vendor Management System and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-20",
    "text": "14. Pricing, Invoicing, Payment 14.1. Rates, Expenses, Costs. The Fees for the  Services are agreed with RWS and are confirmed  via the RWS Vendor Management System and  set forth in the Order Form. These Fees will apply  to all projects unless otherwise specified in the    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 6 of 10    Order Form. All rates to be paid to the Vendor are  final.  The Vendor shall be responsible for covering all  of its expenses properly incurred in performing  the Services. However, expenses which require  reimbursement by RWS must be pre-approved by  RWS before they are incurred (“Allowable  Expenses”). Such Allowable Expenses must be  properly and fully documented and included in the  invoice.   14.2. Invoicing. Except as otherwise provided in  the applicable Order Form, Vendor shall invoice  RWS for Services and Allowable Expenses.   14.3. Payment Terms. RWS agrees to pay all  invoices within the term specified in the Order  Form. In the event that the payment term is not  specified in the Order Form, RWS will pay all  Fees and Allowable Expenses within sixty (60)",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-21",
    "text": "invoices within the term specified in the Order  Form. In the event that the payment term is not  specified in the Order Form, RWS will pay all  Fees and Allowable Expenses within sixty (60)  days after receipt of the applicable invoice.  14.4. Right to Withhold. RWS shall have the right  to withhold payment of any amount due to Vendor:  (a)  that RWS disputes in good faith;  (b)  that corresponds to Services that are still  to be delivered, until full completion of the  Services  and/or  delivery  of  all  delayed  Deliverables; and  (c)  if the Vendor is in breach of the  warranties in Article 3.1 (e), (g) and (k).  14.5. Right to Deduct. The parties agree that if at  any time during the cooperation under these  Terms:  i)  Vendor were to fail to meet a delivery  date;  ii)  Vendor were to submit any Deliverable to  RWS which is rejected;   iii)  RWS elects to have the Deliverable  repaired by a third party, or  iv)  RWS is required by law to pay any  withholding taxes on payments to the Vendor.    The parties agree that RWS shall have either the  right to:     (a)  deduct any such damages caused by  Vendor or any amount owed by Vendor (including",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-22",
    "text": "withholding taxes on payments to the Vendor.    The parties agree that RWS shall have either the  right to:     (a)  deduct any such damages caused by  Vendor or any amount owed by Vendor (including  the cost of such correction) from any amount then  owed to Vendor, or   (b)  invoice Vendor directly to compensate  the damages or payment owed to RWS. Vendor  will pay the invoiced costs within thirty (30) days  from the receipt of the invoice.  15.  Taxes and Other Obligatory Payments  Vendor warrants that all VAT, sales, use and  other taxes (including withholding taxes), duties,  and other governmental fees and charges on any  compensation received by Vendor pursuant to  these Terms will be paid and borne by Vendor.  16.  Indemnities  Vendor will to the fullest extent permitted by  applicable law, indemnify, defend, and hold  harmless  RWS,  its  Affiliates,  employees,  directors, officers, contractors, and agents from  and against any and all claims, damages, losses,  demands,  liabilities,  costs  and  expenses,  including  reasonable  attorney’s  and  other  professional fees and expenses of any kind  whatsoever that arise from or based in  connection with:   (a)",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-23",
    "text": "liabilities,  costs  and  expenses,  including  reasonable  attorney’s  and  other  professional fees and expenses of any kind  whatsoever that arise from or based in  connection with:   (a)  any acts or omission by Vendor or its  Personnel;   (b)  any personal injury or damage to tangible  personal property;  (c)  Vendor’s performance or failure to  perform its obligation under these Terms;  (d)  the Services or Deliverables, or any part  thereof as provided by Vendor to RWS under  these Terms, infringe or misappropriate any  intellectual property rights of a third party;   (e)  breach of its confidentiality obligations  under these Terms;  (f)  any obligation imposed by law on RWS  to pay any withholding taxes, social security,  pension contributions, unemployment or disability  insurance, or similar items in connection with  compensation received by Vendor pursuant to  these Terms;   (g)  any sums payable to any Personnel used  by the Vendor in connection with the Services    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 7 of 10    and/or any taxes, social security, pension  contributions,  unemployment  or",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-24",
    "text": "Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 7 of 10    and/or any taxes, social security, pension  contributions,  unemployment  or  disability  insurance in respect of such employees or  workers;   (h)  any Personnel used by the Vendor in  connection with the Services being found or  alleged to be an employee of RWS;   (i)  the violation of any applicable statue, law  or regulation; and   (j)  its gross negligence, wilful misconduct or  fraud.   17.  Limitation of Liability  17.1. Vendor will be liable to RWS for any losses  and damages suffered by RWS arising out of  these Terms where such losses and damages  are directly attributable to a breach of contract,  breach of statutory duty or to any negligence of  Vendor,  its  officers,  directors,  Personnel,  contractors, agents or otherwise.   17.2. In no event shall either party’s liability  under these Terms or any Order Form, exceed  the total amount of Fees paid and/or payable to  Vendor for Services under the applicable Order  Form during the twelve (12) month period prior to  the date the cause of action arose, up to a total",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-25",
    "text": "the total amount of Fees paid and/or payable to  Vendor for Services under the applicable Order  Form during the twelve (12) month period prior to  the date the cause of action arose, up to a total  aggregate cap under these Terms of one million  US Dollars ($1,000,000).  17.3. In no event will either party be liable for any  indirect,  consequential,  special,  incidental,  punitive, or exemplary damages of any kind, or  loss of business revenues or profits, business  interruption, or loss of business information in  connection with these Terms however caused  and whether such loss or damage was  foreseeable, known, foreseen, even if such party  has been advised of the possibility of such  damages.  18.  Insurance  Vendor will maintain, at Vendor’s expense, and in  respect of the Services, insurance cover for itself  and for its Personnel who perform Services  hereunder, including, but not limited to, the acts,  omissions and negligence, professional liability  insurance, product and public liability insurance,  worker’s compensation, and shall advise its  subcontractors to maintain the same insurance  cover. The amounts and cover of such insurance",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-26",
    "text": "insurance, product and public liability insurance,  worker’s compensation, and shall advise its  subcontractors to maintain the same insurance  cover. The amounts and cover of such insurance  should be sufficient to compensate for any and all  injury, loss or damage which may result from or  arise out of Vendor’s and its Personnel’s  performance of Services under these Terms.  19.  Ownership and Intellectual Property  Rights  19.1. RWS Materials. All RWS Materials and any  improvements, modifications or enhancements  made thereto shall be and remain the sole and  exclusive property of RWS or RWS Clients, as  applicable.   19.2. IPR Ownership. All right, title, and interest  in and to any IPR shall automatically vest in RWS  or its RWS Clients as applicable. Any such IPR  shall not be re-used by the Vendor for any other  purpose other than the performance of its  obligations under these Terms, except with the  express written permission of RWS.  19.3. Deliverables. All right, title and interest in  and to the Deliverables (including any IPR  incorporated therein) shall remain the sole and  exclusive property of RWS, or of any RWS Client,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-27",
    "text": "19.3. Deliverables. All right, title and interest in  and to the Deliverables (including any IPR  incorporated therein) shall remain the sole and  exclusive property of RWS, or of any RWS Client,  as appliable, and Vendor hereby assigns all  proprietary rights to such Deliverables to RWS  and to any RWS Clients, as applicable. Neither  the Vendor nor its Personnel shall obtain or retain  any IPR in any of the Deliverables and/or any  other work product resulting from the Services. In  addition, Vendor expressly acknowledges its  obligation to ensure that any copyrights or  ownership in any of the Deliverable resulting from  the Services performed by Vendor’s employees  and/or subcontractors, shall be assigned to RWS  in the same extent as defined above in this Article.  19.4. With respect to Voice Over Type of  Services, any proprietary rights, licensing and  usage will be specified in separate Order Form.   19.5. If applicable law does not allow the Vendor  to provide RWS with the above rights, the Vendor  hereby assigns without additional cost all such  ownership and rights to RWS and grants an  irrevocable consent with the further assignment",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-28",
    "text": "to provide RWS with the above rights, the Vendor  hereby assigns without additional cost all such  ownership and rights to RWS and grants an  irrevocable consent with the further assignment  and transfer of such rights and ownership to third  parties (i.e. RWS Clients).    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 8 of 10    19.6. This provision survives termination of these  Terms.  20.  Logo, Marks, Publicity  20.1. Vendor will not use (or permit its Personnel  to use) RWS or any RWS Client trademarks,  service marks, trade names and logo for any  purpose, including but not limited to, making any  reference to the relationship with RWS or any  RWS Clients or the terms of these Terms in social  media, Vendor’s websites, promotional or other  publicly available materials.   20.2. Vendor and its Personnel are not allowed  to represent themselves as RWS or RWS Clients  personnel by using RWS’s email auto-signature.  21.  Security  21.1. Vendor hereby agrees to be bound by and  comply with all applicable data security laws and  to comply with the Security Policy in Exhibit B",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-29",
    "text": "21.  Security  21.1. Vendor hereby agrees to be bound by and  comply with all applicable data security laws and  to comply with the Security Policy in Exhibit B  and the Acceptable Usage Policy in Exhibit C of  these Terms.  21.2. Vendor agrees to complete within the time  stipulated by RWS any security training required  by RWS or as otherwise provided in the Order  Form. Vendor will not be paid for this time.    22.  Records and Audit  During the term of these Terms, and for a period  of twenty-four (24) months thereafter, or a longer  term, as specified in writing by RWS or any RWS,  Vendor agrees to keep all usual and proper  financial books and records relating to its  performance of the Services. To verify Vendor’s  compliance with these Terms, RWS may, during  the term of these Terms and for twenty-four (24)  months thereafter, or longer term, as specified by  RWS or any RWS Client: (a) audit Vendor’s  books and records to confirm compliance with  these Terms, and/or (b) inspect Vendor’s facilities  and procedures to the extent they are relevant to  Vendor’s compliance with these Terms. Subject  to reasonable advance notice, any audit or",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-30",
    "text": "these Terms, and/or (b) inspect Vendor’s facilities  and procedures to the extent they are relevant to  Vendor’s compliance with these Terms. Subject  to reasonable advance notice, any audit or  inspection hereunder will be conducted during  regular business hours at Vendor’s facilities and  in manner that does not unreasonably interfere  with Vendor’s operations. Vendor will provide  RWS’s designated audit and/or inspection team  prompt and reasonable access to all relevant  books, records, procedures, and facilities. In  addition, if any audit or inspection conducted  hereunder reveals a material non-compliance  with these Terms, Vendor (a) warrants that action  will be taken to become compliant, (b) will  compensate RWS for any losses incurred due to  this non-compliance, and (c) will pay the cost of  such audit or inspection. Information disclosed as  part of an audit under this Article will be subject  to confidentiality obligations.  23.  Personal Data  Vendor hereby agrees to be bound by, and  comply with, all applicable data protection laws  and the terms of the Data Processing Agreement  set forth in Exhibit A of these Terms.   24.  Force Majeure",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-31",
    "text": "comply with, all applicable data protection laws  and the terms of the Data Processing Agreement  set forth in Exhibit A of these Terms.   24.  Force Majeure  Neither party shall be liable for any delay or  failure in performance due to any delays or  failures of performance under this Agreement or  any Order Form due to circumstances beyond its  reasonable control, including without limitation,  as caused by acts of God, war, epidemic,  pandemic, terrorism, civil disturbance, court order,  fire, flood, extreme weather conditions, strikes or  other labour disturbances (“Force Majeure”).   Each party shall immediately notify the other  party of the occurrence of such an event affecting  such party and shall use all reasonable efforts to  recommence performance as soon as possible.   25.  Subcontracting, Assignment  25.1. Vendor shall not subcontract the whole or  parts of the Services or any other obligations  under these Terms without the prior written  consent of RWS. However, in the event the  Vendor is allowed to engage subcontractors, this  shall not relieve Vendor from any liability or  obligation under these Terms and Vendor shall",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-32",
    "text": "consent of RWS. However, in the event the  Vendor is allowed to engage subcontractors, this  shall not relieve Vendor from any liability or  obligation under these Terms and Vendor shall  be responsible for the acts, omissions, defaults,  and negligence of any sub-contractors.   The subcontractors must be governed by terms  no less stringent than the terms contained in  these Terms and any applicable Order Form.   25.2. These Terms shall be binding upon and  inure to the benefit of the parties hereto and their  respective successors, administrators, heirs, and  assigns, except that the Vendor may not assign,    Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 9 of 10    nor attempt to assign, its rights or obligations  under these Terms in any way without the prior  written  consent  of  RWS.  Any  attempted  assignment, transfer or delegation, without such  consent, will be void. RWS on giving notice to the  Vendor may assign these Terms.   26.  Term and Termination  26.1. Term. These Terms will commence on the  Effective Date and will continue until terminated  in  accordance  with  these  Terms,  unless",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-33",
    "text": "26.  Term and Termination  26.1. Term. These Terms will commence on the  Effective Date and will continue until terminated  in  accordance  with  these  Terms,  unless  terminated earlier in accordance with the  provisions of these Terms.  26.2. Termination for Cause. Either party has the  right to terminate these Terms and any Order  Form if the other party breaches any material  provision of these Terms or any Order Form and  fails to cure such breach within ten (10) business  days after receiving written notice thereof.   26.3. Termination for Convenience. Each party  has the right to terminate these Terms or any  Order Form for convenience with one (1) month  written notice. Said termination shall, however,  not apply to any Order Form in progress, unless  otherwise agreed by the parties in writing.  26.4. Effect of Termination. Upon the termination  of these Terms for any reason, Vendor will  promptly deliver to RWS all Deliverables, and  other material created, developed, performed or  generated by the Vendor, including all work in  progress on any Services and all versions and  portions thereof.   Except for termination of these Terms by RWS",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-34",
    "text": "generated by the Vendor, including all work in  progress on any Services and all versions and  portions thereof.   Except for termination of these Terms by RWS  due to breach by the Vendor, RWS will pay the  Vendor any amounts that are due and payable to  the Vendor for Services performed by Vendor up  to and including date of termination.   Upon the termination of these Terms for any  reason, Vendor will promptly return or destroy all  RWS Materials or Confidential Information to  RWS at Vendor’s expense and in accordance  with RWS’s instructions. Vendor will certify to  RWS, at RWS’s request, the completion of  fulfilment of RWS’s instructions.  The termination of an Order Form does not have  the effect of termination of the Terms, unless  stated otherwise in notice.  27.  Modification -- the Terms and Entire  Agreement  27.1. RWS may modify these Terms at any time  with at least two weeks written notification to  Vendor via the RWS Vendor Management  System. If the Vendor does not agree to the  changes, Vendor shall notify RWS, otherwise  such changes shall be deemed accepted by  Vendor.  If an agreement between the parties is  not reached within one month, these Terms shall",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-35",
    "text": "changes, Vendor shall notify RWS, otherwise  such changes shall be deemed accepted by  Vendor.  If an agreement between the parties is  not reached within one month, these Terms shall  be terminated automatically.  27.2. These Terms, Exhibits, Order Forms, and  any additional clauses thereto fully express the  entire and only agreement between RWS and  Vendor with respect to the Services to be  provided by Vendor. All prior and collateral  understandings, agreements and promises with  respect thereto are superseded by these Terms.  28.  Governing Law, Jurisdiction  All disputes of whatsoever nature arising from the  performance or non-performance of these Terms  are subject to the Laws of England and Wales  and shall be referred to the exclusive jurisdiction  of the English courts. In addition, because the  Services are personal and unique and because  Vendor  will  have  access  to  Confidential  Information of RWS and RWS Clients, RWS will  have the right to enforce these Terms and any of  its provisions by injunction, specific performance  or other equitable relief in any jurisdiction in which  RWS considers appropriate.  29.  Notices",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-36",
    "text": "have the right to enforce these Terms and any of  its provisions by injunction, specific performance  or other equitable relief in any jurisdiction in which  RWS considers appropriate.  29.  Notices  All notices or other communications to a party  required or permitted hereunder shall be in writing  and shall be delivered in person, sent by a  nationally recognized express delivery service  which  tracks  delivery,  or  sent  by  certified/registered mail, postage prepaid with  return receipt requested, to the address indicated  on the first page of these Terms, or such other  address provided by such party in writing.  Either  party may change its address for notices under  these Terms by giving written notice to the other  party by the means specified in this Section. A  copy of such notice shall be sent to the attention  of the allocated RWS vendor relations manager.         Copyright© 2023 RWS Holdings plc. All rights reserved.                                               Page 10 of 10    30.  Waiver  The failure by either party to exercise any right  hereunder shall not operate as a waiver of such  party’s right to exercise such right or any other",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-37",
    "text": "30.  Waiver  The failure by either party to exercise any right  hereunder shall not operate as a waiver of such  party’s right to exercise such right or any other  right hereunder at any time. No waiver shall be  effective unless made in writing.     31.  Survival, Severability  Upon expiration, cancellation or termination of  these Terms, the obligations which by their nature  are intended to survive expiration, cancellation or  termination of these Terms shall survive.  If any provision of these Terms is found invalid,  unlawful or unenforceable by any court of  competent jurisdiction or other government  authority, (i) such provision will be deemed  replaced with an enforceable provision which  most closely embodies the original intent of the  parties, and (ii) the remaining provisions will  continue in full force and effect.    32.  Third Party Rights  References to RWS herein shall include  subsidiary, Affiliates, and associate companies of  RWS. Save for a subsidiary, Affiliate or associate  company of RWS, these Terms are not intended  to be for the benefit of, and shall not be  enforceable by any person who is not named at",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-38",
    "text": "RWS. Save for a subsidiary, Affiliate or associate  company of RWS, these Terms are not intended  to be for the benefit of, and shall not be  enforceable by any person who is not named at  the date of these Terms as a party to it or any  person who claims rights under the Contracts  (Rights of Third Parties) Act 1999 or otherwise,  and neither party can declare itself a trustee for  the benefit of a third party.  33.  General  33.1. The section headings used in these Terms  are intended for convenience only and shall not  be deemed to supersede or modify any  provision(s).  33.2. The parties  agree  that  the  binding  language of these Terms is English.  33.3. The Parties have expressly requested that  these Terms and any ancillary document be  drafted in English.        Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 1 of 6    EXHIBIT A. DATA PROCESSING AGREEMENT  This Data Processing Agreement regulates the processing of personal data by both the Vendor and RWS  under the RWS Terms and Conditions for Vendors pursuant to which the Vendor performs Services as  described in an Order Form.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-39",
    "text": "under the RWS Terms and Conditions for Vendors pursuant to which the Vendor performs Services as  described in an Order Form.  The purpose of this Data Processing Agreement is to detail the parties’ obligations with regard to the  Processing of Personal Data, in accordance with the requirements of the General Data Protection  Regulations and the UK Data Protection Act 2018.  Due to the global nature of RWS’s business and the  locations of our Vendors the data protection law of other countries may be relevant.  We explain below how  other laws are treated.  All capitalized terms not defined herein shall have the meaning set forth in the RWS Terms and Conditions  for Vendors.  1.  Definitions  1.1  The following terms shall have the following meanings:   a) \"Controller\", \"processor\", \"data subject\", \"personal data\" and \"processing\" (and  \"process\") shall have the meanings given in Applicable Data Protection Law; and   b) \"Applicable Data Protection Law\" shall mean: Regulation 2016/679 of the European  Parliament and of the Council on the protection of natural persons with regard to the processing",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-40",
    "text": "b) \"Applicable Data Protection Law\" shall mean: Regulation 2016/679 of the European  Parliament and of the Council on the protection of natural persons with regard to the processing  of personal data and on the free movement of such data, and repealing Directive 95/46/EC the  General Data Protection Regulation (“GDPR”); (ii) UK Data Protection Act 2018 (“UK DPA”);  (iii) the applicable data protection law at the location of Vendor business address and (ii) any  other applicable data protection law in any jurisdiction inside or outside of the European Union  and European Economic Area which RWS notifies Vendor applies in an Order Form.   c) “Security Incident” shall mean suspicion of or actual (i) accidental or unlawful destruction, (ii)  accidental loss, alteration, unauthorised disclosure or access, and (iii) any other breach of  security.  d) “Sole Vendor” shall mean an individual Vendor providing the Services.  e) “Agency” shall mean an organisation which employs staff and/or engages third parties to  perform the Services.  2.  RWS processing, as a Controller, of personal data the Vendor provides to RWS  2.1",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-41",
    "text": "perform the Services.  2.  RWS processing, as a Controller, of personal data the Vendor provides to RWS  2.1  The personal data that the Vendor provides to RWS such as name, email address, education,  qualifications, professional experience, etc., will be used by RWS to administer contracting with  Vendor including but not limited to invoicing and payment and Vendor agrees to such processing.  RWS may obtain the Vendor’s personal data from third parties, for instance if background screening  is conducted, the use of this data will be restricted to contracting with the Vendor and engaging the  Vendor in work for RWS Clients.  2.2  RWS will collect personal data which will enable RWS to identify your location when interacting  with RWS IT systems.  This data is collected to enable RWS to monitor compliance with the RWS  Terms and Conditions for Vendors for maintaining security. The personal data and findings and  outcomes of reviews of the data may be provided to RWS Clients and law enforcement.  2.3  In order for RWS to perform proper business operations, it may be necessary for RWS to transfer,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-42",
    "text": "outcomes of reviews of the data may be provided to RWS Clients and law enforcement.  2.3  In order for RWS to perform proper business operations, it may be necessary for RWS to transfer,  process and store personal data outside of the EEA. Where such transfers do take place RWS  shall ensure legal requirements for such transfers are fulfilled and enter into appropriate  arrangements to ensure the adequacy of the security of such personal data.     Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 2 of 6    2.4  Vendor agrees that RWS may disclose Vendor’s personal data, including personal data obtained  from third parties, to prospective clients of RWS and RWS Clients for the purpose of consideration  of and provision of the Services to RWS Clients.  RWS may also disclose the Vendor’s personal  data to third party auditors of the RWS business conducting audits on behalf of RWS or RWS’s  clients or regulators. Agency is solely responsible for obtaining all necessary consents, licenses  and approvals for the collection and processing of any Vendor’s personal data.  2.5",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-43",
    "text": "clients or regulators. Agency is solely responsible for obtaining all necessary consents, licenses  and approvals for the collection and processing of any Vendor’s personal data.  2.5  RWS will comply with any legal requirements or orders of law enforcement or regulators or other  authorised officials including tax authorities to disclose the Vendors personal data to official  organisations.  Unless prohibited RWS will notify the Vendor of disclosure within a reasonable time.   This obligation to notify Vendor will not apply to notifications to tax authorities etc in the normal  course of business.  2.6  When performing the Services, the personal data provided by the Vendor will be used in the record  keeping processes when translation materials are created.  Translated materials in electronic files  will have associated meta data and other records will be generated containing Vendor’s personal  data. Vendor agrees that such data may be disclosed to RWS Clients and any other third party  requiring such data in respect of the translated materials.   2.7  Vendor acknowledges that RWS is obligated to keep Vendor´s personal data for tax purposes, for",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-44",
    "text": "requiring such data in respect of the translated materials.   2.7  Vendor acknowledges that RWS is obligated to keep Vendor´s personal data for tax purposes, for  compliance purposes and RWS Clients’ requirements. Vendor further agrees that due to the nature  of the Services that RWS and the RWS Client may require records for periods of time, dependent  upon the nature of the translation materials, concerning the creation and processing of the  translation materials and therefore Vendor agrees to their data associated with the translation  materials, embedded in the materials and records of processing, being retained for compliance  purposes and RWS Client´s requirements for such periods of time as RWS or the RWS Client  considers necessary.  2.8  RWS will delete or anonymise the Vendor’s personal data in accordance with industry best practice  at the time of deletion to ensure protection from unlawful or wrongful access.  2.9  For more information on how RWS processes your personal data and for information on how to  exercise your rights of access to your personal data refer to the RWS Privacy Notice which is  incorporated herein.  2.10",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-45",
    "text": "exercise your rights of access to your personal data refer to the RWS Privacy Notice which is  incorporated herein.  2.10  When local laws and regulations require a higher level of protection for your personal data, they  take precedence over this Data Processing Agreement.  3.  Vendor’s processing, as a Controller, of personal data RWS provides to the Vendor  3.1  The personal data that RWS provides to the Vendor such as RWS’s employees name, email  address, title, etc. will be used by Vendor only to administer contracting with RWS, including but  not limited to invoicing and payment, and RWS agrees to such processing. In order for Vendor  located in the EEA or UK to perform proper business operations, it may be necessary for the Vendor  to transfer, process and store personal data outside of the EEA, and Vendor shall ensure legal  requirements for such transfers are fulfilled and enter into appropriate arrangements to ensure the  adequacy of the security of such personal data.  3.2  Vendor will comply with any legal requirements or orders of law enforcement or regulators or other  authorised officials including tax authorities to disclose the personal data disclosed by RWS to",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-46",
    "text": "Vendor will comply with any legal requirements or orders of law enforcement or regulators or other  authorised officials including tax authorities to disclose the personal data disclosed by RWS to  official organisations.  Unless prohibited Vendor will notify RWS of disclosure within a reasonable  time.  This obligation to notify Vendor will not apply to notifications to tax authorities etc in the  normal course of business.  3.3  RWS acknowledges that Vendor is obligated to keep records for tax purposes and compliance  purposes. Vendor will keep such personal data they process as a Controller for the prescribed time  to comply with legal obligations and/or relevant limitation periods.      Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 3 of 6    3.4  Vendor will delete or anonymise the personal data they process as a Controller in accordance with  industry best practice at the time of deletion to ensure protection from unlawful or wrongful access.  3.5  When local laws and regulations require the Vendor to exercise a higher level of protection for the",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-47",
    "text": "3.5  When local laws and regulations require the Vendor to exercise a higher level of protection for the  personal data, the Vendor will comply with the local laws and regulations.  4.  RWS engages Vendor, processing as a sub-processor, when performing Services on behalf  of RWS or RWS Clients     4.1  RWS group companies enter into agreements with RWS Clients to undertake services which may  include processing of personal data of any type of individual within the materials provided for  translation by the RWS Client (“Protected Data”).  In most cases the RWS Client will engage RWS  to process the Protected Data as a Processor.   RWS will then engage the Vendor as a sub- processor to process the Protected Data when performing the Services. Each party shall comply  with the obligations that apply to it under Applicable Data Protection Law.   4.2  Purpose limitation: Vendor shall process the Protected Data as a sub-processor as necessary to  perform its obligations under the RWS Terms and Conditions for Vendors and strictly in accordance  with the documented instructions of RWS (the \"Permitted Purpose\"), except where otherwise",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-48",
    "text": "perform its obligations under the RWS Terms and Conditions for Vendors and strictly in accordance  with the documented instructions of RWS (the \"Permitted Purpose\"), except where otherwise  required by any Applicable Data Protection Law. In no event shall Vendor process the Protected  Data for its own purposes or those of any third party. The processing details (the duration, the  nature, means and purpose of the processing, the types of personal data and categories of data  subjects) are further specified in Exhibit 1 to this Exhibit A.   4.3  Subcontracting:   a. Sole Vendors are prohibited from engaging any third parties to perform the Services.  b. Agency Vendors shall not subcontract any processing of the Protected Data to a third party  subcontractor without the prior written consent of RWS. If RWS refuses to consent to  Vendor's appointment of a third party subcontractor then Vendor will not appoint the  subcontractor and if the Vendor is unable to provide the Service RWS will not engage the  Vendor for the Service.  c. Notwithstanding the above, both Sole Vendors and Agencies may  engage third party",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-49",
    "text": "Vendor for the Service.  c. Notwithstanding the above, both Sole Vendors and Agencies may  engage third party  subcontractors providing ancillary services (such as hosting services, email, telephone  systems, CRM systems in the ordinary course of its business) for which RWS provides  general written authorisation subject to Vendor: (i) imposing data protection terms on such  subcontractor it appoints that protect the Protected Data to the same standard provided for  by this Exhibit; and (ii) Vendor remains fully liable for any breach of this Section that is  caused by an act, error or omission of its subcontractor.   4.4  Confidentiality of processing: Vendor shall at all times maintain the strictest confidentiality of the  personal data it processes as a Controller or as a sub-processor and shall only process the  Protected Data for the Permitted Purposes.  a. Sole Vendors are prohibited from disclosure of the Protected Data to any third party.    b. Agencies, when authorised by RWS, shall ensure that any person that it authorises to  process the Protected Data (including Vendor's employees and/or subcontractors) (an",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-50",
    "text": "b. Agencies, when authorised by RWS, shall ensure that any person that it authorises to  process the Protected Data (including Vendor's employees and/or subcontractors) (an  \"Authorised Person\") shall be subject to a strict duty of confidentiality (whether a  contractual duty or a statutory duty or otherwise), and shall not permit any person to  process the Protected Data who is not under such a duty of confidentiality.  4.5  In any event, failure to maintain the confidentiality of the Protected Data shall amount to a breach  of the RWS Terms and Conditions for Vendors.  RWS will be entitled to immediately terminate the  relationship and all agreements with the Vendor.    Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 4 of 6    4.6  International transfers:    a. If the Vendor is located outside the EU/EEA or UK then it is necessary under the GDPR  and UK DPA for certain safeguards to be in place.  The applicable safeguards are either:  (i) If the country to which the personal data is to be transferred is deemed Adequate  by the EU Commission, or the UK Government as appropriate.  The countries",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-51",
    "text": "(i) If the country to which the personal data is to be transferred is deemed Adequate  by the EU Commission, or the UK Government as appropriate.  The countries  deemed adequate are listed on the European Commission website at Adequacy  decisions or the  UK ICO website at International transfers; or  (ii) If the country to which the personal data is being transferred is not Adequate then  the parties must enter into the relevant transfer agreement:  a. with respect to EU or EEA personal data: Module 3 of the Standard Contractual  Clauses published in the European Commission Implementing Decision on  standard contractual clauses for the transfer of personal data to third countries  dated 4 June 2021 (“SCC”).  b. with respect to UK personal data: (1) the International Data Transfer  Agreement (“IDTA”) or (2) where the parties have already signed the SCC the  International Data Transfer Addendum to the SCC.  b. A Vendor in the EEA or UK shall not transfer the Protected Data (nor permit the Protected  Data to be transferred) outside of the European Economic Area (\"EEA\") or the UK (“UK”)  unless:  (i) it has first obtained RWS's prior written consent; and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-52",
    "text": "Data to be transferred) outside of the European Economic Area (\"EEA\") or the UK (“UK”)  unless:  (i) it has first obtained RWS's prior written consent; and  (ii) it takes such measures as are necessary to ensure the transfer is in  compliance with Applicable Data Protection Law in particular ensuring the  safeguards set out in Section 4.5 (a) are in place.   4.7  Security: Vendor hereby agrees to be bound by and comply with the security obligations of all  Applicable Data Protection Laws. Vendor agrees to implement appropriate technical and  organisational measures to ensure a minimum level of security as set out in the Security Policy, at  Exhibit B of the RWS Terms and Conditions for Vendors. In addition, Vendor agrees to comply with  the Vendor Acceptable Usage Policy (“AUP”) at Exhibit C of the RWS Terms and Conditions for  Vendors.   4.8  Compliance with GDPR and UK Data Protection Act 2018: Vendor will make available to RWS all  information necessary to demonstrate compliance with the obligations in this Data Processing  Agreement, GDPR and UK Data Protection Act 2018 and allow for and contribute to audits,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-53",
    "text": "information necessary to demonstrate compliance with the obligations in this Data Processing  Agreement, GDPR and UK Data Protection Act 2018 and allow for and contribute to audits,  including inspections, conducted by RWS or RWS Clients or an auditor mandated by RWS or the  RWS Client. Vendor will also assist so far as necessary in any Data Protection Impact Assessments  undertaken by RWS or RWS’s Clients.   4.9  Security Incidents: Upon becoming aware of a Security Incident, Vendor shall inform RWS, using  the RWS Vendor Management System tool, without undue delay and shall provide all such timely  information and cooperation as RWS may reasonably require including in order for RWS to fulfil its  data breach reporting obligations under and in accordance with the timescales required by  Applicable Data Protection Law. Vendor shall assist in investigations into any Security Incident  conducted by RWS, RWS Clients, law enforcement or any regulatory authority.  Vendor shall further  take all such measures and actions as are necessary to remedy or mitigate the effects of the  Security Incident and shall keep RWS up-to-date about all developments in connection with the",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-54",
    "text": "take all such measures and actions as are necessary to remedy or mitigate the effects of the  Security Incident and shall keep RWS up-to-date about all developments in connection with the  Security Incident.   4.10  Additional requirements of RWS’s Clients: In some cases, RWS Clients will impose contractual  terms upon RWS, including terms in respect of processing personal data, which RWS is required    Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 5 of 6    to similarly impose upon sub-processors.  When additional terms are required RWS will inform the  Vendor in advance of receiving any work and additional terms agreed will be set out in the Order  Form. In all cases the Vendor has the choice whether to agree to the additional terms but should  they decline to accept the terms they will be unable to receive certain types of work or any work  from a particular RWS Client.   4.11  Retention of Personal Data provided for processing: Vendor shall delete such Data in accordance  with RWS’s instructions set out in the Order Form.   5.  Cooperation and data subjects' rights  5.1",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-55",
    "text": "Retention of Personal Data provided for processing: Vendor shall delete such Data in accordance  with RWS’s instructions set out in the Order Form.   5.  Cooperation and data subjects' rights  5.1  Vendor shall provide all reasonable and timely assistance to RWS at its own expense to enable  RWS to respond to:   (i) any request from a data subject to exercise any of its rights under Applicable Data  Protection Law (including its rights of access, correction, objection, erasure and  data portability, as applicable); and   (ii) any other correspondence, enquiry or complaint received from a data subject,  regulator or other third party in connection with the processing of the personal data.   (iii) In the event that any such request, correspondence, enquiry or complaint is made  directly to Vendor in respect of personal data provided to the Vendor by RWS,  Vendor shall promptly inform RWS providing full details of the same.  Vendor shall  coordinate any response to a data subject with RWS.  6.  Liability  6.1  RWS agrees to indemnify, and keep indemnified, the Vendor against all costs, claims, damages,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-56",
    "text": "coordinate any response to a data subject with RWS.  6.  Liability  6.1  RWS agrees to indemnify, and keep indemnified, the Vendor against all costs, claims, damages,  fines or expenses incurred as a result of RWS’s or its employees or agents non-compliance with  its obligations under this Exhibit or Applicable Data Protection Law.   6.2  Vendor agrees to indemnify, and keep indemnified, RWS against all costs, claims, damages, fines  or expenses incurred as a result of Vendor’s or its employees and/or subcontractors non- compliance with its obligations under this Exhibit or Applicable Data Protection Law.   6.3  Liability will be limited to the amounts set out in the RWS Terms and Conditions for Vendors.        Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 6 of 6    Exhibit 1. Processing Details  1.  Nature and Purpose of Processing  Provision of the Services as described in the Order Form.    2.  Categories of Data Subjects    a)  RWS Clients   b)  RWS potential clients  c)  RWS group of companies’ employees and contractors  d)  RWS Vendors  e)  RWS Clients’ employees, contractors, agents, directors  f)",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-57",
    "text": "a)  RWS Clients   b)  RWS potential clients  c)  RWS group of companies’ employees and contractors  d)  RWS Vendors  e)  RWS Clients’ employees, contractors, agents, directors  f)  RWS Client’s end customers  g)  Other persons whose personal data need to be processed in relation to the Services    3.  Types of Personal Data    a)  Professional contact information  b)  Personal contact information   c)  Location Data  d)  IP address   e)  Qualifications and professional background information  f)  Financial information  g)  Investment related information (shares)  h)  Pictures/Videos/Voice recording  i)  Health information  j)  Interests  k)  Opinions  l)  Assessments  m)  Political opinion  n)  Racial/ethnic data  o)  Religious or philosophical beliefs  p)  Trade Union membership  q)  Any other personal data of whatsoever nature as may be required in the performance of the  Services    4.  Duration of Processing  Vendor will process Protected Data for the duration of the Agreement(s) or for such other period  as agreed in writing by the parties.  The duration of processing will include such period of data  retention as provided in the Order Form.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-58",
    "text": "as agreed in writing by the parties.  The duration of processing will include such period of data  retention as provided in the Order Form.        Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 1 of 4    EXHIBIT B – SECURITY POLICY  This Security Policy describes the minimum security and privacy requirements that are to be applied by  both Agencies and individual Sole Vendors when processing RWS Materials under the RWS Terms and  Conditions for Vendors.  All capitalized terms not defined herein shall have the meaning set forth in the RWS Terms and  Conditions for Vendors.  A Sole Vendor is an individual Vendor providing the Services.  An Agency is an organisation which employs staff and/or engages third parties to perform the Service.  Where such an Agency utilises the services of an individual vendor the obligations on the individual  vendor are those for a Sole Vendor. For ease of reference below we shall refer to the Vendor to include  Sole Vendor and Agencies.  RWS recognises that Sole Vendors operate as individuals and will not have the administration and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-59",
    "text": "Sole Vendor and Agencies.  RWS recognises that Sole Vendors operate as individuals and will not have the administration and  security infrastructure of Agencies. Consequently, in the requirements below we specify those  requirements which are applicable only to Agencies.  1.  INFORMATION SECURITY AND PRIVACY  The Vendor accepts ultimate responsibility for ensuring that these security and privacy requirements are  implemented and followed when processing any RWS Materials.   2.  DOCUMENTED POLICIES AND PRACTICES  Agencies shall document any local security policies and procedures, beyond security requirements in this  Security Policy, which address   all the activities relating to provision of the Services. The security  documentation shall clearly identify the technical measures and practices implemented and followed by  the Agency to adequately protect the security of RWS Materials processed by the Agency. The Agency  shall, on request, provide RWS with access to copies of the security documents and any future updated  versions of such documents.  3.  TRAINING AND AWARENESS  Vendor shall undertake regular information security awareness, education and training whether provided",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-60",
    "text": "versions of such documents.  3.  TRAINING AND AWARENESS  Vendor shall undertake regular information security awareness, education and training whether provided  by RWS, an RWS Client or provided by Agency. Agency is responsible to ensure that its Vendors  undertake such information security awareness, education, and training. RWS's applicable policies and  procedures including, but not limited to, those regarding Privacy and Acceptable Use (including email  usage) shall be followed by Vendor. Applicable policies, procedures, and training will be provided as part  of the provisioning process.  4.  INVENTORY OF INFORMATION  Vendors shall ensure that media, servers, and equipment containing RWS Materials are not labelled in a  way that indicates or is likely to imply the presence of confidential or RWS Materials. In addition, Agencies  shall maintain an inventory of such equipment in a way that provides traceability to media, servers, and  equipment containing RWS Materials. This inventory shall be used in conjunction with the return or  destruction of RWS Materials.  5.  PORTABLE MEDIA/DEVICES",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-61",
    "text": "equipment containing RWS Materials. This inventory shall be used in conjunction with the return or  destruction of RWS Materials.  5.  PORTABLE MEDIA/DEVICES  5.1. Vendor shall only use portable devices (including laptops and PDAs, external hard drives, flash  drives, CDs, DVDs, tapes and other mass storage devices) where there is a genuine business need    Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 2 of 4    and where the RWS Materials on the device is appropriately erased or destroyed when the defined  business need has expired.  5.2. Vendor shall ensure RWS Materials stored on portable devices shall be adequately protected from  unauthorised access, loss and destruction using industry recognized mechanisms, such as an  inactivity timeout or power on password; additionally, any portable device storage containing RWS  Materials shall be encrypted.  6.  TESTS WITH PRODUCTION DATA  Testing prior to the implementation or modification of a relevant information system shall not use  production or 'live' data from RWS unless there is no reasonable alternative, and such use has been pre- approved in writing by RWS.  7.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-62",
    "text": "production or 'live' data from RWS unless there is no reasonable alternative, and such use has been pre- approved in writing by RWS.  7.  ELECTRONIC STORAGE AND TRANSFER OF INFORMATION  7.1. Vendors shall ensure that RWS Materials are not transmitted to any unauthorised entity. RWS  Materials shall only be stored on Vendor’s personal equipment as required to fulfil a business need  and shall have suitable industry recognised protections, such as password protection and encryption  as a minimum, to avoid inadvertent visibility of RWS Materials.  7.2. Agencies shall ensure:  (i)  Controls shall be in place to ensure that RWS Materials is never transmitted across an  unsecured network, any transfer shall be between authorised information systems and  resources only, and is only exchanged through industry recognized secure transfer  mechanisms. Procedures shall be in place to prevent the unauthorised   transfer of RWS  Materials by email and / or web-based applications.  (ii)  Wireless Networks (WiFi):    Shall use secure identification, authentication, and encryption mechanisms; and    Where feasible, have \"peer\" networking connectivity settings disabled.  ",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-63",
    "text": "(ii)  Wireless Networks (WiFi):    Shall use secure identification, authentication, and encryption mechanisms; and    Where feasible, have \"peer\" networking connectivity settings disabled.    Insecure public WiFi is prohibited.  (iii)  RWS Materials, when at rest or in transit, shall be encrypted so that data elements are  rendered unusable, unreadable or indecipherable to unauthorized individuals. The process  used for the electronic transfer of RWS Materials must be approved by RWS prior to the  implementation of the Services by the Agency.  8.  BACK-UP AND RECOVERY  8.1. Agencies shall take reasonable precautions to ensure RWS Materials can be restored in the event  that the primary storage is unavailable. Backups shall be taken on a regular basis and backup media  shall be encrypted.  8.2. Sole Vendors must comply with instructions issued by RWS in respect of backing up and in any event  ought to ensure the work material generated for RWS is backed up so that material can be recovered  with a minimum of delay.  9.  DISPOSAL OF INFORMATION  When Vendor equipment, physical documents and files, and physical media are disposed of or reused,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-64",
    "text": "with a minimum of delay.  9.  DISPOSAL OF INFORMATION  When Vendor equipment, physical documents and files, and physical media are disposed of or reused,  appropriate measures shall be taken to prevent subsequent retrieval of RWS Materials originally stored in    Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 3 of 4    them. This may include restoring the device to its original configuration or re-formatting the storage  media.  10.  PHYSICAL AND ENVIRONMENTAL SECURITY  10.1. Vendors shall ensure equipment and / or media used for processing RWS Materials shall be  protected from physical and environmental threats to prevent interruption to the Vendor's activities  and loss of RWS Materials. Equipment and / or media containing RWS Materials shall be locked  away when not in use to prevent unauthorised physical access, damage, and interference to the  information.  10.2. Where hardcopy records containing RWS Materials are to be retained in manual filing systems,  they shall be stored and filed according to appropriate criteria which enable the Vendor to locate",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-65",
    "text": "10.2. Where hardcopy records containing RWS Materials are to be retained in manual filing systems,  they shall be stored and filed according to appropriate criteria which enable the Vendor to locate  the relevant records where necessary to facilitate the access, amendment or destruction of the  relevant records and facilitate the exercise of data subject rights at the request of RWS or the  individual to who those records relate. Containers with locks or equivalent devices to prevent  tampering and/ or unauthorised access shall be used to store or transport hardcopy records.  Hardcopy records containing RWS Materials shall be securely destroyed using a P-4 rated  shredder (or higher rating) when the defined business need has expired.  11.  LOGICAL ACCESS  (i)  Vendors shall not make RWS Materials publicly available via third party systems without  RWS’s prior written consent.  (ii)  Authorisation to access information systems processing RWS Materials shall be granted on a  need-to-know basis, authorised users shall only have access to that RWS Materials  necessary for them to perform their duties. Vendor shall restrict access to information systems  processing RWS Materials.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-66",
    "text": "necessary for them to perform their duties. Vendor shall restrict access to information systems  processing RWS Materials.  (iii)  Vendor access to information systems processing RWS Materials is conditional upon  completion of authentication procedures. Electronic access to RWS Materials shall require a  strong password, which must be at least 14 characters in length, and must include a  combination of uppercase and lowercase letters, numbers, and special characters. If  supported by the system, at least one additional factor, such as biometrics, passphrases, PINs,  One Time Passcode (OTP), etc., must also be utilized for authentication. Passwords must be  changed at least every 90 days, and must not be reused. Passwords must not be disclosed  to anyone else, and must not be written down at any time.  12.  ACCESS RECORDS  Agencies shall maintain appropriate audit trails of access, or system logs, to Information System(s)  processing RWS Materials. At a minimum, the audit logs shall be able to reasonably determine the  applications / files accessed, user ID of the individual accessing the applications / files, the date, time and",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-67",
    "text": "applications / files accessed, user ID of the individual accessing the applications / files, the date, time and  type (e.g. remote, local etc.) of access, and whether access was authorized or denied.  13.  SOFTWARE AND MALWARE PROTECTION  13.1. Anti-malware software shall be installed on all information systems processing RWS Materials.  Such anti-malware software shall be updated on a regular basis, but no less than weekly.  13.2. Vendor shall follow a patching process and / or schedule for all infrastructure, systems and  application products used to provide Services that includes the deployment of updates or upgrades  in accordance with industry best practice.    Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 4 of 4    13.3. Only licensed copies of commercial software which comply with and do not compromise security  standards shall be used.  14.  SECURITY INCIDENT RECORDING AND RESPONSE  Vendor shall notify RWS promptly (and in any event within 24 hours of becoming aware) of an actual or  suspected security incident through the Vendor Management System tool. Security incidents include",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-68",
    "text": "suspected security incident through the Vendor Management System tool. Security incidents include  extortion threats, unauthorized access, compromised user accounts or systems used to access, process  or store RWS Materials, the loss of any hard copy, hardware or storage media used to store or process  RWS Materials, or the infection of any system with malware such as computer viruses or ransomware.              Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 1 of 6          EXHIBIT C RWS ACCEPTABLE USAGE POLICY FOR VENDORS  This ACCEPTABLE USAGE POLICY (“AUP”) defines the responsibilities and conduct of both RWS  and a Vendor or any other third party in relation to data, systems and tools provided by RWS for the  use of Vendor when providing Services to RWS under RWS Terms and Conditions for Vendors.  RWS is committed to facilitating communication between its employees and Vendors. To this end  RWS makes certain data, systems and tools available for use by a Vendor, which may include  software, hardware, e-mail or other such tool (“Resources”). It is RWS’s policy that these provided",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-69",
    "text": "RWS makes certain data, systems and tools available for use by a Vendor, which may include  software, hardware, e-mail or other such tool (“Resources”). It is RWS’s policy that these provided  Resources are used for the stated purposes only and not for use outside of providing Services by  Vendors or for personal use.  All capitalized terms not defined herein shall have the meaning set forth in the RWS Terms and  Conditions for Vendors.  This AUP has been formulated with the following goals in mind:    Ensure the security, reliability and privacy of RWS's systems and network, and the networks  and systems of others.    Avoid situations that may cause RWS to incur civil and / or criminal liability.    Maintain the image and reputation of RWS.    Encourage the responsible use of Resources.    Preserve the privacy, confidentiality, integrity and availability of RWS Clients’ property and  communications.  The core principle of RWS’s AUP is that no one shall use the Resources provided by RWS for any  activity which contravenes the governing laws or any other applicable jurisdiction, or to create, host,  download or transmit offensive or obscene material.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-70",
    "text": "activity which contravenes the governing laws or any other applicable jurisdiction, or to create, host,  download or transmit offensive or obscene material.  Accordingly, Vendors may not use RWS's Resources to engage in activities that:    Infringe on the IPR of others.    Violate the proprietary or licensing rights of any software or application.    Compromise the privacy of others.    Negatively impact the confidentiality, availability or integrity of RWS or RWS Client  information.   RWS reserves the right to take such action, as it deems in its absolute discretion to be reasonable  and appropriate, including but not limited to contract termination, against Vendors who violate any  conditions of this AUP.  General Policy  1. RWS grants Vendors restricted access to RWS Resources. By using the RWS Resources,  Vendors agree to comply with the policies and procedures in this AUP and Annex 1. Vendors  are responsible for any violations of the use of RWS Resources by them.  2. Permitted Use. Vendor will be granted access to specific RWS Systems for the purpose of  providing the contracted services to RWS (“Purpose”). The RWS Systems will be used in",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-71",
    "text": "2. Permitted Use. Vendor will be granted access to specific RWS Systems for the purpose of  providing the contracted services to RWS (“Purpose”). The RWS Systems will be used in          Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 2 of 6          compliance with all applicable laws, rules and regulations, codes of conduct, guidelines,  directions, policies and/or other requirements including, without limitation, all applicable state,  federal, national, and international internet, data, telecommunications, marketing,  telemarketing, “spam,” and import/export laws, regulations and procedures adopted from time  to time. Vendor acknowledges that by providing access to RWS System, RWS is acting as a  passive conduit for Vendors activities and RWS is not undertaking any obligation or liability  to Vendor in relation to Vendor’s activities. In this AUP RWS System means any information  technology application or process made available to Vendor, including but not limited to: RWS  SharePoint, a RWS email account, RWS Vendor Management System and an RWS  translation and or translation management application.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-72",
    "text": "SharePoint, a RWS email account, RWS Vendor Management System and an RWS  translation and or translation management application.  3. Monitoring. RWS may elect at its sole discretion to monitor where legally allowed, Vendor’s  use of some or all areas of RWS’s network and services for adherence to these rules or other  RWS rules that may be published from time to time and to fulfil complaint or investigation  requirements. RWS reserves the right to grant others, such as RWS Clients, third party IT  providers, regulators and law enforcement access to Vendor’s RWS System access account  and activity log.  4. Filters. RWS reserves the right in its reasonable discretion to install and use, or upon written  agreement by the Vendor to have Vendor install and use, any appropriate devices to prevent  violations of this AUP, including devices designated to filter or terminate access.  5. Prohibited Use. Without limiting the restrictions set forth in Section 2 of this AUP, Vendor  agrees not to use RWS Systems for any illegal, fraudulent, unauthorized or improper manner  or purpose or to transmit or disseminate any:",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-73",
    "text": "agrees not to use RWS Systems for any illegal, fraudulent, unauthorized or improper manner  or purpose or to transmit or disseminate any:  a. junk mail, spam, or unsolicited material to persons or entities that have not agreed  to receive such material;  b. material that infringes or violates any third party’s IPR, rights of publicity, privacy, or  confidentiality, or the rights or legal obligations of any wireless service provider or  any of its customers or subscribers;  c. material or data, that is illegal, or material or data, that is harassing, coercive,  defamatory, libellous, abusive, threatening, obscene, or otherwise objectionable,  materials that are harmful to minors or excessive in quantity, or materials the  transmission of which could diminish or harm the reputation of RWS or any third- party service provider involved in the provision of any services to RWS;  d. viruses, DDoS attacks, Trojan horses, worms, time bombs, cancelbots, or other  computer programming routines that are intended to damage, detrimentally interfere  with, surreptitiously or openly intercept or expropriate any system, data, or personal  information;",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-74",
    "text": "computer programming routines that are intended to damage, detrimentally interfere  with, surreptitiously or openly intercept or expropriate any system, data, or personal  information;  e. material or information that is false, misleading, or inaccurate; and  f.  material that would expose RWS, any third-party service provider involved in  providing services to RWS, or any other third party to liability.  6. Access Restriction. Vendor must not attempt to access any data or programs contained in  RWS Systems for which Vendor does not have authorization or explicit consent. Vendor may  not attempt to gain unauthorized access to, or attempt to interfere with or compromise the          Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 3 of 6          normal functioning, operation or security of, any portion of the RWS Systems or information  technology network or attempt to gain unauthorized access to the user accounts or  passwords of others. Vendor must not download, install or run security programs or utilities  that reveal or exploit weaknesses in the security of RWS Systems or information technology",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-75",
    "text": "passwords of others. Vendor must not download, install or run security programs or utilities  that reveal or exploit weaknesses in the security of RWS Systems or information technology  network. Vendor must not purposely engage in activity that may: harass, threaten or abuse  others; degrade the performance of RWS Systems and related information technology  network; deprive an authorized RWS user access to RWS Systems; obtain extra resources  beyond those allocated; or circumvent RWS System security measures.  7. Ownership of Files or Materials. Electronic files and materials of any nature created, sent,  received, or stored on RWS Systems are owned, leased, administered, or otherwise under  the custody and control of RWS are the property of RWS, or customers of RWS, and are  private and may only be accessed by Vendor to perform the Purpose. For the avoidance of  doubt Vendor does not obtain any ownership rights to the files / materials and / or their  contents.  8. Confidentiality. Any data used in RWS Systems must be kept confidential and secure by  Vendor. The fact that the data may be stored electronically does not change the requirement",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-76",
    "text": "contents.  8. Confidentiality. Any data used in RWS Systems must be kept confidential and secure by  Vendor. The fact that the data may be stored electronically does not change the requirement  to keep the information confidential and secure. Furthermore, if this data is stored in a paper  or electronic format, or if the data is copied, printed, or electronically transmitted the data  must still be protected as confidential and secured.  9. Personal Data. The personal data Vendor provides to RWS, name, email address etc., will  be used by RWS to provide Vendor with access to RWS Systems and in the administration  of Vendor’s use of RWS Systems, and Vendor consents to such processing by continuing  with the engagement with RWS. In order for RWS to perform its proper operations, it may be  necessary for RWS to transfer, process and store personal data outside of the EU, EEA or  UK, and RWS shall enter into appropriate arrangements to ensure the adequacy of the  security of such data. Vendor is required to comply with all applicable Data Protection laws  when using RWS Systems for the transfer of personal data. In the event Vendor receives any",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-77",
    "text": "security of such data. Vendor is required to comply with all applicable Data Protection laws  when using RWS Systems for the transfer of personal data. In the event Vendor receives any  requests or communication from data subjects, data protection authorities, or other law  enforcement authorities in respect of personal data processed in connection with Vendor’s  use of RWS Systems, Vendor will notify RWS within 24 hours of receiving such request or  communication, unless prohibited by law from doing so.  10. No sharing. Vendor may not execute on RWS Systems any script, application or program  that makes the RWS Systems available to others. Vendor may not execute such scripts,  applications or programs on their own machines connected to the RWS Systems in order to  make services or Resources available to others. For the avoidance of doubt, RWS expressly  confirms that Vendor is allowed to make their own content available to others, as long as that  content is compliant with this AUP.  11. Privacy. RWS makes no guarantee and assumes no liability for, the security and integrity of  any content or information, including personal data, that Vendor transmits via any third party",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-78",
    "text": "11. Privacy. RWS makes no guarantee and assumes no liability for, the security and integrity of  any content or information, including personal data, that Vendor transmits via any third party  system over which RWS has no control.  12. Software License. The RWS Systems include third party software products governed by  applicable software license agreements that specifically describes the usage rights and  restrictions of the product. Vendor must abide by all license agreements and must not illegally  copy licensed software.          Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 4 of 6          13. Security Responsibilities of Vendor. Vendor is responsible for maintaining the confidentiality  of password and account information, and security of their network / IT equipment. Vendor  agrees to immediately notify RWS, but within 24 hours, of any unauthorized use of RWS  System resources or any other breach of security known to Vendor or reasonably suspected  by Vendor. This includes extortion threats that involve threat of “denial of service” attacks,",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-79",
    "text": "System resources or any other breach of security known to Vendor or reasonably suspected  by Vendor. This includes extortion threats that involve threat of “denial of service” attacks,  unauthorized access, or other security events. If Vendor becomes aware of any violation of  this Policy by any person, Vendor is required to notify RWS immediately, but no longer than  24 hours after discovery of the violation. Vendor must install and maintain a reputable anti- virus software, which MUST be updated at least weekly or whenever provider of anti-virus  software provides updates, on any PC, laptop or tablet operated and maintained by Vendor.  14. Violation. In the event of a breach of or failure to comply with this AUP by Vendor, RWS  expressly reserves the right, at its sole discretion, to pursue any remedies that RWS believes  are needed, which may include, but are not limited to, immediate suspension or termination  of the provision of the access to the RWS Systems. Such actions may be taken by RWS  without prior notice to Vendor. If RWS deems that the non-compliance is not caused by  Vendor, no remedies will be imposed on Vendor and all remedies already imposed on Vendor",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-80",
    "text": "without prior notice to Vendor. If RWS deems that the non-compliance is not caused by  Vendor, no remedies will be imposed on Vendor and all remedies already imposed on Vendor  will be lifted.  15. Indemnification. Vendor will indemnify, defend and hold RWS and its Affiliates harmless  against any claim, suit or proceeding made against RWS arising from use by Vendor of the  RWS Systems which violates applicable law, or infringes or misappropriates a third party’s  IPR and will pay any costs, damages and reasonable attorneys’ fees attributable to such  claim that are awarded against RWS.  16. Disclosure. RWS will cooperate with appropriate law enforcement agencies and other parties  involved in investigating claims of illegal or inappropriate activity. RWS reserves the right to  disclose Vendor information to the extent authorized by applicable law. By using RWS  Systems, Vendor consents to RWS’s disclosure to any law enforcement agency, without the  need for subpoena, of Vendor’s identity (including basic contact information).  17. Complaints. In most cases, RWS will notify Vendor of complaints received by RWS regarding",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-81",
    "text": "need for subpoena, of Vendor’s identity (including basic contact information).  17. Complaints. In most cases, RWS will notify Vendor of complaints received by RWS regarding  an alleged violation of this AUP. Once notified by RWS, Vendor agrees to promptly  investigate all such complaints and take all necessary actions to remedy any violations of this  Policy. RWS may inform the complainant that Vendor is investigating the complaint and may  provide the complainant with the necessary information to contact Vendor directly to resolve  the complaint.  18. Modifications to Policy. This AUP may be changed by RWS upon thirty (30) days prior written  notice.  19. Additional Terms and Conditions. The use of the RWS Systems by Vendor is subject to the  Terms and Conditions for Vendors.              Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 5 of 6          ANNEX 1  PASSWORD SECURITY – APPLICABLE TO ALL APPLICATIONS AND PROCESSES  All passwords must adhere to the following standards:  1. Passwords should not contain the user's account name or parts of the user's full name that  exceed two consecutive characters",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-82",
    "text": "All passwords must adhere to the following standards:  1. Passwords should not contain the user's account name or parts of the user's full name that  exceed two consecutive characters  2. Passwords should avoid incorporating personal data elements (e.g., date of birth, address,  telephone number, or social security number; names of children or spouses; favourite band,  sports team, or automobile; or other personal attribute)  3. Passwords must be changed at least every 90 days  4. Passwords must be a minimum of 14 characters long  5. Passwords must not be reused or recycled.  6. Passwords must not be disclosed to anyone else, including RWS personnel  7. Passwords must not be written down at any time  8. All default vendor provided and installation passwords provided with new hardware or software  applications must be immediately reset after installation is complete  9. Passwords must contain characters from at least three of the following categories:  a. Capital letters  b. Lowercase letters  c. Numbers   d. Special characters (~@!#$%^&*_-+=\\`\\()|\"}{[]:;'<>,.?/)  RWS SHAREPOINT  RWS may grant Vendor access to RWS SharePoint. By using the RWS SharePoint, Vendor agrees to",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-83",
    "text": "c. Numbers   d. Special characters (~@!#$%^&*_-+=\\`\\()|\"}{[]:;'<>,.?/)  RWS SHAREPOINT  RWS may grant Vendor access to RWS SharePoint. By using the RWS SharePoint, Vendor agrees to  register access with Microsoft and accept their terms and conditions of use. In addition, Vendor is  required to accept the RWS AUP to use RWS SharePoint.  Vendor will be granted access to specific RWS SharePoint sites by the RWS SharePoint Administrator  (means the RWS user(s) responsible for the administration of the RWS SharePoint site) or Site  Administrator (means the RWS user(s) responsible for maintaining content, structure and permissions on  an individual subsite) to enable sharing of RWS Documents and collaboration on their development.  Microsoft License: the RWS SharePoint resource is governed by a Microsoft software license agreement  that specifically describes the usage rights and restrictions of the product. Vendor must abide by all  Microsoft license agreements and must not illegally copy licensed software.          Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 6 of 6          RWS EMAIL ACCOUNT",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-84",
    "text": "Copyright© 2022 RWS Holdings plc. All rights reserved.                                               Page 6 of 6          RWS EMAIL ACCOUNT  RWS may issue to Vendor an RWS email account or email address exclusively for the provision of  Services to RWS and / or a RWS Client.  Any email transmitted or received using RWS’s email system is the sole property of RWS. RWS reserves  the right to grant others access to Vendor’s email without notification and reserves the right to monitor  content of any email transmitted using RWS Systems.  Vendors using the RWS email system must:  1. Take necessary steps to protect confidentiality. All email users will be issued with a password  which should be changed at regular intervals and remain confidential to the user. Vendors must  not share passwords, leave passwords lying around in plain text, or otherwise compromise the  security of any email accounts. Vendors must not share passwords with anyone or allow anyone  else to use the RWS email account or email address.  2. Ensure proper consideration is given to the content of emails, information should be clear and to  the point and communicated in an appropriate “tone”.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  },
  {
    "id": "doc-pdf-85",
    "text": "2. Ensure proper consideration is given to the content of emails, information should be clear and to  the point and communicated in an appropriate “tone”.  3. Be aware of the increasing security threats to information technology. Every day more  sophisticated email threats arise designed to obtain credentials, personal data and valuable  intellectual property. There are steps that Vendors can take to reduce the risk of being a victim  of a malicious email threat:  a. Do not open or forward emails which are suspected as being spam;  b. Do not open attachments from unknown sources;  c. Do not respond to a message from an unknown source and do not click on any  embedded links.  RWS VENDOR MANAGEMENT SYSTEM  RWS may issue to Vendor a username and an initial use password to access the RWS Vendor  Management System. The password must be changed upon first login, and in accordance with the  standards in this AUP. Vendor is responsible for accuracy of any personal data they can access on the  RWS Vendor Management System and for ensuring information requested is up to date.",
    "source": "source_document.pdf",
    "metadata": {
      "category": "General"
    }
  }
];

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/search') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { query, top_k } = JSON.parse(body);
        console.log(`Mock DB received query: "${query}"`);

        // Simple keyword matching for mock. A real vector DB would do semantic search.
        const queryLower = query.toLowerCase();
        const results = documents
            .map(doc => {
                const textLower = doc.text.toLowerCase();
                // Simple scoring: boost for exact query presence, add points for term overlap.
                let score = 0;
                if (textLower.includes(queryLower)) {
                    score += 0.5;
                }
                const queryTerms = new Set(queryLower.match(/\w+/g) || []);
                const docTerms = new Set(textLower.match(/\w+/g) || []);
                const intersection = new Set([...queryTerms].filter(x => docTerms.has(x)));
                score += (0.5 * (intersection.size / queryTerms.size)) || 0;
                
                return { ...doc, score };
            })
            .filter(doc => doc.score > 0.2) // Only return docs with some relevance
            .sort((a,b) => b.score - a.score)
            .slice(0, top_k);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ passages: results }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Mock Vector DB server running on http://localhost:${PORT}`);
});