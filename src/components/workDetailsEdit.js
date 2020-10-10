import React from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../components/styles/modales.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import iconModality from './FormularioRegistro/images/modalityIcon.svg'
import iconSector from './FormularioRegistro/images/sectorIcon.svg'
import iconTime from './FormularioRegistro/images/timeIcon.svg'
import imagePubli from './FormularioRegistro/images/image-publication.svg'
import URLink from '../images/URLink.svg'
import descriptionIcon from '../images/iconDescriptions.svg'
import checkIcon from '../images/check.svg'
import iconProfile from '../images/profileIconn.svg'
import deleteIcon from '../images/deleteIcon.svg'
import desactiveIcon from '../images/DesactiveIcon.svg'

import LoaderSkeletonWorkDetails from './loaderWorkDetails'

var desactiveIcons = {
    backgroundImage: "url("+ desactiveIcon + ")"
}

var deleteIcons = {
    backgroundImage: "url("+ deleteIcon + ")"
}

var URLicon = {
    backgroundImage: "url("+ URLink + ")"
}

var saveProfile = {
    backgroundImage: "url("+ iconProfile + ")"
}

class WorkDetailsEdit extends React.Component {

    state = {
        modalStyle: "none",
        option: false,
        buttonGuardar: "button-guardar",
        save: true,
        copied: false,
    }

    openOptions = () => {
        if(!this.state.option) {
            this.setState({
              modalStyle: "modal-options",
              option: true,
            })
        }else {
            this.setState({
              modalStyle: "none",
              option: false,
            })
        }
    }

    saveWork = () => {
        if(!this.state.save) {
            this.setState({
              save: true,
              buttonGuardar: "button-guardar",
            })
        } else {
            this.setState({
              save: false,
              buttonGuardar: "button-guardado",
            })
        }
    }

    render() {

        if(this.props.dataNull.length === 0 || this.props.reLoading) {
            return(
                <LoaderSkeletonWorkDetails />
            )
        }

        return (
            <React.Fragment>
            <div className={this.props.block}>
                <div className="publication">
                    <div className="flex-title-vacant">
                        <div className="div-TypeCompany">
                            <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage} width="35px"/>
                            {
                                this.props.verify &&
                                <div className="cirle-check-publication">
                                    <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                                </div>
                            }
                        </div>
                        <div className="title-vacant-general">
                            <p className="titleVacant">
                                {this.props.title} 
                                <strong> {this.props.urgent && "URGENTE"}</strong>
                            </p>
                            <p className="subtitleVacant-fecha">
                                30 de Septiembre, 2020
                            </p>
                        </div>
                    </div>
                    <div className="blockSubs">
                        <p className="subtitleVacant">
                            <img alt="icono salario" src={iconRate} width="15px"/>
                            Valor del servicio: {this.props.rate}
                        </p>
                        <p className="subtitleVacant">
                            <img alt="icono localización" src={iconLocation} height="19px"/>
                            Ubicación: {this.props.location}
                        </p>
                    </div>
                    <div className="flex-buttons-large">
                        <div>
                            <Link to={`/my-publications`}>
                                <div>
                                    <button onClick={this.saveWork} save={this.state.saveWorks} style={saveProfile} type="button" className="buttonEdit">Ver candidatos</button>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <CopyToClipboard text={`http://localhost:3000/works/${this.props.id}`} onCopy={()=> this.setState({ copied: true })}>
                                <button style={URLicon} className="buttonEdit">Copiar URL</button>
                            </CopyToClipboard>
                        </div>
                        <div>
                            <button style={desactiveIcons} onClick={this.props.DesactiveOpenModal} type="button" className="buttonEdit">Desactivar</button>
                        </div>
                        <div>
                            <button style={deleteIcons} onClick={this.props.DeleteOpenModal} type="button" className="buttonEdit">Borrar</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="description-vacant">
                        <div>
                            <p>{this.props.description}</p>
                            <p className="title-decriptions-feed">{this.props.titleDescription}</p>
                            <div className="block-items-descriptions">
                                <div>
                                    <ul className="list-descriptions">
                                        {this.props.descriptions.map((descriptions, i)=>{
                                            return (
                                                <li key={descriptions.conteoDescriptions} className="containerDescriptions">
                                                    <div className="descriptions-p">
                                                        <img alt="icon-items-descriptions" className="icon-items" src={descriptionIcon} width="12px"/>
                                                        {descriptions.descriptionsService}
                                                    </div> 
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
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
                    <div className="image-center">
                        <img src={imagePubli} width="400px" alt="contexto publicación de vacantes" />
                    </div> 
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default WorkDetailsEdit 