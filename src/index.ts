import express from 'express';
import type { Express } from 'express';

const app: Express = express();

type Pet = {
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

const pet: Pet = {
  name: 'Dimi',
  species: 'Dog',
  adopted: true,
  age: 5,
};

app.get('/', (req, res) => {
  res.json(pet);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
