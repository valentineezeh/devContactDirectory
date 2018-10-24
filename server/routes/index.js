import express from 'express';
import UserInputValidation from '../middleware/ValidateUserInput';
import PostDevContactController from '../controller/PostContact';

const router = express.Router();

router.post('/developer/contact', UserInputValidation.InputValidation, PostDevContactController.postContact);

export default router;
