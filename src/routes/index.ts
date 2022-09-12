import Router from "express"
import userRouter from './userRouter.js'
import credentialRouter from "./credentialRouter.js"
import noteRouter from './noteRouter.js'

const router = Router()
router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)

export default router