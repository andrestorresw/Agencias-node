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

    console.log(viajes)

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

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}