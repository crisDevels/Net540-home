import React from 'react'

import './styles/modales.css'

import ilusModal from '../images/IlustracionCupones.svg'
import ModalShort from './modalShort'

function ModalDelete(props) {
    return (
        <React.Fragment>
            <ModalShort
            isOpen={props.isOpenDelete}
            OpenModal={props.DeleteOpenModal}
            inAction={props.DeletePublication} 
            buttonAction="Eliminar" 
            titleModal="Eliminar publicación" 
            ILUModal={ilusModal} 
            textModal="¿Estás seguro/a? Después de eliminar tu publicación, no podrás recuperarla." />
        </React.Fragment>
    )
}

export default ModalDelete