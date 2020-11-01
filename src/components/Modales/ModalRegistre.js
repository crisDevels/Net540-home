import React from 'react'
import { FiX } from 'react-icons/fi'

import '../styles/navStyles.css'
import '../../pages/styles/landingStyles.css'

export const ModalRegistre = (props) => {
  if (!props.isOpenRegistro) {
    return null
  }
  return (
    <React.Fragment>
      <div className={props.blockModalRegistro}>
        <div>
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
              value={props.phone}
              onChange={props.handleChange} 
              className='space-form-input' 
              type='phone' 
              name='phoneNumber'
              placeholder='Celular'
              id='registryPhone' 
              size='40' required/>
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
            <button
              onClick={props.createUser}
              className='button-joobbi' 
              type='submit'>
                  Registrar
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) 
}