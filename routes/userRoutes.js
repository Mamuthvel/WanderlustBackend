import express from 'express';
import userController from '../controllers/userController.js';
import authentication from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/user', authentication, userController.getUserProfile);
router.get('/users', authentication, userController.getUsers);

export default router;
