const express = require("express")

const app = express();
const cors = require('cors')
const { logger } = require('./middlewares')
app.use(logger)
app.use(cors())

// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')
const ProfileRouter = require('./routes/profile')
const confirmRouter = require('./routes/confirm')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const promotionRouter = require('./routes/promotion')
const orderRouter = require('./routes/order')


app.use(indexRouter.router)
app.use(ProfileRouter.router)
app.use(confirmRouter.router)
app.use(adminRouter.router)
app.use(userRouter.router)
app.use(promotionRouter.router)
app.use(orderRouter.router)


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})