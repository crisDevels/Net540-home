import React from 'react'
import { Link } from 'react-router-dom'

import LOGOhero from '../../images/LogoHERO.svg'

export const HeroContent = ()=> (
  <div className="block-content-hero">
    <div className='wrapper-hero-landing'>
      <div className='container-logo-hero'>
        <div className='div-logo-texto'>
          <img src={LOGOhero} alt='LOGO png Joobbi sin fondo' className='styles-logo-hero' />
          <p className='hero-text'>Somos el futuro del trabajo y una auténtica comunidad de freelancers.</p>
          <div className='container-button-hero'>
            <Link to='/works'>
              <button className='button-joobbi'>Explorar Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)