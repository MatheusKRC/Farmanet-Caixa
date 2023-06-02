const registerServices = require('../Services/RegisterServices');

const getRegisters = async (_req, res) => {
    const { status, message } = await registerServices.getRegisters();
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const getRegisterById = async (req, res) => {
    const { id } = req.params;
    const { status, message } = await registerServices.getRegisterById(id);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const postRegister = async (req, res) => {
    const { body } = req;
    const { status, message } = await registerServices.postRegister(body);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const deleteRegister = async (req, res) => {
    const { id } = req.body;
    const { status, message } = await registerServices.deleteRegister(id);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const updateRegister = async (req, res) => {
    const { body } = req.params;
    const { status, message } = await registerServices.updateRegister(body);
    if (status) {
       return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

const getValues = async (req, res) => {
    const { id } = req.params;
    const { status, message } = await registerServices.getValues(id);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

module.exports = {
    getRegisters,
    getRegisterById,
    postRegister,
    deleteRegister,
    updateRegister,
    getValues,
};