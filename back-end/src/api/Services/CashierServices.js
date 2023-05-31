const { Cashier } = require('../../database/models');

const postCashier = async ({ userId, officeHour, localId }) => {
    const today = new Date();
    const openCashier = await Cashier.create({ 
        userId, date: today.toLocaleDateString(), officeHour, localId, statusId: 2 });
    if (!openCashier) {
        return { status: 400, message: 'Cashier Not Open' };
    }
    return { status: null, message: openCashier };
};

module.exports = {
    postCashier,
};