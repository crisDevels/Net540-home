import React from 'react'

import './styles/modales.css'

import ilusModal from '../images/IlustracionCupones.svg'

function ModalAplication(props) {
    return (
        <React.Fragment>
            <div className={props.modal}>
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
                    <button className="confirmar-button">Confirmar</button>
                    <button onClick={props.onAplication} className="cancelar-button">Cancelar</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalAplication