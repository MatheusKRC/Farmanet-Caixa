const { Cashier, User, Local, Status, Register } = require('../../database/models');
const { getStatus } = require('../Utils/GetStatus');

const postCashier = async ({ userId, officeHour, localId }) => {
    const today = new Date();
    const openCashier = await Cashier.create({ 
        userId, date: today.toLocaleDateString(), officeHour, localId, statusId: 2 });
    if (!openCashier) {
        return { status: 400, message: 'Cashier Not Open' };
    }
    return { status: null, message: openCashier };
};

const getCashiers = async () => {
    const findCashiers = await Cashier.findAll({ include: [{
            model: User,
            as: 'users',
        },
        {
            model: Local,
            as: 'locals',
        },
        {
            model: Status,
            as: 'status',
        },
        {
            model: Register,
            as: 'registers',
        },
    ] });
    return { status: null, message: findCashiers };
};

const getCashierById = async (id) => {
    const findCashiers = await Cashier.findAll({ where: { id },
include: [{
            model: User,
            as: 'users' },
        {
            model: Local,
            as: 'locals',
        },
        {
            model: Status,
            as: 'status',
        },
        {
            model: Register,
            as: 'registers',
        },
    ] });
    return { status: null, message: findCashiers };
};

const patchStatus = async ({ status, id }) => {
    const findStatus = await getStatus(status);
    const updateStatus = await Cashier.update({ statusId: findStatus }, { where: { id } }); 
    if (!updateStatus) {
        return { status: 400, message: 'Cashier Not Found' };
    }
    return { status: null, message: 'Status Updated' };
};

module.exports = {
    postCashier,
    getCashiers,
    patchStatus,
    getCashierById,
};