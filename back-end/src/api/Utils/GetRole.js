const { Role } = require('../../database/models');

const getRole = async (roleName) => {
    const findRole = await Role.findOne({ 
        where: { roleName },
    });
    console.log('Role', findRole);
    return findRole;
};

module.exports = {
    getRole,
};