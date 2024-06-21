const express = require('express');
const eventosController = require('../controllers/eventos');
const adminMiddleware = require('../middlewares/auth');

const router = express.Router();

// Rota para adicionar um evento
router.post('/adicionar',adminMiddleware, eventosController.adicionarevento);
// Rota para listar todos os eventos
router.get('/listar', eventosController.listareventoALL);
// Rota para listar o evento daquele ID
router.get('/listar/:id', eventosController.listareventoID);
// Rota para listar todos os eventos daquela categoria
router.get('/listarcat/:categoria', eventosController.listarPorCategoria);
// rota para pesquisa
router.get('/pesquisar/', eventosController.pesquisarEvento);
// Rota para editar um evento
router.put('/editar/:id',adminMiddleware, eventosController.editarevento);
// Rota para deletar um evento
router.delete('/deletar/:id',adminMiddleware, eventosController.apagarevento);

module.exports = router;
