import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ?? 8000;
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', port: Number(PORT) });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
