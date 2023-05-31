const { Register, Category } = require('../../database/models');
const { getCategory } = require('../Utils/GetCategory');

const register404 = 'Register Not Found';

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
        return { status: 404, message: register404 };
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

const deleteRegister = async (id) => {
    const deletedRegister = await Register.destroy({ where: { id } });
    if (!deletedRegister) {
        return { status: 404, message: register404 };
    }
    return { status: null, message: 'Register Deleted' };
};

const updateRegister = async ({ id, category, description, value }) => {
    const findCategory = await getCategory(category);
    const updatedRegister = await Register.update({ 
        categoryId: findCategory.id, description, value }, { where: { id } });
    if (!updatedRegister) {
        return { status: 404, message: register404 };
    }
    return { status: null, message: 'Register Updated' };
};

const getValues = async (registerId) => {
    const allValues = await Register.findAll({
        where: { registerId },
        attributes: ['value'],
    });
    if (!allValues) {
        return { status: 404, message: 'Values Not Found' };
    }
    return { status: null, message: allValues };
};

module.exports = {
    getRegisters,
    getRegisterById,
    postRegister,
    deleteRegister,
    updateRegister,
    getValues,
};