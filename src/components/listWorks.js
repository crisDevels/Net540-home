import React from 'react'
import { Link } from 'react-router-dom'

import './styles/stylesListWork.css'
import './styles/PublicationStyle.css'
import './styles/modales.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import checkIcon from '../images/check.svg'
import LoaderSkeletonWorkList from './loaderWorkList'

function ListWorks(props) {
  const feed = props.feed
  if(feed.length === 0) {
    return (
      <LoaderSkeletonWorkList />
    )
  }
  return (
    <ul className="list-unstyled-feed">
      <div className="title-works">
        <h2 className='title-list-works-feed'>Trabajos que pueden ser de tu interés</h2>
      </div>
      {
        feed.map((dataWork) => {
          return (
            <li onClick={props.handleClick} key={dataWork.id}>
              <Link to={`/works/${dataWork.id}`}>
                <div className="publication">
                  <div className="flex-title-vacant">
                    <div className="div-TypeCompany">
                      <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage} width="35px"/>
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
                        30 de Septiembre, 2020
                      </p>
                    </div>
                  </div>
                  <div className="blockSubs">
                    <p className="subtitleVacant">
                      <img alt="icono salario" src={iconRate} height="15px"/>
                      Valor del servicio: $ {dataWork.rateJob} USD
                    </p>
                    <p className="subtitleVacant">
                      <img alt="icono localización" src={iconLocation} height="19px" />
                      Ubicación: {dataWork.locationJob}
                    </p>
                  </div>
                  <div className="short-description-vacant">
                    {/* <div className="block-white"></div> */}
                    <div className="description">
                      <p>{dataWork.descriptionService}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );}).reverse()
        }
      </ul>
    )
}

export default ListWorks;