const cashierServices = require('../Services/CashierServices');

const postCashier = async (req, res) => {
    const { body } = req;
    const { status, message } = await cashierServices.postCashier(body);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const getCashiers = async (_req, res) => {
    const { status, message } = await cashierServices.getCashiers();
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const getCashierById = async (req, res) => {
    const { id } = req.params;
    const { status, message } = await cashierServices.getCashierById(id);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const patchStatus = async (req, res) => {
    const { body } = req;
    const { status, message } = await cashierServices.patchStatus(body);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const deleteCashier = async (req, res) => {
    const { id } = req.body;
    const { status, message } = await cashierServices.deleteCashier(id);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

module.exports = {
    postCashier,
    getCashiers,
    getCashierById,
    patchStatus,
    deleteCashier,
};