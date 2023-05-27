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

module.exports = {
    getRegisters,
    getRegisterById,
    postRegister,
};