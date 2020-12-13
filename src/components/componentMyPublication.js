import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import styled, { keyframes } from 'styled-components'

import './styles/stylesListWork.css'
import './styles/PublicationStyle.css'
import './styles/modales.css'
import './styles/searchAnimated.css'

import { FaEye } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'
import { SiCashapp } from 'react-icons/si'

var iconVisual = {
  color: 'white',
  margin: '0 5px 0 0'
}

var styleIcon = {
  color: '#1DAEFF'
}

const fadeIn = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`

const FlexComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
  border-style: solid;
  border-width: .5px;
  border-color: #c4c4c4;
  border-radius: 15px;
  height: 260px;
`

const BlockComponent = styled.div`
  display: block;
  width: 95%;
  animation: 1s ${fadeIn} ease;
`

const BlockComponentBorder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: 1s ${fadeIn} ease;
`

export const ComponentPublication = ({ handleClick, dataWork }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting }  = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])

  return (
    <FlexComponent ref={ref}>
      { !visible ? null : 
        <BlockComponentBorder>
          <BlockComponent>
            <div className="flex-title-myService">
              <div className="title-publication-general">
                <p className="titleVacant">
                  {dataWork.titleService}<strong> {dataWork.urgentJob && "URGENTE"}</strong>
                </p>
                <p className="subtitleVacant-fecha">
                  30 de Septiembre, 2020
                </p>
              </div>
              <div className="flex-description-candidates">
                <Link onClick={handleClick} to={`/my-publications/${dataWork.id}/edit`}>
                  <button className="buttonVer">
                    <FaEye size='20px' style={iconVisual} />
                    Ver solicitud
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-description-candidates">
              <div className="flex-items">
                <div className='container-item-service-100'>
                  <div className='container-border-icon'>
                    <MdPlace style={styleIcon} size='20px'/>
                  </div>
                  <div className='container-feactures'>
                    <p className='p-item-service-strong'>Ubicación</p>
                    <p className='p-item-service'>{dataWork.locationJob}</p>
                  </div>
                </div>
                <div className='container-item-service-100'>
                  <div className='container-border-icon'>
                    <SiCashapp style={styleIcon} size='17px'/>
                  </div>
                  <div className='container-feactures'>
                    <p className='p-item-service-strong'>Pago</p>
                    <p className='p-item-service'> $ {dataWork.rateJob}</p>
                  </div>
                </div>
              </div>
            </div>
          </BlockComponent>
          <div className="border-candidate">
            <p className="candidates-p">Tienes <strong>0 candidatos</strong> para este trabajo
              <Link to={`/my-candidates/${dataWork.id}/candidates`}>
                <button className="button-candidates">Ver candidatos</button>
              </Link>
            </p>
          </div>
        </BlockComponentBorder>
      }
    </FlexComponent>
  )
}