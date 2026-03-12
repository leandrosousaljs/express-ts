import express from 'express';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

import { petRouter } from './routes/pets.routes';

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use('/pets', petRouter);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
