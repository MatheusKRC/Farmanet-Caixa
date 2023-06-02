const userServices = require('../Services/UserServices');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await userServices.loginUser(email, password);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(200).json(message);
};

const registerUser = async (req, res) => {
  const { body } = req;
  const { status, message } = await userServices.registerUser(body);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(200).json(message);
};

const getUsers = async (_req, res) => {
    const { status, message } = await userServices.getUsers();
    if (status) {
      return res.status(status).json(message);
    }
    return res.status(200).json(message);
  };

const getEmployee = async (req, res) => {
    const { role } = req.body;
    const { status, message } = await userServices.getEmployee(role);
    if (status) {
      return res.status(status).json(message);
    }
    return res.status(200).json(message);
  }; 

const deleteUser = async (req, res) => {
  const { name } = req.body;
  const { status, message } = await userServices.deleteUser(name);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(202).json(message);
};

const patchUser = async (req, res) => {
  const { body } = req;
  const { status, message } = await userServices.patchUser(body);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(200).json(message);
};

  module.exports = {
    getUsers,
    getEmployee,
    loginUser,
    registerUser,
    deleteUser,
    patchUser,
  };