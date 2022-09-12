
import { Router } from 'express';
import * as controller from '../controllers/noteController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import  noteSchema  from '../schemas/noteSchema.js';
import { validateToken } from '../middlewares/validateToken.js';


const noteRouter = Router();

noteRouter.post('/notes', validateToken, validateSchemaMiddleware(noteSchema), controller.createNote);
noteRouter.get("/notes", validateToken, controller.getNotes);
noteRouter.get("/note/:id", validateToken, controller.getNote);
noteRouter.delete("/note/delete/:id", validateToken, controller.deleteNote);

export default noteRouter;