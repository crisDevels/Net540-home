import React, { useState } from 'react';

function GeneralVacant() {
    
    const [buttonSalario, setButtonSalario] = useState('none')
    const [buttonSalarioRango, setButtonSalarioRango] = useState('button-salario-Active')
    const [rango, setRango] = useState('none')

    //función para activar el rango del input salario y activar el button de salio fijo
    const functionSalario = ()=> {
        setButtonSalarioRango('none');
        setButtonSalario('button-salario-Active');
        setRango('flexInput');
    }

    const functionSalarioFijo = ()=> {
        setButtonSalarioRango('button-salario-Active');
        setButtonSalario('none');
        setRango('none');
    }
    
    return <React.Fragment>
        <div className="blockForm-general">
            <h2>Encontremos el talento</h2>
                <div>
                    <div className="formBlock">
                        <div className="flex-form">
                            <div className="col-1-general">
                                <span className="block-input-flex">
                                    <label>Cargo</label><br/>
                                    <div className="formInput">          
                                        <input 
                                            className="input-no-styles-selection" 
                                            type="text" 
                                            list="cargoProfesional" 
                                            name="cargoVacante" required />
                                        <datalist id="cargoProfesional">
                                            <select>
                                                <option>Arquitecto</option>
                                                <option>Ingeniero Industrial</option>
                                                <option>Ingeniero Civil</option>
                                                <option>Ingeniero de software</option>
                                            </select>
                                        </datalist>
                                    </div>
                                </span>
                                <span className="block-input-flex">
                                    <label>Modalidad</label><br/>
                                    <div className="formInput">          
                                        <select 
                                            className="input-no-styles-selection" 
                                            name="modalityJob" 
                                            required>
                                            <option>Remoto</option>

                                            <option>Presencial</option>

                                            <option>Presencial y Remoto</option>
                                        </select>
                                    </div>
                                </span>
                                <span className="block-input-flex">
                                    <label>Ubicación</label><br/>
                                        <div className="formInput">          
                                            <input 
                                                className="input-no-styles-selection" 
                                                type="text" list="ciudadesColombia" 
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
                                </span>
                            </div>
                            <div className="col-2-general">
                                <span className="block-input-flex">
                                    <label>Tipo de empleo</label><br/>
                                    <div className="formInput">          
                                        <select 
                                            className="input-no-styles-selection" 
                                            name="typeCompany" 
                                            required>
                                            <option>Tiempo completo</option>

                                            <option>Medio tiempo</option>

                                            <option>Beca / Prácticas Académicas </option>

                                            <option>Voluntariado</option>

                                            <option>Ocasional</option>

                                            <option>Prestación de servicios</option>
                                        </select>
                                    </div>
                                </span>
                                <span className="block-input-flex">
                                    <label>Duración</label><br/>
                                    <div className="formInput">          
                                        <select 
                                            className="input-no-styles-selection" 
                                            name="timeJob" 
                                            required>
                                            <option>Menos de 1 mes</option>

                                            <option>Más de 1 mes</option>

                                            <option>Más de 3 meses</option>

                                            <option>Más de 6 meses</option>

                                            <option>Termino indefinido</option>
                                        </select>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="block-input-flex">
                                <label>Salario</label>
                                <div className="flexInput">
                                    <div className="formInput-salario">
                                        $
                                        <input 
                                            className="input-no-styles-selection-salario" 
                                            placeholder="2'300.000"
                                            name="min-cash" 
                                            type="text" required /> 
                                    </div>
                                    <div className={rango}>
                                        <p>
                                        a
                                        </p>
                                        <div className="formInput-salario">
                                            $
                                            <input 
                                                className="input-no-styles-selection-salario" 
                                                placeholder="4'500.000"
                                                name="max-cash" 
                                                type="text" required /> 
                                        </div>
                                    </div>
                                    <p>
                                    por
                                    </p>
                                    <div className="formInput-tiempo">
                                        <select 
                                            className="input-no-styles-selection-time" 
                                            name="time-cash" 
                                            required>
                                            <option>Hora</option>
                                                                
                                            <option>Día</option>

                                            <option>Semana</option>

                                            <option>Mes</option>

                                            <option>Proyecto/Asesoria</option>
                                        </select> 
                                    </div>
                                </div>
                                <button onClick={functionSalario} className={buttonSalarioRango} type="button">agrega un rango</button>
                                <button onClick={functionSalarioFijo} className={buttonSalario} type="button">Salario fijo</button>
                            </div>
                        </div>
                    </div>                            
                </div>
        </div>
    </React.Fragment>
}

export default GeneralVacant;