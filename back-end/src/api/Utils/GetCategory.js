const { Category } = require('../../database/models');

const getCategory = async (categoryName) => {
    const findCategory = await Category.findOne({ 
        where: { categoryName },
    });
    console.log('Category', findCategory);
    return findCategory;
};

module.exports = {
    getCategory,
};