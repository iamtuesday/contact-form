import express, { Express, Response, Request } from 'express'
import cors from 'cors'
const Joi = require('joi')
const app: Express = express()

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
})

app.post('/api/signup', (req: Request, res: Response) => {
  const { error, value } = signupSchema.validate(req.body, {
    abortEarly: false,
  })
})

//Update Routes
// const userRoutes = require('./routes/userRoutes')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
// app.use("/api/auth", userRoutes);

app.get('/api/', (req: Request, res: Response) => {
  res.send({
    msg: 'Hello World!',
  })
})

// module.exports = app
export default app

// app.post('/api/data', (req: Request, res: Response) => {
//   console.log(req.body)

//   return res.sendStatus(200)
// })
