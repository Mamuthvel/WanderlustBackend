import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generatetoken.js';
const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({
        ...data,
        password: hashedPassword
    });
    return await user.save();
};
const getUserById = async (userID) => {
    const result = await User.findById(userID).select('-password').lean();
    if (!result) throw new Error("User Not Found")
    return result;
}
const getAllUsers = async () => {
    const result = await User.find().select('-password').lean();
    if (!result) throw new Error("Users Not Found")
    return result;
}
const loginUserService = async (email, password) => {
    const user = await User.findOne({ email });

    const isMatch = user && bcrypt.compare(password, user.password);
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
const UpdateUserservice = async (userID, data) => {
    return await User.findByIdAndUpdate({ _id: userID }, data, { new: true });
}
const deleteUserService = async (userID) => {
    return await User.findOneAndDelete({ _id: userID });
};
export default {
    getAllUsers,
    getUserById,
    UpdateUserservice,
    deleteUserService,
    loginUserService,
    createUser,
}