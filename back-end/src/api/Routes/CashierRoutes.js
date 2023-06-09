const { Router } = require('express');
const cashierControllers = require('../Controllers/CashierControllers');

const cashierRoutes = Router();

const cashier = '/cashier';

cashierRoutes.post(cashier, cashierControllers.postCashier);

cashierRoutes.get('/cashiers', cashierControllers.getCashiers);

cashierRoutes.get('/cashier/:id', cashierControllers.getCashierById);

cashierRoutes.patch(cashier, cashierControllers.patchStatus);

cashierRoutes.delete(cashier, cashierControllers.deleteCashier);

module.exports = cashierRoutes;