import express from 'express'
const router = express.Router()

router.get('/', (req, resp)=>{
    const suma = 1+1
    resp.render('inicio',{
        suma
    })
})

router.get('/nosotros', (req, resp)=>{
    const viajes = 'Viaje a Alemania'
    resp.render('nosotros',{
        viajes: viajes
    })
})


export default router;