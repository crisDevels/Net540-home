import React from 'react'
import { Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'

import './styles/stylesListWork.css'
import './FormularioRegistro/stylesForm/PublicationStyle.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import optionsImage from './FormularioRegistro/images/options.svg'

class ListWorks extends React.Component {

    render() {
        if(this.props.feed.length ===0) {
            return (
                <ul className="list-unstyled-feed">
                    <div className="title-works">
                        <h2>Trabajos que pueden ser de tu interes</h2>
                    </div>
                    {
                        Array(8).fill().map((item, index) => (
                            <li key={index}>
                                <div className="publication">
                                    <div className="flex-title-vacant">
                                        <div style={{margin: "0 10px 0 0"}}>
                                            < Skeleton circle={true} height={50} width={50} />
                                        </div>
                                        <div className="title-vacant-general">
                                            <p className="titleVacant">
                                                < Skeleton height={15} width={150} />
                                            </p>
                                            <p className="subtitleVacant-fecha">
                                            < Skeleton height={15} width={100} />
                                            </p>
                                        </div>
                                        <div className="option-title-vacant">
                                            < Skeleton height={30} width={15} />
                                        </div>
                                    </div>
                                    <div className="blockSubs">
                                        <p className="subtitleVacant">
                                            < Skeleton height={15} width={200} />
                                        </p>
                                        <p className="subtitleVacant">
                                            < Skeleton height={15} width={200} />
                                        </p>
                                    </div>
                                    <div className="short-description-vacant">
                                        <div className="block-white"></div>
                                        <div className="description">
                                            <p style={{ lineHeight: 2 }}>< Skeleton height={15} width={500} count={3} /></p>
                                        </div>
                                    </div>
                                    <hr className="linea-feed-service"></hr>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            )
        }

        return (
            <ul className="list-unstyled-feed">
                <div className="title-works">
                    <h2>Trabajos que pueden ser de tu interes</h2>
                </div>
                {
                    this.props.feed.map((dataWork) => {
                        return (
                            < Link key={dataWork.id} to={`/home/${dataWork.id}`}>
                                <li>
                                    <div className="publication">
                                        <div className="flex-title-vacant">
                                            <div className="div-TypeCompany">
                                                <img alt="modelo ilutración compañias" src={typeCompanyImage} width="35px"/>
                                            </div>
                                            <div className="title-vacant-general">
                                                <p className="titleVacant">
                                                    {dataWork.titleService}<strong> {dataWork.urgentJob}</strong>
                                                </p>
                                                <p className="subtitleVacant-fecha">
                                                    30 de Septiembre, 2020
                                                </p>
                                            </div>
                                            <div className="option-title-vacant">
                                                <img src={optionsImage} alt="iconos opciones de publicación" height="17px"/>
                                            </div>
                                        </div>
                                        <div className="blockSubs">
                                            <p className="subtitleVacant">
                                                <img alt="icono salario" src={iconRate} height="15px"/>
                                                Valor del servicio: {dataWork.rateJob}
                                            </p>
                                            <p className="subtitleVacant">
                                                <img alt="icono localización" src={iconLocation} height="15px" />
                                                Ubicación: {dataWork.locationJob}
                                            </p>
                                        </div>
                                        <div className="short-description-vacant">
                                            <div className="block-white"></div>
                                            <div className="description">
                                                <p>{dataWork.descriptionService}</p>
                                            </div>
                                        </div>
                                        <hr className="linea-feed-service"></hr>
                                    </div>
                                </li>
                            </Link>
                        );
                    }).reverse()
                }
            </ul>
        )
    }
}

export default ListWorks;