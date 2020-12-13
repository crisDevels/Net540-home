import React from 'react'
import { Link } from 'react-router-dom'
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

  if (!props.user) {
    return (
      <div className='container-menu-phone'>
        <div className='phone-buttons-flex'>
          <Link to='/inicio-joobbi'>
            <div className='button-phone'>
              <AiFillHome style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Ingresar</p>
            </div>
          </Link>
          <Link to='/registro-joobbi'>
            <div className='button-phone'>
              <FiUserPlus style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Registrarme</p>
            </div>
          </Link>
          <Link to='/publicar-trabajo'>
            <div className='button-phone'>
              <FiMessageSquare style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Contacta un freelancer</p>
            </div>
          </Link>
          <Link to='/works'>
            <div className='button-phone'>
              <FiType style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Ver trabajos</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className='container-menu-phone'>
        <div className='phone-buttons-flex'>
          <Link to='/inicio-joobbi'>
            <div className='button-phone'>
              <AiFillHome style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Ingresar</p>
            </div>
          </Link>
          <Link to='/registro-joobbi'>
            <div className='button-phone'>
              <FiUserPlus style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Registrarme</p>
            </div>
          </Link>
          <Link to='/somos-joobbi'>
            <div className='button-phone'>
              <FiMessageSquare style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Conócenos</p>
            </div>
          </Link>
          <Link to='/works'>
            <div className='button-phone'>
              <FiType style={stylesIcons} size='20px' />
              <p className='p-button-menu'>Blog</p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}