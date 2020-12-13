import React from 'react'

import './stylesILU.css'

import skyline from '../../../images/skyline-back-hero.png'
import nubesBack from '../../../images/nubes-back.png'
import buildBackLogo from '../../../images/builds-back-logo.png'
import buildFrontLogo from '../../../images/builds-front-logo.png'
import sceneFront from '../../../images/scene-front-short.png'
import nubeAnimationGrande from '../../../images/nube-grande-animation.png'
import nubeAnimationPequeña from '../../../images/nube-pequeno-animation.png'
import globoAnimado from '../../../images/dirgible-pequeno-animation.png'

export const HeroILU = () => {
  return (
    <div className='container-ILU-hero'>
      <div className='wrapper-ILU'>
        <div className='container-relative-ILU'>
          <img alt='skyline ilustrations' src={skyline} className='container-skyline'/>
          <img alt='nubes background ilustrations' src={nubesBack} className='container-nube'/>
          <img alt='edificios background ilustrations' src={buildBackLogo} className='container-build-back-logo'/>
          <img alt='globo png animado' src={globoAnimado} className='container-globo-animation-rigth' />
          <div className='back-gradient'></div>
          <img alt='edificios ilustrations' src={buildFrontLogo} className='container-build-front-logo' />
          <img alt='freelancer trabajo del futuro' src={sceneFront} className='container-scene-front' />
          <img alt='nube png animada' src={nubeAnimationGrande} className='container-nube-animation-left' />
          <img alt='nube png animada' src={nubeAnimationPequeña} className='container-nube-animation-rigth' />
        </div>
      </div>
    </div>
  )
}