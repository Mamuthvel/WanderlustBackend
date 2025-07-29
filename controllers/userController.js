import userService from '../services/user.service.js';

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

const getUserById = async (req, res, next) => {
    const { id } = req.user;
    try {
        const userProfile = await userService.getUserById(id);
        res.status(200).json({
            message: "User Found",
            ...userProfile
        })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

const getUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsers();
        console.log(result);

        res.status(200).json({
            message: 'Users details fetched',
            result
        })
    } catch (err) {
        res.status(500).json({ message: "users not Available" })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, data } = req.body;
        if (!id) return res.status(400).json({ message: "User ID is required" });
        const result = await userService.UpdateUserservice(id, data);
        if (!result) return res.status(402).json({ message: "User not found" })
        res.status(200).json({
            message: "User was Updated successfully",
            UpdatedUser: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not Updated" })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ message: "User ID is required" });
        const result = await userService.deleteUserService(id);
        if (!result) return res.status(402).json({ message: "User not found or User already deleted" })
        res.status(200).json({ message: "user deleted successfully", 'deleteduser': result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not deleted" })
    }
}
export default {
    getUsers,
    getUserById,
    loginUser,
    registerUser,
    updateUser,
    deleteUser
}