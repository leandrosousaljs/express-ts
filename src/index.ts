import express from 'express';
import type { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
  res.json({});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
