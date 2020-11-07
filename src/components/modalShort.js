import React from 'react'

function ModalShort(props) {
  return (
    <React.Fragment>
      {<div className="modal-aplication">
        <div className='container-modal-short'>
          <div className="titleblock-modal">
            <div className="title-modal">
              <p>{props.titleModal}</p>
            </div>
          </div>
          <div className="container-image-modal">
            <img alt="ilustracion modal" width="150px" src={props.ILUModal}/>
          </div>
          <p className="descriptionModal">{props.textModal}</p>
          <div className="flex-buttons-modal-short">
            <button onClick={props.inAction} className="delete-button">{props.buttonAction}</button>
            <button onClick={props.OpenModal} className="button-line">Cancelar</button>
          </div>
        </div>
      </div>
      } 
    </React.Fragment>
  )
}


export default ModalShort