const { Router } = require('express');
const registerControllers = require('../Controllers/RegisterControllers');

const registerRoutes = Router();

registerRoutes.get('/registers', registerControllers.getRegisters);

registerRoutes.get('/registers/:id', registerControllers.getRegisterById);

registerRoutes.post('/registers', registerControllers.postRegister);

module.exports = registerRoutes;