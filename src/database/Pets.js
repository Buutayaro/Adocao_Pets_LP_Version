import { resolve } from 'path';
import { readFileSync} from 'fs';

const pets = [];

function loadSeed() {
  const file = resolve(process.cwd(), 'src', 'database', 'seeders.json');

  const content = JSON.parse(readFileSync(file));

  for (const pet of content.pets) {
    create(pet);
  }
}

function readAll() {
  return pets;
}

function create(pet) {
   const id = pets.length + 1;
 

  const newPet = {...pet, id};

  pets.push(newPet);

  return newPet;
}

function update(pet, id) {
  const index = pets.findIndex((pet) => pet.id === id);

  if (index >= 0) {
    const newPet = { id, ...pet };

    pets[index] = newPet;

    return newPet;
  } else {
    return false;
  }
}

function destroy(id) {
  const index = pets.findIndex((pet) => pet.id === id);

  if (index >= 0) {
    pets.splice(index, 1);

    return true;
  } else {
    return false;
  }
}

export default { loadSeed, readAll, create, update, destroy };