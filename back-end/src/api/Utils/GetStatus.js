const { Status } = require('../../database/models');

const getStatus = async (status) => {
    const findStatus = await Status.findOne({ 
        where: { status },
    });
    return findStatus.id;
};

module.exports = {
    getStatus,
};