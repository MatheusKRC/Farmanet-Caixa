const md5 = require('md5');
const { User, Role, Local } = require('../../database/models');
const { getLocal } = require('../Utils/GetLocal');
const { getRole } = require('../Utils/GetRole');

const loginUser = async (email, password) => {
    const md5Password = md5(password);
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
        return { status: 404, message: 'User Not Found' };
    }
    if (md5Password !== findUser.password) {
        return { status: 404, message: 'Password is Incorrect' };
    }
    return { status: null, message: findUser };
};

const registerUser = async ({ name, email, password, role, local, icon }) => {
    const md5Password = md5(password);
    const getUserByEmail = await User.findOne({ where: { email } });
    const getUserByName = await User.findOne({ where: { name } });
    const findRole = await getRole(role);
    const findLocal = await getLocal(local);

    if (getUserByEmail || getUserByName) {
        return { status: 404, message: 'User Already Exist' };
    }
    if (!findLocal || !findRole) {
        return { status: 404, message: 'Role or Local Invalid' };
    }

    const createUser = await User.create({ 
        name, email, password: md5Password, roleId: findRole.id, localId: findLocal.id, icon });
    return { status: null, message: createUser };
};

const getEmployee = async (role) => {
    const findRole = await getRole(role);
    const getEmployees = await User.findAll({ 
        where: { roleId: findRole.id },
        include: [
            {
                model: Role,
                as: 'roles',
            },
            {
                model: Local,
                as: 'locals',
            },
        ],
        attributes: { exclude: ['password'] },
    });
    return { status: null, message: getEmployees };
};

const getUsers = async () => {
    const getAllUsers = await User.findAll({
        include: [
            {
                model: Role,
                as: 'roles',
            },
            {
                model: Local,
                as: 'locals',
            },
        ],
        attributes: { exclude: ['password'] },
    });
    if (!getAllUsers) {
        return { status: 404, message: 'Users Not Found' };
    }
    return { status: null, message: getAllUsers };
};

const deleteUser = async (name) => {
    const delUser = await User.destroy({ where: { name } });
    if (!delUser) {
        return { status: 404, message: 'User not Found' };
    }
    return { status: null, message: delUser };
};

module.exports = {
    getUsers,
    getEmployee,
    loginUser,
    registerUser,
    deleteUser,
};