import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, resp)=>{
    resp.render('inicio',{
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, resp)=>{
    resp.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, resp)=>{
    // Consulte BD
    const viajes = await Viaje.findAll()

    
    resp.render('viajes',{
      pagina: 'Próximos Viajes',
      viajes
    })
}

const paginaTestimoniales= (req, resp)=>{
    resp.render('testimoniales',{
        pagina: 'Testimoniales'
    })
}

const paginaDetalleViaje = async (req, res)=>{
    const {slug} = req.params
    try{
        const viaje = await Viaje.findOne({where : {slug}})
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error){
        console.log(error)
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}