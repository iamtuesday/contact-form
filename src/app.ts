import express, { Response, Request } from 'express'
import cors from 'cors'

const app = express()

//Update Routes
// const userRoutes = require('./routes/userRoutes');

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
