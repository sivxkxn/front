const bodyParser = require('body-parser')
const express = require('express')
const apiRouter = require('./routes/apiRouter.js')
const app = express()
const expressSwaggerGenerator = require('express-swagger-generator')
const expressSwagger = expressSwaggerGenerator(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const morgan = require('morgan')
app.use(morgan('dev'))

app.use('/api', apiRouter)

const options = {
    swaggerDefinition: {
        info: {
            description: 'Labs are killing my mental health',
            title: 'Lab2',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        produces: ["application/json"],
    },
    basedir: __dirname,
    files: ['./routes/**/*.js', './models/**/*.js'],
}
expressSwagger(options)

app.listen(3000)