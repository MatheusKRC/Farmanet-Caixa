const { Local } = require('../../database/models');

const getLocal = async (localName) => {
    const findLocal = await Local.findOne({ 
        where: { localName },
    });
    return findLocal;
};

module.exports = {
    getLocal,
};