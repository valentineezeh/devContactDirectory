import express from 'express';
import UserInputValidation from '../middleware/ValidateUserInput';
import {
  PostDevContactController,
  GetAllDevContactsController,
  UpdateDevContactController,
  DeleteADevContactContoller
} from '../controller/index';

const router = express.Router();

// Valid Routes
router.post('/developer/contact', UserInputValidation.InputValidation, PostDevContactController.postContact);

router.get('/developer/contact', GetAllDevContactsController.getAllContact);

router.put('/developer/contact/:contactId', UserInputValidation.InputValidation, UpdateDevContactController.updateContact);

router.delete('/developer/contact/:contactId', DeleteADevContactContoller.deleteDevContact);

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
