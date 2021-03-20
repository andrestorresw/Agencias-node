import express from 'express'
const router = express.Router()

router.get('/', (req, resp)=>{
    resp.render('inicio')
})

router.get('/nosotros', (req, resp)=>{
    resp.render('nosotros')
})


export default router;