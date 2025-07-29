import express from 'express';
import userController from '../controllers/userController.js';
import authentication from '../middleware/authmiddleware.js';
import destinationController from '../controllers/destinationController.js';
import propertyController from '../controllers/propertyController.js';

const router = express.Router();
//user routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/user', authentication, userController.getUserById);
//destination routes
router.post('/createdestination', authentication, destinationController.CreateDestination);
router.get('/getalldestination', authentication, destinationController.GetAllDestination);
router.put('/updatedestination', authentication, destinationController.UpdateDestinationById);
router.delete('/deletedestination', authentication, destinationController.DeleteDestinationById);
//property routes
router.post('/createproperty', authentication, propertyController.CreateProperty);
router.get('/getallproperty', authentication, propertyController.GetAllProperty);
router.put('/updateproperty', authentication, propertyController.UpdatePropertyById);
router.delete('/deleteproperty', authentication, propertyController.DeletePropertyById);
// getRoomfrom property
router.get('/property/:id/rooms',authentication,propertyController.GetAvailableRoomsByPropertyId)

export default router;
