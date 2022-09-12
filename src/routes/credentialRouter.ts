
import { Router } from "express";
import  credentialSchema  from "../schemas/credentialsSchema.js";
import * as controller from "../controllers/credentialController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateToken.js";

const credentialRouter = Router()

credentialRouter.post('/credentials', validateToken, validateSchemaMiddleware(credentialSchema), controller.createCredential);
credentialRouter.get('/credentials', validateToken, controller.getAllCredentials)
credentialRouter.get('/credentials/:id', validateToken, controller.getCredential)
credentialRouter.delete('/credentials/delete/:id', validateToken, controller.deleteCredential)

export default credentialRouter