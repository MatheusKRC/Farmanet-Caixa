const { Router } = require('express');
const registerControllers = require('../Controllers/RegisterControllers');

const registerRoutes = Router();

const registers = '/registers';

registerRoutes.get(registers, registerControllers.getRegisters);

registerRoutes.get('/registers/:id', registerControllers.getRegisterById);

registerRoutes.post(registers, registerControllers.postRegister);

registerRoutes.delete(registers, registerControllers.deleteRegister);

registerRoutes.patch(registers, registerControllers.updateRegister);

registerRoutes.get('/registers/values/:id', registerControllers.getValues);

module.exports = registerRoutes;