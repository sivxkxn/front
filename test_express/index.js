//npm init -y
// npm install express
// export PORT=4200 && node index
//npm install -D @types/express
// npm install -D nodemon
/* "serve": "nodemon index.js",
    "start": "node index.js" */
import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
const __dirname=path.resolve()
const PORT=process.env.PORT??3000
const app=express()
app.set('view engine', 'ejs')
console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname,'static')))
app.use(requestTime)
app.use(logger)
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'static','index.html'))
// })

// app.get('/contacts', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'static','contacts.html'))
// })

// app.get('/download', (req, res)=>{
//         res.download(path.resolve(__dirname,'static','index.html'))
//     })
app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}...`)
})