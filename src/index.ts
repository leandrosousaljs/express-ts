import express from 'express';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

import { pets } from './data/pets';

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
  res.json({ pets });
});

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
