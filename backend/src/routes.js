const express = require('express');

const DentistaController = require('./controllers/DentistaController');
const AgendaController = require('./controllers/AgendaController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/dentista', DentistaController.index);
routes.post('/dentista', DentistaController.create);
routes.get('/dentista/agendas', DentistaController.agendas);

routes.get('/agenda', AgendaController.index);
routes.post('/agenda', AgendaController.create);
routes.delete('/agenda/:id', AgendaController.delete);

routes.post('/session', SessionController.create);

module.exports = routes;