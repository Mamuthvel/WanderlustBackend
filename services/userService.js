import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generatetoken.js';
const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new userModel({
        ...data,
        password: hashedPassword
    });
    return await user.save();
};

const loginUserService = async (email, password) => {
    const user = await userModel.findOne({ email });

    const isMatch = user && await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user);

    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
    };
};

const user = async (userID) => {
    const result = await userModel.findById(userID).select('-password').lean();
    if (!result) throw new Error("User Not Found")
    return result;
}

const users = async () => {
    const result = await userModel.find().select('-password').lean();
    if (!result) throw new Error("Users Not Found")
    return result;
}
export default {
    users,
    user,
    loginUserService,
    createUser,
}