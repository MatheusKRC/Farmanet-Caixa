const { Router } = require('express');
const userControllers = require('../Controllers/UserControllers');
const userMiddlewares = require('../Middlewares/ValidateLogin');

const userRoutes = Router();

userRoutes.post('/login', 
    userMiddlewares.fieldsValidate, 
    userMiddlewares.emailValidate, 
    userMiddlewares.passwordValidate, 
    userControllers.loginUser);

userRoutes.post('/register', 
    userControllers.registerUser);

userRoutes.delete('/users/admin', userControllers.deleteUser);

userRoutes.get('/users/admin', userControllers.getUsers);

userRoutes.get('/admin', userControllers.getCashier);

module.exports = userRoutes;
