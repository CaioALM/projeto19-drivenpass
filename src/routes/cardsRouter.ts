import { Router } from "express";

import cardSchema from "../schemas/cardSchema.js";
import * as controller from "../controllers/cardController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateToken.js";

const cardsRouter = Router()

cardsRouter.post('/cards', validateToken, validateSchemaMiddleware(cardSchema), controller.registerCard);
cardsRouter.get('/cards', validateToken, controller.getAllCards)
cardsRouter.get('/cards/:id', validateToken, controller.getOneCard)
cardsRouter.delete('/cards/delete/:id', validateToken, controller.deleteOneCard)

export default cardsRouter