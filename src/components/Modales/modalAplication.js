import React from 'react'

import '../styles/modales.css'

import ilusModal from '../../images/IlustracionCupones.svg'

function ModalAplication(props) {
  if(!props.isOpenAplication) {
    return null
  }
  return (
    <React.Fragment>
      <div className={props.modal}>
        <div className='container-modal-short'>
          <div className="titleblock-modal">
            <div className="title-modal">
              <p>Confirmación</p>
            </div>
          </div>
          <div className="container-image-modal">
            <img alt="ilustracion modal" width="150px" src={ilusModal}/>
          </div>
          <p className="descriptionModal">Aplicar a este empleo descuenta 5 cupones de tu cuenta</p>
          <div className="flex-button">
            <button className="button-joobbi">Confirmar</button>
            <button onClick={props.onAplication} className="button-line">Cancelar</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ModalAplication