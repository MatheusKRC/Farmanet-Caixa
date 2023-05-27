const { Local } = require('../../database/models');

const getLocal = async (localName) => {
    const findLocal = await Local.findOne({ 
        where: { localName },
    });
    console.log('Local', findLocal);
    return findLocal;
};

module.exports = {
    getLocal,
};