const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: String,
    username: String,
    password: String
},
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
);
const User = mongoose.model('user', userSchema);
module.exports = User;

// Подсаливание и хеширование пароля
module.exports.hashPassword = async (password) => {
    try{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch(err) {
        throw new Error('Hashing failed', err);
    }
};