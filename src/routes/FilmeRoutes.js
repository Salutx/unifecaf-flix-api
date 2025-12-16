import { Router } from 'express';
import {
  listarFilmes,
  buscarFilmePorId,
  filtrarFilmes
} from '../controllers/FilmeController.js';

const router = Router();

// Movie routes
router.get('/filme/', listarFilmes);
router.get('/filme/:id/', buscarFilmePorId);
router.get('/filtro/filme/', filtrarFilmes);

export default router;
