import { pool } from '../config/database.js';

// Fetch all movies
export async function findAll() {
  const [rows] = await pool.query('SELECT * FROM filmes');
  return rows;
}

/**
 * Find movie by ID
 * @param {*} id - movie ID
 * @returns 
 */
export async function findById(id) {
  const [rows] = await pool.query(
    'SELECT * FROM filmes WHERE id = ?',
    [id]
  );
  return rows[0];
}

// Filter movies by name or synopsis
export async function findByFiltro(nome) {
  const termo = `%${nome}%`;

  // Query to find movies matching the name or synopsis
  const [rows] = await pool.query(
    `SELECT * FROM filmes 
     WHERE nome LIKE ? OR sinopse LIKE ?`,
    [termo, termo]
  );

  return rows;
}
