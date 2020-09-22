import React from 'react'

import '../stylesForm/PublicationStyle.css'
import '../stylesForm/formStyles.css'

import typeCompanyImage from '../images/factoryTypeCompany.svg'
import iconRate from '../images/iconRate.svg'
import iconLocation from '../images/locationIcon.svg'
import iconModality from '../images/modalityIcon.svg'
import iconSector from '../images/sectorIcon.svg'
import iconTime from '../images/timeIcon.svg'
import optionsImage from '../images/options.svg'
import imagePubli from '../images/image-publication.svg'
import equis from '../images/cerrarG.svg'


class MyVacant extends React.Component {
    

    render() {
        return <React.Fragment>
            <div>
                <h2 className="view-vacant">Visualiza tu vacante</h2>
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
                            <img src={optionsImage} alt="iconos opciones de publicación" height="15px"/>
                            <img src={equis} alt="cerrar publicación" height="15px"/>
                        </div>
                    </div>
                    <div className="blockSubs">
                        <p className="subtitleVacant">
                            <img alt="icono salario" src={iconRate} height="15px"/>
                            Valor del servicio: {this.props.rate}
                        </p>
                        <p className="subtitleVacant">
                            <img alt="icono localización" src={iconLocation} height="15px"/>
                            Ubicación: {this.props.location}
                        </p>
                    </div>
                    <hr className="linea-form-service"></hr>
                    <div className="short-description-vacant">
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div className="flex-items">
                        <div className="col-1">
                            <p className="subtitleVacant">
                                <img alt="icono localización" src={iconModality} height="15px"/>
                                Modalidad: {this.props.modality}
                            </p>
                            <p className="subtitleVacant">
                                <img alt="icono localización" src={iconSector}height="15px"/>
                                Sector: {this.props.area}
                            </p>
                        </div>
                        <div className="col-1">
                            <p className="subtitleVacant">
                                <img alt="icono localización" src={iconTime} height="15px"/>
                                Duración: {this.props.time}
                            </p>
                        </div>
                    </div>
                    <div className="flex-buttons-vacant">
                        {/* <div className="button-vacant-start">
                            <img className="button-vacant-image" src={ubicationImage} width="20px"/>
                            <p className="button-vacant-p" >Bogotá D.C.</p>
                        </div>
                        <div className="button-vacant">
                            <img className="button-vacant-image" src={dateImage} width="30px"/>
                            <p className="button-vacant-p">Publicado hace 2 horas</p>
                        </div>
                        <div className="button-vacant-end">
                            <img className="button-vacant-image" src={sendImage} width="30px"/>
                            <p className="button-vacant-p">Compartir</p>
                        </div> */}
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
                        <button type="button" className="button-siguiente">Aplicar (-5 cupones)</button>
                    </div>
                    <div className="image-center">
                        <img src={imagePubli} width="400px" alt="contexto publicación de vacantes" />
                    </div> 
                </div>
            </div>
        </React.Fragment>
    }
}

export default MyVacant;