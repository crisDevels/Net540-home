import React from 'react'

import '../styles/modales.css'

import ilusModal from '../../images/IlustracionCupones.svg'
import ModalShort from '../modalShort'

function ModalDesactive(props) {
    return (
        <React.Fragment>
            <ModalShort
            isOpen={props.isOpenDesactive}
            OpenModal={props.DesactiveOpenModal} 
            buttonAction="Desactivar" 
            titleModal="Desactivar publicación" 
            ILUModal={ilusModal} 
            textModal="¿Estás seguro/a? Después de desactivar tu publicación, no podrás volver a activarla" />
        </React.Fragment>
    )
}

export default ModalDesactive