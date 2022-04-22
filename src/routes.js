import { Router } from "express";
import Pet from  './database/Pets.js';

const router = Router(); 

router.get('/pets', (req, res) => {
    const pets = Pet.readAll();
  
    res.json(pets);
  });
  
  router.post('/pets', (req, res) => {
    const pet = req.body;
  
    const newPet = Pet.create(pet);
  
    res.json(newPet);
  });
  
  router.put('/pets/:id', (req, res) => {
    const id = Number(req.params.id);
  
    const pet = req.body;
  
    const newPet = Pet.update(pet, id);
  
    if (newPet) {
      res.json(newPet);
    } else {
      res.status(400).json({ error: 'Pet not found.' });
    }
  });

  router.delete('/pets/:id', (req, res) => {
    const id = Number(req.params.id);
  
    if (Pet.destroy(id)) {
      res.status(204).send();
    } else {
      res.status(400).json({ error: 'Pet not found.' });
    }
  });
  
  export default router;