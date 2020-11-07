import React from 'react'
import { Link } from 'react-router-dom'

export const WhyJooby = () => (
  <div className='block-why-joobbi'>
    <div className='wrapper-why-joobbi'>
      <div className='col-1-100'>
        <div className='flex-title-why'>
          <h3 className='title-why-joobbi'>¿Porqué Joobbi?</h3>
        </div>
        <ul className='list-why-joobbi'>
          <li className='item-list-why'>
            <img width='80px' src='http://joobbi.com/wp-content/uploads/2020/10/ContratanteIcon.svg' alt='icon de servicios profesionales' />
            <h2 className='subtitle-why'>Ofrece tus servicios profesionales</h2>
            <p className='p-why-description'>En Joobbi, puedes inscribir tu perfil profesional de manerá ágil y dinámica.</p>
          </li>
          <li className='item-list-why'>
            <img width='80px' src='http://joobbi.com/wp-content/uploads/2020/10/ProjectsIcon.svg' alt='icon de servicios profesionales' />
            <h2 className='subtitle-why'>Emprende tus proyectos</h2>
            <p className='p-why-description'>Aquí accedes a profesionales altamente capacitados para tus trabajos o proyectos, ¡No demores más tu busqueda de talento!</p>
          </li>
          <li className='item-list-why'>
            <img width='80px' src='http://joobbi.com/wp-content/uploads/2020/10/NecesidadIcon.svg' alt='icon de servicios profesionales' />
            <h2 className='subtitle-why'>Entendemos tus necesidades</h2>
            <p className='p-why-description'>Estudiamos los perfiles profesionales y aquellos proyectos que generan conexiones genuinas.</p>
          </li>
        </ul>
        <div className='button-flex-why'>
            <div className='buttons-50'>
              <Link to='/registro-freelancer'><button className='button-line'>Ofrece tus servicios <hr className='border-button-botom-line'></hr></button></Link>
            </div>
            <div className='buttons-50'>
              <Link to='/publicar-trabajo'><button className='button-joobbi'>Contacta un freelancer </button></Link>
            </div>
        </div>
      </div>
    </div>
  </div>
)