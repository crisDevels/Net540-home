import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'
import { FiType } from 'react-icons/fi'
import { FiMessageSquare } from 'react-icons/fi'

import '../styles/stylesMenuPhone.css'

var stylesIcons = {
  color: '#1DAEFF',
  margin: '0 20px 0 0'
}

export const ModaleInicioBurguer = (props) => {
  if (!props.openMenuPhone) {
    return null
  }
  return (
    <React.Fragment>
      <div className='container-menu-phone'>
        <div className='phone-buttons-flex'>
          <div className='button-phone'>
            <AiFillHome style={stylesIcons} size='20px' />
            <p onClick={props.openModalInicio} className='p-button-menu'>Ingresar</p>
          </div>
          <div className='button-phone'>
            <FiUserPlus style={stylesIcons} size='20px' />
            <p onClick={props.openModalRegistro} className='p-button-menu'>Registrarme</p>
          </div>
          <div className='button-phone'>
            <FiMessageSquare style={stylesIcons} size='20px' />
            <p className='p-button-menu'>Conócenos</p>
          </div>
          <div className='button-phone'>
            <FiType style={stylesIcons} size='20px' />
            <p className='p-button-menu'>Blog</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}