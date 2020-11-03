import React from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

import googleIcon from '../../images/googleIcono.png'
import facebookIcon from '../../images/facebook-icon.svg'
import linkedIcon from '../../images/linked-icon.svg'

import '../styles/navStyles.css'
import '../../pages/styles/landingStyles.css'
import '../../formsStyles.css'

var iconGoogle = {
  width: '100%',
  backgroundImage: 'url('+ googleIcon + ')'
};
  
var iconFacebook = {
  width: '100%',
  backgroundImage: 'url('+ facebookIcon + ')'
};
  
var iconLinked = {
  width: '100%',
  backgroundImage: 'url('+ linkedIcon + ')'
};

export const ModalInicioSesion = (props) => {
  if (!props.isOpenInicio) {
    return null
  }
  return (
    <div className={props.blockModalInicio}>
      <div className='titleRegistro-inicio-sesion'>
        <div className='title-modal-inicio'>
          <h2 className='title-modales'>Iniciar Sesión</h2>
        </div>
        <div className='button-flex-end'>
          <div onClick={props.cerrarModalInicio} className='background-x'>
            <MdClose />
          </div>
        </div>
      </div>
      <form className='formRegitreInicio'>
        <input
          value={props.email}
          onChange={props.handleChange} 
          className='space-form-input' 
          type='email' 
          name='email' 
          placeholder='Correo Electrónico'
          id='inputEmail' 
          size='40' required/>
        <input
          value={props.password}
          onChange={props.handleChange} 
          className='space-form-input' 
          type='password' 
          name='password'
          id='inputPassword' 
          placeholder='Contraseña' required /> 
        <div className='login'>
          <button onClick={props.login} className='button-joobbi' type='submit'>Acceder</button>
          <Link to='/recuperar-contraseña'>
            <button className='buttonOlvido' type='button'>Olvidé mi contraseña</button>
          </Link>
        </div>
      </form>
      <hr className='line-login' data-content='or'></hr>
      <div className='div-buttons-auth'>
        <button style={iconGoogle} className='google-auth' onClick={props.handleAuth} type='buttton'>Continuar con Google</button>
        <button style={iconFacebook} className='facebook-auth' onClick={props.handleAuth} type='buttton'>Continuar con Facebook</button>
        <button style={iconLinked} className='linkedin-auth' onClick={props.handleAuth} type='buttton'>Continuar con Linkedin</button>
      </div>
      <div>
        <p>¿Eres nuevo en Net540? < Link to='/registro-joobbi'> Regístrate ahora</Link></p>
      </div>
    </div>
  ) 
}