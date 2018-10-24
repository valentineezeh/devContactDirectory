import express from 'express';
import UserInputValidation from '../middleware/ValidateUserInput';
import { PostDevContactController, GetAllDevContactsController } from '../controller/index';

const router = express.Router();

router.post('/developer/contact', UserInputValidation.InputValidation, PostDevContactController.postContact);

router.get('/developer/contact', GetAllDevContactsController.getAllContact);

export default router;
