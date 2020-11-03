import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/stylesListWork.css'
import './styles/myPublicationStyle.css'
import './styles/modales.css'
import './styles/searchAnimated.css'

import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import VisualitationIcono from '../images/VisualitationIcon.svg'
import LoaderSkeletonPublicationList from './loaderPublicationList'
import searchIcono from '../images/searchIconBlanco.svg'

var iconVisual = {
    backgroundImage: "url("+ VisualitationIcono + ")"
}

function ListPublications(props) {
  const [ query, setQuery ] = useState('')
  const feed = props.feed
  const [ filteredPublication, setFilteredPublication ] = useState(feed)
  React.useMemo(() => {
    const result = feed.filter( publication => {
      return (publication.titleService.toLowerCase().includes(query.toLowerCase()));
    });
    setFilteredPublication(result)
    }, [feed, query])
    const changeQuery = (e)=> {
      setQuery(e.target.value)
  }
  function SearchShort() {
    return (
      <div className="form-group">
        <input
        autoFocus
        type="text" 
        className="form-control"
        value={query}
        onChange={changeQuery} 
        />
        <div className="background-logo-search">
          <img src={searchIcono} alt="icono de buscar" width="10px" />
        </div>
      </div>
    )
  }
  return (
    <ul className="list-unstyled-feed">
      <div className="title-works">
        <div className="col-title">
          <h2 className='title-my-publications'>Mis publicaciones</h2>
        </div>
        <div className="col-search">
          <SearchShort />
        </div>
      </div>
      {
      filteredPublication.length === 0 ? <LoaderSkeletonPublicationList /> : <div>
        {
        filteredPublication.map((dataWork) => {
          return (
            <li onClick={props.handleClick} key={dataWork.id}>
              <div className="my-publication">
                <div className="flex-title-vacant">
                  <div className="title-publication-general">
                    <p className="titleVacant">
                      {dataWork.titleService}<strong> {dataWork.urgentJob && "URGENTE"}</strong>
                    </p>
                    <p className="subtitleVacant-fecha">
                      30 de Septiembre, 2020
                    </p>
                  </div>
                  <div className="flex-description-candidates">
                    <div>
                      <Link to={`/my-publications/${dataWork.id}/edit`}>
                        <button style={iconVisual} className="buttonVer">Ver solicitud</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-description-candidates">
                  <div className="blockSubs-candidates">
                    <p className="subtitleVacant">
                      <img alt="icono salario" src={iconRate} height="15px"/>
                      Valor del servicio: $ {dataWork.rateJob} USD
                    </p>
                    <p className="subtitleVacant">
                      <img alt="icono localización" src={iconLocation} height="19px" />
                      Ubicación: {dataWork.locationJob}
                    </p>
                  </div>
                  <div className="border-candidate">
                    <p className="candidates-p">Tienes <strong>0 candidatos</strong> para este trabajo
                      <Link to="/works">
                        <button className="button-candidates">Ver candidatos</button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        }).reverse()
        }
      </div>
      }
    </ul>
  )
}

export default ListPublications;