import { Router } from 'express';
import wifiSchema from '../schemas/wifiSchema.js';
import * as controller from '../controllers/wifiController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import { validateToken } from '../middlewares/validateToken.js';

const wifiRouter = Router()

wifiRouter.post('/wifis', validateToken, validateSchemaMiddleware(wifiSchema), controller.registerWifi);
wifiRouter.get('/wifis', validateToken, controller.getWifis)
wifiRouter.get('/wifis/:id', validateToken, controller.getOneWifi)
wifiRouter.delete('/wifis/delete/:id', validateToken, controller.deleteOneWifi)

export default wifiRouter