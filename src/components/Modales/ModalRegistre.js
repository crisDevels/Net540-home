import React from 'react'
import { FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

import '../styles/navStyles.css'
import '../../pages/styles/landingStyles.css'
import '../styles/registreStyles.css'

var colorIcon = {
  color: 'white'
}

export const ModalRegistre = (props) => {
  if (!props.isOpenRegistro) {
    return null
  }
  return (
    <React.Fragment>
      <div className={props.blockModalRegistro}>
        <div className='block-modal-int'>
          <div className='contianer-title-registro'>
            <h2 className='title-modales'>Registro</h2>
            <div className='background-x' onClick={props.cerrarModalRegistro}>
              <FiX />
            </div>   
          </div>
          <form>
            <div className='flex-registre'>
              <input
                value={props.name}
                onChange={props.handleChange} 
                className='space-form-input-50' 
                type='text' 
                name='name' 
                placeholder='Nombre'
                id='registryName'
                size='40' required/>
              <input
                value={props.lastName}
                onChange={props.handleChange}
                className='space-form-input-50' 
                type='text' 
                name='lastName' 
                placeholder='Apellido'
                id='registryApellido' 
                size='40' required/>
            </div>
            <input
              value={props.registryEmail}
              onChange={props.handleChange} 
              className='space-form-input' 
              type='text' 
              name='registryEmail' 
              placeholder='Correo Electrónico'
              id='RegistryEmail' 
              size='40' required/>
            <input
              value={props.registryPassword}
              onChange={props.handleChange} 
              className='space-form-input' 
              type='password' 
              name='registryPassword'
              id='RegistryPassword' 
              placeholder='Contraseña' required />
            <input
              value={props.registryPassword}
              onChange={props.handleChange} 
              className='space-form-input' 
              type='password' 
              name='ConfregistryPassword'
              id='ConfRegistryPassword' 
              placeholder='Confirmar Contraseña' required /><br/>
            <div className='container-check-politic'>
              <label className='check-politic-terms'>
                <input 
                  type='checkbox' 
                  id='check-politicas' 
                  name='checkedPoliticas' 
                  value='checkbox-politicas' 
                  className='checkbox'/> Estoy de acuerdo con la <a href='/'><strong>política de privacidad</strong></a> y con los <a href='/'><strong>terminos y condiciones</strong></a></label><br/>
            </div>
            <div className='contianer-button-registre'>
              <button
                onClick={props.createUser}
                className='button-joobbi' 
                type='submit'>
                    Registrar
              </button>
            </div>
          </form>
          <div className='block-social-media'>
            <p className='title-social-media-registre'>Ingresa con tus redes sociales</p>
            <div className='flex-buttons-social'>
              <button onClick={props.handleAuth} className='button-short-google'>
                < FcGoogle size='20px' />
              </button>
              <button onClick={props.handleAuthFacebook} className='button-short-face'>
                < FaFacebookF style={colorIcon} size='20px' />
              </button>
              <button onClick={props.handleAuth} className='button-short-linkedin'>
                < FaLinkedinIn style={colorIcon} size='20px' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) 
}