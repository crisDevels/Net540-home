import React from 'react'

import LOGOhero from '../../images/LogoHERO.svg'

export const HeroContent = ()=> (
  <div className="block-content-hero">
    <div className='wrapper-hero-landing'>
      <div className='container-logo-hero'>
        <div className='div-logo-texto'>
          <img src={LOGOhero} alt='LOGO png Joobbi sin fondo' className='styles-logo-hero' />
          <p className='hero-text'>Somos el futuro del trabajo y una auténtica comunidad de freelancers.</p>
        </div>
      </div>
    </div>
  </div>
)