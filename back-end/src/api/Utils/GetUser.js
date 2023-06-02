const { User } = require('../../database/models');

const getUser = async (name) => {
    const findUser = await User.findOne({ 
        where: { name },
    });
    return findUser;
};

module.exports = {
    getUser,
};