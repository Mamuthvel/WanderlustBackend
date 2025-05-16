import userService from '../services/userService.js';

const registerUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const result = await userService.loginUserService(email, password);
        res.status(200).json({
            message: "Login Successful",
            ...result
        })
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

const getUserProfile = async (req, res, next) => {
    const { id } = req.user;
    try {
        const userProfile = await userService.user(id);
        res.status(200).json({
            message: "User Found",
            ...userProfile
        })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}
const getUsers = async (req,res) => {
    try {
        const result = await userService.users();
        console.log(result);
        
        res.status(200).json({
            message: 'Users details fetched',
            result
        })
    } catch (err) {
        res.status(500).json({ message: "users not wvailable" })
    }
}
export default {
    getUsers,
    getUserProfile,
    loginUser,
    registerUser
}