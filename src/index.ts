import express from 'express';
import type { Express } from 'express';

const app: Express = express();

type Pet = {
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

const pets: Pet[] = [
  {
    name: 'Dimi',
    species: 'Dog',
    adopted: true,
    age: 5,
  },
  {
    name: 'Joaquina',
    species: 'Cat',
    adopted: true,
    age: 3,
  },
  {
    name: 'Pepito',
    species: 'Parrot',
    adopted: false,
    age: 10,
  },
];

app.get('/', (req, res) => {
  res.json(pets);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
