import React from 'react'

function ModalShort(props) {

    if(!props.isOpen) {
        return null
    }
    
    if(props.isOpen) {
        return (
            <React.Fragment>
                {                              
                <div isOpen={props.isOpen} className="modal-aplication">
                    <div className="titleblock-modal">
                        <div className="title-modal">
                            <p>{props.titleModal}</p>
                        </div>
                    </div>
                    <div className="container-image-modal">
                        <img alt="ilustracion modal" width="150px" src={props.ILUModal}/>
                    </div>
                    <p className="descriptionModal">{props.textModal}</p>
                    <div className="flex-button">
                        <button onClick={props.inAction} className="delete-button">{props.buttonAction}</button>
                        <button onClick={props.OpenModal} className="cancelar-button">Cancelar</button>
                    </div>
                </div>
                } 
            </React.Fragment>
        )
    }
}

export default ModalShort