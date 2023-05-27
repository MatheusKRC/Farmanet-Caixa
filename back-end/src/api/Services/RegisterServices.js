const { Register, Category } = require('../../database/models');
const { getCategory } = require('../Utils/GetCategory');

const getRegisters = async () => {
    const allRegisters = await Register.findAll({
        include: [
            {
                model: Category,
                as: 'categories',
            },
        ],
    });
    if (!allRegisters) {
        return { status: 404, message: 'No Exist Registers' };
    }
    return { status: null, message: allRegisters };
};

const getRegisterById = async (id) => {
    const register = await Register.findAll({
        where: { registerId: id },
        include: [
            {
                model: Category,
                as: 'categories',
            },
        ],
    });
    if (!register) {
        return { status: 404, message: 'Register Not Found' };
    }
    return { status: null, message: register };
};

const postRegister = async ({ registerId, category, description, value }) => {
    const findCategory = await getCategory(category);
    const data = new Date();
    const createRegister = await Register.create({ 
        registerId, categoryId: findCategory.id, description, value, hour: data.getHours() });
    if (!createRegister) {
        return { status: 400, message: 'Register not Created' };
    }
    return { status: null, message: createRegister };
};

module.exports = {
    getRegisters,
    getRegisterById,
    postRegister,
};