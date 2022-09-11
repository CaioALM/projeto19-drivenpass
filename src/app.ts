import express, {json} from "express"
import cors from "cors"
import chalk from "chalk"
import dotenv from "dotenv"

import 'express-async-errors'
import router from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'


dotenv.config()

const app = express()
app.use(cors())
app.use(json())
app.use(router)
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 4000

app.listen(PORT, () => {
    console.log(chalk.green.bold(`listening on port ${PORT}`))})