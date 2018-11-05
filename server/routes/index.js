import express from 'express';
import UserInputValidation from '../middleware/ValidateUserInput';
import AuthValidation from '../middleware/ValidateAuthUser';
import Auth from '../middleware/Authentication';
import {
  PostDevContactController,
  GetAllDevContactsController,
  UpdateDevContactController,
  DeleteADevContactContoller,
  AuthController
} from '../controller/index';

const router = express.Router();

// Valid Routes
router.post('/developer/register', AuthValidation.signUp, AuthController.signUp);

router.post('/developer/login', AuthValidation.signIn, AuthController.signIn);

router.post('/developer/contact', UserInputValidation.InputValidation, Auth.verify, PostDevContactController.postContact);

router.get('/developer/contact', GetAllDevContactsController.getAllContact);

router.put('/developer/contact/:contactId', UserInputValidation.InputValidation, Auth.verify, UpdateDevContactController.updateContact);

router.delete('/developer/contact/:contactId', Auth.verify, DeleteADevContactContoller.deleteDevContact);

// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));

router.post('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));

router.put('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));

router.delete('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));

export default router;
