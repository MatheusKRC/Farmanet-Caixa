const { validateEmail } = require('../Utils/Validate');

const fieldsValidate = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email Missing' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password Missing' });
    }
    next();
};

const emailValidate = async (req, res, next) => {
    const { email } = req.body;
    if (!validateEmail(email)) {
        return res.status(400).json({ message: 'Email Format is Invalid' });
    }
    next();
};

const passwordValidate = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 7) {
        return res.status(400).json({ message: 'Password is short' });
    }
    next();
};

module.exports = {
    fieldsValidate,
    emailValidate,
    passwordValidate,
};