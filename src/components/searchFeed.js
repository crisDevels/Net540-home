import React from 'react'
import ReactDOM from 'react-dom'

import { ModalAreaSelection } from './Modales/modalAreaSelection'
import { ModalSpecialSelection } from './Modales/modalSpecialSelection'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../pages/styles/feedStyles.css'

import { MdPlace } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'
import { VscLightbulbAutofix } from 'react-icons/vsc'
import styled from 'styled-components'

var styleIcon = {
  color: '#757575'
}

const FlexSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

function SearchFeed(props) {
  return (
    <FlexSearch>
      <div>
        <h2 className="titleSearch">Buscar trabajos</h2>
        <div className="center-search">
          <form>
            <div className='flex-input-search'>
              <BsFillCollectionFill style={styleIcon} size='20px'/>
                <button type='button' onClick={props.clickOpenModalArea} className='form-input-search'>{props.areaSelected}</button>
                <div onClick={props.closeModalArea} className={props.overlay}></div>
                {ReactDOM.createPortal(
                  <ModalAreaSelection
                  modalArea={props.modalArea}
                  onChange={props.onChangeArea}
                  closeModalArea={props.closeModalArea}
                  isOpenModalArea={props.isOpenModalArea} />,
                document.getElementById('modalAreaSelection'))
                }
            </div>
            <div className='flex-input-search'>
              <VscLightbulbAutofix style={styleIcon} size='20px'/>
                <button type='button' onClick={props.clickOpenModalSpecial} className='form-input-search'>{props.specialty}</button>
                <div onClick={props.closeModalSpecial} className={props.overlay}></div>
                {ReactDOM.createPortal(
                  <ModalSpecialSelection
                  modalSpecial={props.modalSpecial}
                  onChange={props.onChangeSpecialty}
                  closeModalSpecial={props.closeModalSpecial}
                  isOpenModalSpecial={props.isOpenModalSpecial} />,
                document.getElementById('modalSpecialSelection'))
                }
            </div>
            <div className='flex-input-search'>
              <MdPlace style={styleIcon} size='20px'/>
              <input 
              className="form-input-search" 
              type="text"
              name="profesionSearch"
              placeholder="Ciudad" />
            </div>
            <div className='container-button-search'>
              <button type='button' className="button-joobbi">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </FlexSearch>
  )
}

export default SearchFeed;