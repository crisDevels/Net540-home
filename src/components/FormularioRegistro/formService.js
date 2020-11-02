import React from 'react'

import '../FormularioRegistro/stylesForm/formStyles.css'
import '../FormularioRegistro/stylesForm/switchStyles.css'
import '../styles/descriptionStyles.css'

import plusImage from './images/plus.svg'
import equis from './images/cerrar.svg'
import descriptionIcon from './images/iconDescriptions.svg'
import typeCompanyImage from './images/factoryTypeCompany.svg'

class FormService extends React.Component {
  render () {
    return <React.Fragment>
      <div className="block-form-service">
        <h2 className='title-form-service'>Publica un trabajo</h2>
        <div>
          <form onSubmit={this.props.onSubmitForm}>
            <div className="formBlock-service">
              <div className="block-input-flex-title">
                <label>Título</label><br/>  
                <input
                onChange={this.props.onChange} 
                className="space-form-input" 
                type="text"
                placeholder="Ejemplo: Diseñador gráfico, Ingeniero civil, etc..."
                value={this.props.formValues.titleService} 
                name="titleService" required />
              </div>
              <div className="flex-form">    
                <div className="col-1">
                  <div className="block-input-service">
                    <label>Área del servicio</label><br/>
                    <div className="relative-options-area">
                      <button type="button" onClick={this.props.clickOpenModalArea} className="selected-area-input">{this.props.areaSelected}</button>
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
                  <div className="block-input-service">
                    <label>Modalidad de trabajo</label><br/>
                    <div className="form-input-selection">          
                      <select
                      onChange={this.props.onChange} 
                      className="input-no-styles-title" 
                      name="modalityJob"
                      value={this.props.formValues.modalityJob} 
                      required>
                        <option>Remoto</option>
                        <option>Presencial</option>
                        <option>Presencial y Remoto</option>
                      </select>
                    </div>
                  </div>
                  <div className="block-input-service">
                    <label>Inversion estimada</label>
                    <div className="flex-skills">
                      <input 
                      className="form-input-text-col"
                      onChange={this.props.onChange} 
                      value={this.props.formValues.rateJob}
                      placeholder="Ej: 40 USD" 
                      type="text"
                      name={"rateJob"} />
                    </div>
                  </div>
                </div>  
                <div className="col-1">
                  <div className="block-input-service">
                    <label>Tiempo estimado</label><br/>
                    <div className="form-input-selection">          
                      <select 
                      onChange={this.props.onChange}
                      className="input-no-styles-title" 
                      name="timeService"
                      value={this.props.formValues.timeService} 
                      required>
                        <option>Menos de 1 mes</option>
                        <option>1 mes - 3 meses</option>
                        <option>3 meses - 6 meses</option>
                        <option>Más 6 meses</option>
                      </select>
                    </div>
                  </div>
                  <div className="block-input-service">
                    <label>Ubicación</label><br/>      
                    <input
                    onChange={this.props.onChange} 
                    className="form-input-text-col"
                    placeholder="Ejemplo: Lima, Bogotá, etc..." 
                    type="text" 
                    value={this.props.formValues.locationJob}
                    name="locationJob" required />
                  </div>
                  <div className='block-input-service'>
                    <label>Modalidad de pago</label><br/>
                    <div className="form-input-selection">
                      <select 
                      className="input-no-styles-title"
                      onChange={this.props.onChange} 
                      value={this.props.formValues.TimeRateJob}                    
                      type="text"
                      name={"TimeRateJob"}>
                        <option>Hora</option>
                        <option>Proyecto</option>
                        <option>Asesoria</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="linea-form-service"></hr>
              <div>
                <p className="h2-description">Descripción del servicio</p>  
                <textarea 
                className="textarea-description-work"
                type="text"
                onChange={this.props.onChange}
                value={this.props.formValues.descriptionService}
                placeholder="Realiza una breve descripción del servicio que necesitas."
                name="descriptionService"
                required />
              </div>
              <hr className="linea-form-service"></hr>
              <div className="block-habilidades-laborales">
                <div className="block-input-service">
                  <label>Habilidades laborales</label><br/>
                  <div className="flex-skills-service">
                    <input
                    onKeyPress={this.props.onKeyPress}
                    onChange={this.props.onChangeSkill} 
                    className="space-form-input" 
                    type="text"
                    name={"skillsUser"}
                    placeholder="Ej: Puntualidad, Innovación, Excel, Photoshop" />
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
              className="title-input-description-work" 
              type="text"
              placeholder="Agrega un título. Ej: aptitudes, actividades, beneficios del trabajo"
              value={this.props.formValues.titleDescription} 
              name="titleDescription"/>
              <div className="label-description">
                <label>Agrega al menos 2 características para recomendar tu solicitud al 100%</label>
                <textarea
                className="textarea-description-work"
                onKeyPress={this.props.onKeyPressDescriptions}
                placeholder="Ej: Este trabajo require conocimientos..." 
                onChange={this.props.onChangeDescriptions}
                type="text"
                name={"descriptionsService"}/>
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
              <button className="button-joobbi">Publicar ( -10 cupones )</button>
            </div>                            
          </form>
        </div>
      </div>   
    </React.Fragment>
  }
}

export default FormService;