import React, { useState, Fragment }from 'react'

import '../stylesForm/switchStyles.css'
import '../stylesForm/benefitStyles.css'

import plusImage from '../images/plus.svg'

function Benefits(props) {
    const [conteoSkills, setConteoSkills] = useState(0)

    const agregarSkill = ()=> {
        setConteoSkills(conteoSkills + 1)
    }

    return <React.Fragment>
        <div className="blockForm-general">
            <h2>Beneficios y habilidades</h2>
            <div className="flex-skills-benefits">
                <div>
                    <p className="title-skills-benefits">Beneficios</p>
                    <div className="flex-col-checkbox">
                        <div className="col1-checkbox">
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="vacations"
                                name="payVacations"
                                value="Vacaciones pagas"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Vacaciones pagas</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="eventos"
                                name="events"
                                value="Eventos corporativos"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Eventos corporativos</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="e-books"
                                name="books"
                                value="Acceso a E-books y cursos"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Acceso a E-books y cursos</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="Breaks"
                                name="Break"
                                value="Pausas activas/ Breaks"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Pausas activas/ Breaks</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="snacks"
                                name="snackFree"
                                value="Bebidas y snacks (gratis)"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Bebidas y snacks (gratis)</p>
                            </div>
                        </div>
                        <div className="col2-checkbox">
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="informal"
                                name="dressInformal"
                                value="Sin código de vestimenta"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Sin código de vestimenta</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="languages"
                                name="language"
                                value="Clases de idiomas"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Clases de idiomas</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="flexibleWorks"
                                name="flexibleWork"
                                value="Horario laboral flexible"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Horario laboral flexible</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="Transport"
                                name="routeTransport"
                                value="Ruta y transporte"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Ruta y transporte</p>
                            </div>
                            <div className="flex-checkbox">
                                <label className="switch">
                                <input type="checkbox"
                                type="checkbox" 
                                id="breakfast"
                                name="breakFasts"
                                value="Alimentación / Almuerzo"/>
                                <span className="slider-round"></span>
                                </label>
                                <p>Alimentación / Almuerzo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2-skills-benefits">
                    <p className="title-skills-benefits">Habilidades 540</p>
                    <div className="flex-skills">
                        <input 
                        type="text" 
                        className="input-skills" 
                        list="skillsVacant" 
                        placeholder="Agrega una habilidad" 
                        name={"skill" + conteoSkills}/><br/>
                        <datalist id="skillsVacant">
                            <select>
                                <option>Liderazgo</option>
                                <option>Innovación</option>
                                <option>Pro-actividad</option>
                                <option>Creatividad</option>
                                <option>Responsabilidad</option>
                                <option>Efectividad</option>
                            </select>
                        </datalist>
                        <button type="button" onClick={agregarSkill} className="button-agregar"><img src={plusImage} width="15px"/></button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Benefits;