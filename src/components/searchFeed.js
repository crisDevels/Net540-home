import React from 'react'
import ReactDOM from 'react-dom'

import { ModalAreaSelection } from './Modales/modalAreaSelection'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../pages/styles/feedStyles.css'

import { GoBriefcase } from 'react-icons/go'
import { MdPlace } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'

var styleIcon = {
  color: '#757575'
}

function SearchFeed(props) {
  return (
    <div className={props.blockSearch}>
      <div>
        <h2 className="titleSearch">Buscar trabajos</h2>
        <div className="center-search">
          <form>
            <div className='flex-input-search'>
              <GoBriefcase style={styleIcon} size='20px'/>
              <input
              onChange={props.handleQuery}
              value={props.query}
              className="form-input-search" 
              type="text"
              name="profesionSearch"
              placeholder="Título" />
            </div>
            <div className='flex-input-search'>
              <MdPlace style={styleIcon} size='20px'/>
              <input 
              className="form-input-search" 
              type="text"
              name="profesionSearch"
              placeholder="Ciudad" />
            </div>
            <div className='flex-input-search'>
              <BsFillCollectionFill style={styleIcon} size='20px'/>
                <button type='button' onClick={props.clickOpenModalArea} className='form-input-search'>{props.areaSelected}</button>
                <div onClick={props.closeModalArea} className={props.overlay}></div>
                {ReactDOM.createPortal(
                  <ModalAreaSelection
                  modalArea={props.modalArea}
                  onChange={props.onChange}
                  closeModalArea={props.closeModalArea}
                  isOpenModalArea={props.isOpenModalArea} />,
                document.getElementById('modalAreaSelection'))
                }
            </div>
            <div className='container-button-search'>
              <button type='button' className="button-joobbi">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchFeed;