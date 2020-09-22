import React from 'react'

import '../FormularioRegistro/stylesForm/formStyles.css'
import '../FormularioRegistro/stylesForm/switchStyles.css'

import plusImage from './images/plus.svg'
import equis from './images/cerrar.svg'

class FormService extends React.Component {
    state = {

    }

    render () {
        return <React.Fragment>
            <div className="block-form-service">
                <h2>Publica un trabajo</h2>
                <div>
                    <form>
                        <div className="formBlock-service">
                            <div className="block-input-flex-title">
                                <label>Título</label><br/>  
                                <input
                                onChange={this.props.onChange} 
                                className="formInput-title" 
                                type="text"
                                placeholder="Ejemplo: Diseñador gráfico, Ingeniero civil, etc..."
                                // value={this.props.formValues.titleService} 
                                name="titleService" required />
                            </div>
                            <div className="flex-form">    
                                <div className="col-1">
                                    <div className="block-input-service">
                                        <label>Área del servicio</label><br/>
                                        <div className="formInput-service">          
                                            <select 
                                            onChange={this.props.onChange}
                                            className="input-no-styles-title" 
                                            name="areaService"
                                            // value={this.props.formValues.specialtyService} 
                                            required>
                                                    <option>Websites, IT y Software</option>
                                                    <option>Escritura y generación de contenido</option>
                                                    <option>Diseño, multumedia y arquitectura</option>
                                                    <option>Manejo y administración de datos</option>
                                                    <option>Ingenieria y ciencias</option>
                                                    <option>Desarrollo y manufactura de producto</option>
                                                    <option>Ventas y marketing</option>
                                                    <option>Logística, y transporte</option>
                                                    <option>Negocios, recursos humanos y legal</option>
                                                    <option>Traducción e idiomas</option>
                                                    <option>Empleos y sericios presenciales</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="block-input-service">
                                        <label>Modalidad de empleo</label><br/>
                                        <div className="formInput-service">          
                                            <select
                                            onChange={this.props.onChange} 
                                            className="input-no-styles-title" 
                                            name="modalityJob"
                                            // value={this.props.formValues.modalityJob} 
                                            required>
                                                <option>Remoto</option>
                                                <option>Presencial</option>
                                                <option>Presencial y Remoto</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="block-input-service">
                                        <label>Especialidad del empleo</label><br/>
                                        <div className="formInput-service">          
                                            <select 
                                            onChange={this.props.onChange}
                                            className="input-no-styles-title" 
                                            name="specialtyService"
                                            // value={this.props.formValues.specialtyService} 
                                            required>
                                                    <option>Arquitectura</option>
                                                    <option>Ingenieria Civil</option>
                                                    <option>Administración</option>
                                                    <option>Diseñador</option>
                                                    <option>Asesoria Legal</option>
                                                    <option>Ilustración</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="block-input-service">
                                        <label>Ubicación</label><br/>
                                        <div className="formInput-service">          
                                            <input
                                            onChange={this.props.onChange} 
                                            className="input-no-styles-title"
                                            placeholder="Ejemplo: Lima, Bogotá, etc..." 
                                            type="text" 
                                            list="ciudadesColombia"
                                            // value={this.props.formValues.locationJob}
                                            name="locationJob" required />
                                            <datalist id="ciudadesColombia">
                                                <select>
                                                    <option>Bogotá</option>
                                                    <option>Medellín</option>
                                                    <option>Cali</option>
                                                    <option>Barranquilla</option>
                                                </select>
                                            </datalist>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="block-input-service">
                                        <label>Tiempo estimado</label><br/>
                                        <div className="formInput-service">          
                                            <select 
                                            onChange={this.props.onChange}
                                            className="input-no-styles-title" 
                                            name="timeService"
                                            // value={this.props.formValues.timeService} 
                                            required>
                                                    <option>Menos de 1 mes</option>
                                                    <option>1 mes - 3 meses</option>
                                                    <option>3 meses - 6 meses</option>
                                                    <option>Más 6 meses</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="block-input-service">
                                        <label>Inversion estimada</label>
                                        <div className="flex-skills">
                                            <div className="formInput-salario">
                                                <select 
                                                className="input-no-styles-selection-salario"
                                                onChange={this.props.onChange} 
                                                // value={this.props.formValues.rateJob}
                                                type="text"
                                                name={"rateJob"}>
                                                    <option>Menos de 1'760.000</option>
                                                    <option>1'760.000 - 2'630.000</option>
                                                    <option>2'630.000 - 3'500.000</option>
                                                    <option>3'500.000 - 5'300.000</option>
                                                    <option>5'300.000 o más</option>
                                                </select>
                                            </div>
                                            <div className="formInput-tiempo">
                                                <select 
                                                className="input-no-styles-selection-time"
                                                onChange={this.props.onChange} 
                                                // value={this.props.formValues.TimeRateJob}                    
                                                type="text"
                                                name={"TimeRateUser"}>
                                                    <option>Quincena</option>
                                                    <option>Mes</option>
                                                    <option>Proyecto</option>
                                                    <option>Asesoria</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="linea-form-service"></hr>
                            <div>
                                <div className="label-description">
                                    <label className="label-functions">Descripción del servicio</label><br/>
                                    <textarea
                                    className="formInput-large-service"
                                    placeholder="Realiza una breve descripción del servicio que necesitas." 
                                    onChange={this.props.onChange}
                                    type="text"
                                    name="descriptionService"
                                    // value={this.props.formValues.DescriptionService} 
                                    /> 
                                </div>
                            </div>
                            <hr className="linea-form-service"></hr>
                            <div className="block-habilidades-laborales">
                                <div className="block-input-service">
                                    <label>Habilidades laborales</label><br/>
                                    <div className="flex-skills-service">
                                        <input
                                        onChange={this.props.onChangeSkill} 
                                        className="formInput" 
                                        type="text"
                                        name={"skillsUser"}
                                        placeholder="Comparte tus habilidades"
                                            // value={this.state.skillsUser}
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
                            <div>
                                <div className="flex-checkbox-urgent">
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
                        </div>
                        <div className="centerButton-block">
                            <button type="button" className="button-siguiente">Publicar ( -10 cupones )</button>
                        </div>                            
                    </form>
                </div>
            </div>
            
        </React.Fragment>
    }
}

export default FormService;