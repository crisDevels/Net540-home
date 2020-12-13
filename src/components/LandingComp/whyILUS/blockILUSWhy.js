import React from 'react'

import './stylesWhyILUS.css'

import imageAplication from '../../../images/oferta-empleos.png'
import imageFreelancer from '../../../images/beneficios-joobbi-ilu.png'
import imageSelect from '../../../images/select-benefict.png'

export const WhyJoobbiILU = () => {
  return (
    <div>
      <div className='wrapper-why-ILUS'>
        <h2 className='joobbi-title-why'>¿Porqué Joobbi?</h2>
        <div className='grid-why'>
          <div>
            <img src={imageAplication} className='render-ilus' alt='ilustracion de joobbi celebrando su trabajo' />
          </div>
          <div className='flex-titles-why'>
            <div>
              <h3 className='title-grand-why'>Emprende tus proyectos</h3>
              <p className='subtitle-why-font'>Aquí accedes a profesionales altamente capacitados para tus trabajos o proyectos, ¡No demores más tu busqueda de talento!</p>
            </div>
          </div>
        </div>
        <div className='grid-why'>
          <div className='flex-titles-why-l'>
            <div>
              <h3 className='title-grand-why'>Ofrece tus servicios profesionales</h3>
              <p className='subtitle-why-font'>En Joobbi, puedes inscribir tu perfil profesional de manerá ágil y dinámica.</p>
            </div>
          </div>
          <div>
            <img src={imageFreelancer} className='render-ilus' alt='ilustracion de joobbi celebrando su trabajo' />
          </div>
        </div>
        <div className='grid-why'>
          <div>
            <img src={imageSelect} className='render-ilus' alt='ilustracion de joobbi celebrando su trabajo' />
          </div>
          <div className='flex-titles-why'>
            <div>
              <h3 className='title-grand-why'>Entendemos tus necesidades</h3>
              <p className='subtitle-why-font'>Estudiamos los perfiles profesionales y aquellos proyectos que generan conexiones genuinas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}