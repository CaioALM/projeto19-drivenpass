import Router from "express"
import userRouter from './userRouter.js'
import credentialRouter from "./credentialRouter.js"
import noteRouter from './noteRouter.js'
import cardsRouter from './cardsRouter.js'

const router = Router()
router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardsRouter)

export default router