const router = require('express').Router()
const userRouter = require('../routes/userRouter.js')
const courseRouter = require('../routes/courseRouter.js')
const mediaRouter = require('../routes/mediaRouter.js')
router.use('/users', userRouter)
router.use('/courses', courseRouter)
router.use('/media', mediaRouter)
module.exports = router