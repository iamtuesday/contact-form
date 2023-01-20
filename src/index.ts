import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

import app from './app'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
