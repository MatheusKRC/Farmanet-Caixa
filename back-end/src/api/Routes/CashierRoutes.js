const { Router } = require('express');
const cashierControllers = require('../Controllers/CashierControllers');

const cashierRoutes = Router();

cashierRoutes.post('/cashier', cashierControllers.postCashier);

cashierRoutes.get('/cashiers', cashierControllers.getCashiers);

module.exports = cashierRoutes;