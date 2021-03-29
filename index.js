import express from 'express'
import router from './routes/index.js'

const app = express()

//Define port
const port = process.env.PORT || 4000

//Enable pug
app.set('view engine', 'pug')

//Get current year
app.use((req, resp, next)=>{
    const year = new Date()
    resp.locals.year = year.getFullYear()
    resp.locals.nombreSitio = 'Agencia de Viajes'
    next()
})

//Define public folder
app.use(express.static('public'))

//Add router
app.use('/', router)

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})