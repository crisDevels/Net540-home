import React from 'react'

import './styles/panelCandidatesStyles.css'
import { BiCheck } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

var styleIconWhite = {
  color: 'white'
}

export const PanelCandidates = ()=> {
  return (
    <div className='fixed-panel-candidates'>
      <p className='p-panel-candidates'>Tienes: 20 candidatos</p>
      <button className='button-panel-candidates'>
        <div className='background-button-icon-check'></div>
        <div className='icon-container'>
          <BiCheck size="25px" style={styleIconWhite} />
        </div>
        <p className='text-index'>Aprobados</p>
      </button>
      <button className='button-panel-candidates'>
        <div className='background-button-icon-deny'></div>
        <div className='icon-container'>
          <CgClose size="25px" style={styleIconWhite} />
        </div>
        <p className='text-index'>Rechazados</p>
      </button>
    </div>
  )
}