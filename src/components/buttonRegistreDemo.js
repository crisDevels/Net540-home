import React from 'react'
import { ModalRegistre } from './Modales/ModalRegistre'
import ReactDOM from 'react-dom'

export const ButtonRegistreDemo = (props) => {
  return (
    <div>
      <div onClick={props.cerrarModalRegistro} className={props.overlay} id='overlay'></div>
      {
      !props.user &&
        <div>
          <div className='centerButton-block'>
            <button onClick={props.abrirModalRegistro} className='button-joobbi'>Regístrate</button>
          </div>
        </div>
      }
      {
      ReactDOM.createPortal (
        <ModalRegistre
        blockModalRegistro={props.blockModalRegistro}
        isOpenRegistro={props.isOpenRegistro}
        email={props.email}
        name={props.name}
        password={props.password}
        registryEmail={props.registryEmail}
        registryPassword={props.registryPassword}
        handleChange={props.handleChange}
        handleAuth={props.handleAuth}
        handleAuthFacebook={props.handleAuthFacebook}
        createUser={props.createUser}
        cerrarModalRegistro={props.cerrarModalRegistro}/>,
      document.getElementById('modalRegistre')
      )
      }
    </div>
  )
}