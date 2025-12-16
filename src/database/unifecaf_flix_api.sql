-- ===============================
-- CRIAÇÃO DO BANCO
-- ===============================
CREATE DATABASE IF NOT EXISTS unifecaf_flix;
USE unifecaf_flix;

-- ===============================
-- TABELA DE FILMES
-- ===============================
CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    sinopse TEXT NOT NULL,
    genero VARCHAR(80),
    ano_lancamento INT,
    duracao_minutos INT,
    classificacao VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===============================
-- DADOS DE EXEMPLO
-- ===============================
INSERT INTO filmes 
(nome, sinopse, genero, ano_lancamento, duracao_minutos, classificacao)
VALUES
(
  'Matrix',
  'Um programador descobre que a realidade é uma simulação controlada por máquinas.',
  'Ficção Científica',
  1999,
  136,
  '16+'
),
(
  'Interestelar',
  'Exploradores viajam através de um buraco de minhoca em busca da sobrevivência da humanidade.',
  'Ficção Científica',
  2014,
  169,
  '10+'
),
(
  'O Poderoso Chefão',
  'A história da família Corleone e sua influência no mundo do crime organizado.',
  'Drama',
  1972,
  175,
  '18+'
),
(
  'Vingadores: Ultimato',
  'Os heróis se unem para desfazer as ações de Thanos.',
  'Ação',
  2019,
  181,
  '12+'
),
(
  'Parasita',
  'Uma família pobre se infiltra na vida de uma família rica.',
  'Suspense',
  2019,
  132,
  '16+'
);
