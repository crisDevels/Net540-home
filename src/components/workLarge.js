import React from 'react'
import { Link } from 'react-router-dom'

import './FormularioRegistro/stylesForm/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import iconModality from './FormularioRegistro/images/modalityIcon.svg'
import iconSector from './FormularioRegistro/images/sectorIcon.svg'
import iconTime from './FormularioRegistro/images/timeIcon.svg'
import optionsImage from './FormularioRegistro/images/options.svg'
import imagePubli from './FormularioRegistro/images/image-publication.svg'
import equis from './FormularioRegistro/images/cerrarG.svg'

class WorkLarge extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className={this.props.block}>
                <div className="publication">
                    <div className="flex-title-vacant">
                        <div className="div-TypeCompany">
                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="35px"/>
                        </div>
                        <div className="title-vacant-general">
                            <p className="titleVacant">
                                {this.props.title} 
                                <strong>{this.props.urgent}</strong>
                            </p>
                            <p className="subtitleVacant-fecha">
                                30 de Septiembre, 2020
                            </p>
                        </div>
                        <div className="option-title-vacant">
                            <img src={optionsImage} alt="iconos opciones de publicación" height="17px"/>
                            < Link to="/home" >
                                <img src={equis} alt="cerrar publicación" height="17px"/>
                            </Link>
                        </div>
                    </div>
                    <div className="blockSubs">
                        <p className="subtitleVacant">
                            <img alt="icono salario" src={iconRate} width="15px"/>
                            Valor del servicio: {this.props.rate}
                        </p>
                        <p className="subtitleVacant">
                            <img alt="icono localización" src={iconLocation} width="15px"/>
                            Ubicación: {this.props.location}
                        </p>
                    </div>
                    <hr></hr>
                    <div className="description-vacant">
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex-items">
                            <div className="col-1">
                                <p className="subtitleVacant">
                                    <img alt="icono localización" src={iconModality} width="15px"/>
                                    Modalidad: {this.props.modality}
                                </p>
                                <p className="subtitleVacant">
                                    <img alt="icono localización" src={iconSector} width="15px"/>
                                    Sector: {this.props.area}
                                </p>
                            </div>
                            <div className="col-1">
                                <p className="subtitleVacant">
                                    <img alt="icono localización" src={iconTime} width="15px"/>
                                    Duración: {this.props.time}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="linea-form-service"></hr>
                    <div>
                        <h3 className="title-skill">Habilidades recomendadas</h3>
                        <div className="list-skills">
                            <div>
                                <ul className="container-list-skills">
                                    {this.props.skills.map((skill, i)=>{
                                        return (
                                            <li key={skill.conteoSkills} className="containerSkills-publication">
                                                {skill.skillsUser}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="linea-form-service"></hr>
                    <div className="centerButton-block">
                        <button onClick={this.props.onAplication} type="button" className="button-siguiente">Aplicar (-5 cupones)</button>
                    </div>
                    <div className="image-center">
                        <img src={imagePubli} width="400px" alt="contexto publicación de vacantes" />
                    </div> 
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default WorkLarge 