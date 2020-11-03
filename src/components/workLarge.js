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
import optionsImage from './FormularioRegistro/images/options.svg'
import imagePubli from './FormularioRegistro/images/image-publication.svg'
import equis from './FormularioRegistro/images/cerrarG.svg'
import URLink from '../images/URLink.svg'
import IconSave from '../images/saveIcon.svg'
import descriptionIcon from '../images/iconDescriptions.svg'
import checkIcon from '../images/check.svg'

import LoaderSkeletonWorkDetails from './loaderWorkDetails'

var URLicon = {
    backgroundImage: "url("+ URLink + ")"
}

var saveIcon = {
    backgroundImage: "url("+ IconSave + ")"
}

class WorkLarge extends React.Component {

    state = {
        modalStyle: "none",
        option: false,
        buttonGuardar: "button-guardar",
        contentButton: "Guardar trabajo",
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
              contentButton: "Guardar trabajo",
              save: true,
              buttonGuardar: "button-guardar",
            })
        } else {
            this.setState({
              contentButton: "Dejar de guardar",
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
                        <div className="option-title-vacant">
                            <div className="spaceModal">
                                <div onClick={this.openOptions} className="buttons-options">
                                    <img className="iconOptions" src={optionsImage} alt="iconos opciones de publicación" height="17px"/>
                                </div>
                                <div option={this.state.options} className={this.state.modalStyle}>
                                    <CopyToClipboard text={`http://localhost:3000/works/${this.props.id}`} onCopy={()=> this.setState({ copied: true, modalStyle: "none" })}>
                                        <button style={URLicon} className="iconURLmodal">Copiar link</button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <div className="spaceModal">
                                < Link to="/works" >
                                    <img src={equis} alt="cerrar publicación" height="17px"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blockSubs">
                        <p className="subtitleVacant">
                            <img alt="icono salario" src={iconRate} width="15px"/>
                            Valor del servicio: $ {this.props.rate} USD
                        </p>
                        <p className="subtitleVacant">
                            <img alt="icono localización" src={iconLocation} height="19px"/>
                            Ubicación: {this.props.location}
                        </p>
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
                    <hr className="linea-form-service"></hr>
                    <div className="centerButton-block">
                        <div>
                            { !this.props.save &&
                            <div>
                                <button onClick={this.saveWork} save={this.state.saveWorks} style={saveIcon} type="button" className={this.state.buttonGuardar}>{this.state.contentButton}</button>
                            </div>
                            }
                        </div>
                            <button onClick={this.props.onAplication} type="button" className="button-aplicar">Aplicar (-5 cupones)</button>
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