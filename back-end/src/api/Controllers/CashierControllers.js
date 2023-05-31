const cashierServices = require('../Services/CashierServices');

const postCashier = async (req, res) => {
    const { body } = req;
    const { status, message } = await cashierServices.postCashier(body);
    if (status) {
        return res.status(status).json(message);
    }
    return res.status(200).json(message);
};

module.exports = {
    postCashier,
};