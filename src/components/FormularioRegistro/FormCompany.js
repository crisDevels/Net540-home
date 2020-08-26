import React, { useState } from 'react';
import firebase from 'firebase';

import './stylesForm/formStyles.css'

import circle from './images/EllipseAdvance.svg'
import circleBlue from './images/EllipseBlue.svg'

import NavBar from '../NavBar';

import profile from './images/profile.png'
import buttonOn from './images/Button-on.gif'

import loader from './images/loader.gif'


function Company() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [intro, setIntro] = useState('blockIntro');
    const [descriptionCompany, setDescription] = useState('none');
    const [admin, setAdmin] = useState('none');
    const [profileCompany, setProfileCompany] = useState('none');


    // aqui se genera la funciónn para seguir al formulario de estudios 

    const toDescriptionCompany = ()=> {
            setIntro('none')
            setDescription('blockDescriptionCompany')
    }

    // aqui se genera la funciónn para seguir al formulario de estudios 

    const backIntro = ()=> {
        setIntro('blockIntro')
        setDescription('none')
    }
    
    // const user = useUser();

    firebase.auth().onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        }) 
    
    return <React.Fragment>
        {loading ? <div><img src={loader}/></div> :
        <div>
            <div>
                < NavBar/>
            </div>
            {user &&
                <div>
                    <div className={intro}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={buttonOn} width="30px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circle} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circle} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circle} width="10px"/>
                                </div>
                            </div>
                        </div>

                        <div className="blockForm-general">
                            <h2>Información General</h2>
                            <div>
                            <form>
                                <div className="formBlock">
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Tipo de la empresa</label><br/>
                                            <select className="formInput" name="typeCompany">

                                                <option>Persona Natural Comerciante</option>

                                                <option>Empresa Unipersonal</option>

                                                <option>Sociedades por Acciones Simplificadas (S.A.S.)</option>

                                                <option>Sociedad Colectiva</option>

                                                <option>Sociedad Anónima (S.A.)</option>

                                                <option>Sociedad de Responsabilidad Limitada (Ltda.)</option>

                                                <option>Sociedad en Comandita Simple (S. en C.)</option>

                                            </select>
                                        </span>
                                        <span className="block-input">
                                            <label>NIT empresarial</label><br/>
                                            <input className="formInput" type="text" placeholder="Escribe tu campo de acción" />
                                        </span>
                                    </div>
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Sector de la empresa</label><br/>
                                            <select className="formInput" name="sectorCompany">

                                                <option>Agricultura / Pesca / Ganadería</option>

                                                <option>Arte / Diseño</option>

                                                <option>Construcción / Obras</option>

                                                <option>Educación</option>

                                                <option>Energía</option>

                                                <option>Entretenimiento / Deporte</option>

                                                <option>Fabricación / Manufactura</option>

                                                <option>Finanzas / Banca</option>

                                                <option>Gobierno / No lucro</option>

                                                <option>Hotelería / Turismo</option>

                                                <option>Informática / Hardware</option>

                                                <option>Informática / Software</option>

                                                <option>Internet</option>

                                                <option>Legal / Asesoría</option>

                                                <option>Materias Primas</option>

                                                <option>Medios de Comunicación</option>

                                                <option>Publicidad / RRPP</option>

                                                <option>RRHH / Personal</option>

                                                <option>Salud / Medicina</option>

                                                <option>Servicios Profesionales</option>

                                                <option>Telecomunicaciones</option>

                                                <option>Transporte</option>

                                                <option>Venta al consumidor</option>

                                                <option>Venta al por Mayor</option>

                                            </select>
                                        </span>
                                        <span className="block-input">
                                            <label>Tamaño de la empresa</label><br/>
                                            <select className="formInput" name="typeCompany">

                                                <option>De 1 a 5 trabajadores</option>

                                                <option>De 6 a 10 trabajadores</option>

                                                <option>De 11 a 50 trabajadores</option>

                                                <option>De 51 a 100 trabajadores</option>

                                                <option>De 101 a 250 trabajadores</option>

                                                <option>De 251 a 500 trabajadores</option>

                                                <option>Más de 501 trabajadores</option>

                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className="buttons-flex">
                                    <div>
                                        <button type="button" className="button-regresar">Regresar</button>
                                        <button type="button" onClick={toDescriptionCompany} className="button-siguiente">Siguiente</button>
                                    </div>       
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className={descriptionCompany}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={buttonOn} width="30px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circle} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={circle} alt="advance" src={circle} width="10px"/>
                                </div>
                            </div>
                        </div>

                        <div className="blockForm-general">
                            <h2>Cuéntanos sobre tu empresa</h2>
                            <div>
                            <form>
                                <div className="formBlock">
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>¿En que "camellas"?</label><br/>
                                            <input className="formInput" type="text" placeholder="Escribe el area que consideres" />
                                        </span>
                                        <span className="block-input">
                                            <label>¿En que te especializas?</label><br/>
                                            <input className="formInput" type="text" placeholder="Escribe tu campo de acción" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <label>¿En qué eres bueno?</label><br/>
                                            <input className="formInput" type="text" placeholder="Comparte tus habilidades" />
                                        </span>
                                    </div>
                                </div>
                                <div className="buttons-flex">
                                    <div>
                                        <button type="button" onClick={backIntro} className="button-regresar">Regresar</button>
                                        <button type="button" className="button-siguiente">Siguiente</button>
                                    </div>       
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!user &&
                <div>
                    Por favor, registrate aqui!
                </div>
            }
        </div>
        }
    </React.Fragment>
}

export default Company;