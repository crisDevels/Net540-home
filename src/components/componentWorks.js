import React, { useEffect, useRef, useState } from 'react'

import './styles/stylesListWork.css'
import './styles/PublicationStyle.css'
import './styles/modales.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import checkIcon from '../images/check.svg'

import { MdPlace } from 'react-icons/md'
import { GoBriefcase } from 'react-icons/go'
import styled, { keyframes } from 'styled-components'

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

const DivComponent = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 30px;
  border-bottom: 1px solid #757575;
  min-height: 260px;
`

const DivFadeIn = styled.div`
  animation: 1s ${fadeIn} ease;
`

export const ComponentWork = ({ dataWork }) => {

  const ref = useRef(null)
  const [ visible, setVisible ] = useState(false)

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
    <DivComponent ref={ref}>
      {!visible ? null : 
        <DivFadeIn>
          <div className="flex-title-vacant">
            <div className="div-TypeCompany">
              <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage}/>
              {dataWork.verify &&
                <div className="cirle-check-publication">
                  <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                </div>
              }
            </div>
            <div className="title-vacant-general">
              <p className="titleVacant">
                {dataWork.titleService}<strong> {dataWork.urgentJob && "URGENTE"}</strong>
              </p>
              <p className="subtitleVacant-fecha">
                {dataWork.areaService}
              </p>
            </div>
            <div className='container-rate'>
              <p className='p-rate-service'> $ {dataWork.rateJob}</p>
            </div>
          </div>
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
                <GoBriefcase style={styleIcon} size='20px'/>
              </div>
              <div className='container-feactures'>
                <p className='p-item-service-strong'>Trabajo</p>
                <p className='p-item-service'>{dataWork.modalityJob}</p>
              </div>
            </div>
          </div>
          <div className="short-description-vacant">
            <div className="description">
              <p>{dataWork.descriptionService}</p>
            </div>
          </div>
        </DivFadeIn>
      }
    </DivComponent>
  )
}