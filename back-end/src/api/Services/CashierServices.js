const { Cashier, User, Local, Status } = require('../../database/models');

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
    const findCashiers = await Cashier.findAll({ include: [
        {
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
    ] });
    if (!findCashiers) {
 return { status: 404, message: 'Cashiers Not Found' };
    }
    return { status: null, message: findCashiers };
};

module.exports = {
    postCashier,
    getCashiers,
};