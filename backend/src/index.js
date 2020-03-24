const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);


/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Prametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para cirar ou altrar recursos
  * 
  */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
  * NoSQL: MongoDB, ChouchDB, etc
  */
 /**
  * Driver: SELECT * FROM users
  * Quere Builder: table('users').select('*').where()
  */