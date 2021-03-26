import express from 'express'
import router from './routes/index.js'

const app = express()

//Define port
const port = process.env.PORT || 4000

//Enable pug
app.set('view engine', 'pug')

//Get actual year
app.use((req, resp, next)=>{
    console.log(req)
    return next()
})

//Define public folder
app.use(express.static('public'))

//Add router
app.use('/', router)

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})