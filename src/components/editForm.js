import React from 'react'

import './FormularioRegistro/stylesForm/formStyles.css'
import './FormularioRegistro/stylesForm/switchStyles.css'
import './styles/descriptionStyles.css'

import checkIcon from '../images/check.svg'
import iconRate from './FormularioRegistro/images/iconRate.svg'
import iconLocation from './FormularioRegistro/images/locationIcon.svg'
import iconModality from './FormularioRegistro/images/modalityIcon.svg'
import iconSector from './FormularioRegistro/images/sectorIcon.svg'
import iconTime from './FormularioRegistro/images/timeIcon.svg'

import editIcon from '../images/editIcon.svg'


import plusImage from './FormularioRegistro/images/plus.svg'
import equis from './FormularioRegistro/images/cerrar.svg'
import descriptionIcon from './FormularioRegistro/images/iconDescriptions.svg'
import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'

var iconEdit = {
    backgroundImage: "url("+ editIcon + ")"
}

class FormService extends React.Component {

    render () {
        
        return <React.Fragment>
            <div className="block-form-service">
                <h2>Edita tu publicación</h2>
                <div>
                    <form onSubmit={this.props.onSubmitForm}>
                        <div className="flex-title-vacant">
                            <div className="div-TypeCompany">
                                <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage} width="35px"/>
                                {
                                    this.props.formValues.verify &&
                                    <div className="cirle-check-publication">
                                        <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                                    </div>
                                }
                            </div>
                            <div className="title-vacant-general">
                                <p className="titleVacant">
                                    <input
                                    onChange={this.props.onChange} 
                                    className="formInput-title-edit" 
                                    type="text"
                                    placeholder="Ejemplo: Diseñador gráfico, Ingeniero civil, etc..."
                                    value={this.props.formValues.titleService} 
                                    name="titleService" required />
                                </p>
                                <p className="subtitleVacant-fecha">
                                    30 de Septiembre, 2020
                                </p>
                            </div>
                        </div>
                        <div className="blockSubs">
                            <p className="subtitleVacant">
                                <img alt="icono salario" src={iconRate} width="15px"/>
                                Valor del servicio: 
                                <select 
                                className="input-select-edit"
                                onChange={this.props.onChange} 
                                value={this.props.formValues.rateJob}
                                type="text"
                                name={"rateJob"}>
                                    <option>Menos de 1'760.000</option>
                                    <option>1'760.000 - 2'630.000</option>
                                    <option>2'630.000 - 3'500.000</option>
                                    <option>3'500.000 - 5'300.000</option>
                                    <option>5'300.000 o más</option>
                                </select> / 
                                <select 
                                className="input-select-edit"
                                onChange={this.props.onChange} 
                                value={this.props.formValues.TimeRateJob}                    
                                type="text"
                                name={"TimeRateJob"}>
                                    <option>Quincena</option>
                                    <option>Mes</option>
                                    <option>Proyecto</option>
                                    <option>Asesoria</option>
                                </select>
                            </p>
                            <p className="subtitleVacant">
                                <img alt="icono localización" src={iconLocation} height="19px"/>
                                Ubicación: 
                                <input
                                onChange={this.props.onChange} 
                                className="formInput-edit"
                                placeholder="Ejemplo: Lima, Bogotá, etc..." 
                                type="text" 
                                value={this.props.formValues.locationJob}
                                name="locationJob" required />
                            </p>
                        </div>
                        <hr></hr>
                        <div className="description-vacant">
                            <div>
                                <p>
                                    <textarea 
                                    className="formInput-edit"
                                    type="text"
                                    onChange={this.props.onChange}
                                    value={this.props.formValues.descriptionService}
                                    placeholder="Realiza una breve descripción del servicio que necesitas."
                                    name="descriptionService"
                                    required />
                                </p>
                                <p className="title-decriptions-feed">
                                    <input
                                    onChange={this.props.onChange} 
                                    className="formInput-title-edit" 
                                    type="text"
                                    placeholder="Agrega un título. Ej: aptitudes, actividades, beneficios del trabajo"
                                    value={this.props.formValues.titleDescription} 
                                    name="titleDescription"/>
                                </p>
                                <div className="block-items-descriptions">
                                    <div>
                                        <ul className="list-descriptions">
                                            {this.props.dataDescriptions.map((descriptions, i)=>{
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
                                        Modalidad: <select
                                            onChange={this.props.onChange} 
                                            className="input-select-edit" 
                                            name="modalityJob"
                                            value={this.props.formValues.modalityJob} 
                                            required>
                                                <option>Remoto</option>
                                                <option>Presencial</option>
                                                <option>Presencial y Remoto</option>
                                            </select>
                                    </p>
                                    <div className="subtitleVacant">
                                        <img alt="icono localización" src={iconSector} width="15px"/>
                                        Sector: 
                                        <div className="relative-options-area-edit">
                                            <button type="button" onClick={this.props.clickOpenModalArea} style={iconEdit} className="buttonEditable">{this.props.areaSelected}</button>
                                            <div className={this.props.modalArea}>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Redacción de contenidos" className="selected-area" type="radio" name="areaService"/>
                                                    Redacción de contenidos
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Desarrollo web" className="selected-area" type="radio" name="areaService"/>
                                                    Desarrollo web
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Desarrollo de App's" className="selected-area" type="radio" name="areaService"/>
                                                    Desarrollo de App's
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Diseño, arquitectura y audiovisual" className="selected-area" type="radio" name="areaService"/>
                                                    Diseño, arquitectura y audiovisual
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Administración y manejo de datos" className="selected-area" type="radio" name="areaService"/>
                                                    Administración y manejo de datos
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Ingeniería y ciencia" className="selected-area" type="radio" name="areaService"/>
                                                    Ingeniería y ciencia 
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Producción y manufactura" className="selected-area" type="radio" name="areaService"/>
                                                    Producción y manufactura 
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Logística y transporte" className="selected-area" type="radio" name="areaService"/>
                                                    Logística y transporte 
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Marketing y ventas" className="selected-area" type="radio" name="areaService"/>
                                                    Marketing y ventas 
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                    <div className="width-img">
                                                        <div className="container-image-area">
                                                            <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                        </div>
                                                    </div>
                                                    <input onChange={this.props.onChange} value="Finanzas, RRHH y legal" className="selected-area" type="radio" name="areaService"/>
                                                    Finanzas, RRHH y legal
                                                </label>
                                                <label onClick={this.props.closeModalArea} className="selected-label">
                                                <div className="width-img">
                                                    <div className="container-image-area">
                                                        <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                    </div>
                                                </div>
                                                <input onChange={this.props.onChange} value="Traducción e idiomas" className="selected-area" type="radio" name="areaService"/>
                                                Traducción e idiomas
                                            </label>
                                            <label onClick={this.props.closeModalArea} className="selected-label">
                                                <div className="width-img">
                                                    <div className="container-image-area">
                                                        <img alt="modelo ilutración compañias" src={typeCompanyImage} width="20px" />
                                                    </div>
                                                </div>
                                                <input onChange={this.props.onChange} value="Servicios y oficios generales" className="selected-area" type="radio" name="areaService"/>
                                                Servicios y oficios generales
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <p className="subtitleVacant">
                                        <img alt="icono localización" src={iconTime} width="15px"/>
                                        Duración: 
                                        <select 
                                        onChange={this.props.onChange}
                                        className="input-select-edit" 
                                        name="timeService"
                                        value={this.props.formValues.timeService} 
                                        required>
                                            <option>Menos de 1 mes</option>
                                            <option>1 mes - 3 meses</option>
                                            <option>3 meses - 6 meses</option>
                                            <option>Más 6 meses</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h3 className="title-skill">Habilidades recomendadas</h3>
                            <div className="list-skills">
                                <div>
                                    <ul className="container-list-skills">
                                        {this.props.dataSkills.map((skill, i)=>{
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
                        <div>
                            <div className="flex-checkbox-urgent-edit">
                                <p>¿Este trabajo es de caracter urgente?</p>
                                <label className="switch">
                                <input
                                onChange={this.props.onChange}
                                type="checkbox"
                                id="jobUrgent"
                                name="urgentJob"
                                value="URGENTE"/>
                                <div className="slider-round"></div>
                                </label>
                            </div>
                        </div>
                        <div className="centerButton-block">
                            <button className="button-siguiente">Guardar cambios</button>
                        </div> 
                        <div>
                            <hr className="linea-form-service"></hr>
                            <div className="block-habilidades-laborales">
                                <div className="block-input-service">
                                    <label>Habilidades laborales</label><br/>
                                    <div className="flex-skills-service">
                                        <input
                                        onKeyPress={this.props.onKeyPress}
                                        onChange={this.props.onChangeSkill} 
                                        className="formInput" 
                                        type="text"
                                        name={"skillsUser"}
                                        placeholder="Comparte tus habilidades"
                                        // value={this.props.skills}
                                        list="skillsProfesional" />
                                        <datalist id="skillsProfesional">
                                            <select>
                                                <option>Puntualidad</option>
                                                <option>Disciplina</option>
                                                <option>Adaptabilidad</option>
                                                <option>Proactividad</option>
                                                <option>Organización</option>
                                                <option>Autenticidad</option>
                                            </select>
                                        </datalist>
                                        <button type="button" onClick={this.props.onSkill} className="button-agregar"><img alt="plus-Add" src={plusImage} width="15px"/></button>
                                    </div>
                                    <div className="list-skills">
                                        <div>
                                            <ul className="container-list-skills">
                                                {this.props.dataSkills.map((skill, i)=>{
                                                    return (
                                                        <li key={skill.conteoSkills} className="containerSkills">
                                                            {skill.skillsUser}
                                                            <div className="button-remove" onClick={this.props.onDelete.bind(this, i)}><img alt="button-remove-skill" src={equis} width="9px"/></div> 
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="linea-form-service"></hr>
                            <p className="h2-description">Otras características</p>  
                            <input
                            onChange={this.props.onChange} 
                            className="title-description-work" 
                            type="text"
                            placeholder="Agrega un título. Ej: aptitudes, actividades, beneficios del trabajo"
                            value={this.props.formValues.titleService} 
                            name="titleDescription"/>
                            <div className="label-description">
                                <label>Agrega al menos 2 características para recomendar tu solicitud al 100%</label>
                                <textarea
                                className="description-work-interactive"
                                onKeyPress={this.props.onKeyPressDescriptions}
                                placeholder="Ej: Este trabajo require conocimientos..." 
                                onChange={this.props.onChangeDescriptions}
                                type="text"
                                name={"descriptionsService"}
                                // value={this.props.contentDescription}
                                />
                                <div className="flex-buttons-descriptions">
                                    <button type="button" onClick={this.props.onDescriptions} className="button-agregar"><img alt="plus-Add" src={plusImage} width="15px"/></button>
                                    ó presiona Enter
                                </div>
                                <div>
                                    <div>
                                        <ul className="list-descriptions">
                                            {this.props.dataDescriptions.map((descriptions, i)=>{
                                                return (
                                                    <li key={descriptions.conteoDescriptions} className="containerDescriptions">
                                                        <div className="descriptions-p">
                                                            <img alt="icon-items-descriptions" className="icon-items" src={descriptionIcon} width="12px"/>
                                                            {descriptions.descriptionsService}
                                                        </div>
                                                        <div className="button-remove" onClick={this.props.onDeleteDescriptions.bind(this, i)}><img alt="button-remove-description" src={equis} width="9px"/></div> 
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                           
                    </form>
                </div>
            </div>
            
        </React.Fragment>
    }
}

export default FormService;