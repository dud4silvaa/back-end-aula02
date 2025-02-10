const express = require('express');

const routes = express.Router();

const Gastos = require('./controller/controllergastos');

routes.get('/', (req, res) => {
    res.send('API Gastos Respondendo');
});

routes.post('/gastos', Gastos.create);
routes.get('/gastos', Gastos.read);
routes.delete('/gastos/:id', Gastos.del);

module.exports = routes;