const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const registerRoutes = require('./Routes/RegisterRoutes');
const cashierRoutes = require('./Routes/CashierRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(registerRoutes);
app.use(cashierRoutes);
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;