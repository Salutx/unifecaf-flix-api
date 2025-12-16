import * as FilmeModel from '../models/FilmeModel.js';

/**
 * List all movies
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {Array} - list of movies
 */
export async function listarFilmes(reqs, res) {
  try {
    // Fetching all movies
    const filmes = await FilmeModel.findAll();

    // Returning the list of movies
    return res.status(200).json(filmes);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao listar filmes' });
  }
}

/**
 * Get movie by ID
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {Object} - movie object
 */
export async function buscarFilmePorId(req, res) {
  try {
    const { id } = req.params;

    // Validating the ID parameter
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    // Fetching movie by ID
    const filme = await FilmeModel.findById(id);

    // Checking if movie exists
    if (!filme) {
      return res.status(404).json({ erro: 'Filme não encontrado' });
    }

    // Returning the found movie
    return res.status(200).json(filme);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar filme' });
  }
}

/**
 * Filter movies by name
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns 
 */
export async function filtrarFilmes(req, res) {
  try {
    const { nome } = req.query;

    // Validating the 'nome' parameter
    if (!nome) {
      return res.status(400).json({ erro: 'Parâmetro nome é obrigatório' });
    }

    // Fetching movies by filter
    const filmes = await FilmeModel.findByFiltro(nome);

    // Returning the filtered movies
    return res.status(200).json(filmes);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao filtrar filmes' });
  }
}
