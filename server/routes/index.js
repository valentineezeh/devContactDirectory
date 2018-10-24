import express from 'express';
import UserInputValidation from '../middleware/ValidateUserInput';
import { PostDevContactController, GetAllDevContactsController, UpdateDevContactController } from '../controller/index';

const router = express.Router();

router.post('/developer/contact', UserInputValidation.InputValidation, PostDevContactController.postContact);

router.get('/developer/contact', GetAllDevContactsController.getAllContact);

router.put('/developer/contact/:contactId', UserInputValidation.InputValidation, UpdateDevContactController.updateContact);

export default router;
