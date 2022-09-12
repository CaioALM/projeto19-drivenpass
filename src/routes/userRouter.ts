
import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import userSchema from '../schemas/userSchema.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';

const userRouter = Router();

userRouter.post("/register", validateSchemaMiddleware(userSchema), userController.signUp);
userRouter.post("/login", validateSchemaMiddleware(userSchema), userController.signIn);

export default userRouter;