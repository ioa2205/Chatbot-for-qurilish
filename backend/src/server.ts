import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './api/chat';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Configure CORS appropriately for production
app.use(express.json());

app.use('/api', chatRouter);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;