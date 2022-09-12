import Router from "express"
import userRouter from './userRouter.js'
import credentialRouter from "./credentialRouter.js"
import noteRouter from './noteRouter.js'
import cardsRouter from './cardsRouter.js'
import wifiRouter from './wifiRouter.js'

const router = Router()
router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardsRouter)
router.use(wifiRouter)

export default router