import express from 'express';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

import { pets } from './data/pets';
import type { Pet } from './data/pets';

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req: Request, res: Response<Pet[]>): void => {
  res.json(pets);
});

app.use((req: Request, res: Response<{message: string}>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
