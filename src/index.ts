import express from 'express';
import type { Express, Request, Response } from 'express';

import { pets } from './data/pets';

const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
  res.json({ pets });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
