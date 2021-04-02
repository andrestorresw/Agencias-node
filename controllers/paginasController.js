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

const paginaViajes = (req, resp)=>{
    resp.render('viajes',{
      pagina: 'Viajes'
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