import express from 'express';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

import { pets } from './data/pets';
import type { Pet } from './data/pets';

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

type PetQueryParams = {
  species?: string;
  adopted?: 'true' | 'false';
  minAge?: string;
  maxAge?: string;
};

app.get('/', (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[]>): void => {
  let filteredPets: Pet[] = pets;

  const { species, adopted, minAge, maxAge } = req.query;

  if (species) {
    filteredPets = filteredPets.filter((pet: Pet): boolean => pet.species.toLowerCase() === species.toLowerCase());
  }

  if (adopted) {
    filteredPets = filteredPets.filter((pet: Pet): boolean => pet.adopted === JSON.parse(adopted));
  }

  if (minAge) {
    filteredPets = filteredPets.filter((pet: Pet): boolean => pet.age >= parseInt(minAge));
  }

  if (maxAge) {
    filteredPets = filteredPets.filter((pet: Pet): boolean => pet.age <= parseInt(maxAge));
  }

  res.json(filteredPets);
});

app.get('/:id', (req: Request<{ id: string }>, res: Response<Pet | { message: string }>): void => {
  const { id } = req.params;
  const pet: Pet | undefined = pets.find((pet: Pet): boolean => pet.id.toString() === id);

  if (!pet) {
    res.status(404).json({ message: 'No pet with this ID' });
    return;
  }

  res.json(pet);
});

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => console.log(`Server running on http://localhost:${PORT}`));
