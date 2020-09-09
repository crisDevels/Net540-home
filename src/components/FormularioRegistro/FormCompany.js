import React, { useState } from 'react';
import firebase from 'firebase';

import './stylesForm/formStyles.css';

import circle from './images/EllipseAdvance.svg';
import circleBlue from './images/EllipseBlue.svg';

import NavBar from '../NavBar';

import profile from './images/LOGOCompany.png';
import buttonOn from './images/Button-on.gif';

import loader from './images/loader.gif';


function Company() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [intro, setIntro] = useState('blockIntro');
    const [descriptionCompany, setDescription] = useState('none');
    const [admin, setAdmin] = useState('none');
    const [profileCompany, setProfileCompany] = useState('none');
    
    const [valueNIT, setValueNit] = useState(undefined);
    const [formInput, setFormInput] = useState('formInput')
    const [picture, setPicture] = useState(null)

    // aqui se genera la funciónn para seguir al formulario de description Company 

    const toDescriptionCompany = ()=> {
        setIntro('none')
        setDescription('blockDescriptionCompany')
        setAdmin('none')
        setProfileCompany('none')
    }

    // aqui se genera la función para regresar al formulario de intro

    const backIntro = ()=> {
        setIntro('blockIntro')
        setDescription('none')
        setAdmin('none')
        setProfileCompany('none')
    }

     // aqui se genera la funciónn para seguir al formulario de admin 

     const toAdmin = ()=> {
        setDescription('none')
        setAdmin('blockAdmin')
        setProfileCompany('none')
        setIntro('none')
    }

    // aqui se genera la función para regresar al formulario de description Company 

    const backDescriptionCompany = ()=> {
        setDescription('blockDescriptionCompany')
        setAdmin('none')
    }

    // aqui se genera la funciónn para seguir al formulario de admin 

    const toProfileCompany = ()=> {
        setAdmin('none')
        setProfileCompany('blockProfileCompany')
        setIntro('none')
        setDescription('none')
    }
    
    // aqui se genera la función para regresar al formulario de description Company 
    
    const backAdmin = ()=> {
        setProfileCompany('none')
        setAdmin('blockAdmin')
        setIntro('none')
        setDescription('none')
    }

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref(`/fotosPerfil/${file.name}`);
        var task = storageRef.put(file);

        console.log(user.displayName + " subió una foto");
        
        task.on('state_changed', snapshot => {
        }, error => {
            console.log(error.message)
        }, () => {
            setPicture(task.snapshot.downloadURL)   
        });        
    }
    
    // Autentificación del usuario en formulario empresas

    firebase.auth().onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        })
    
    // funcion para desactivar y activar el input de NIT

    const NITactive = (e) => {
        if (e.target.value === "Persona Natural Comerciante") {
            setValueNit('N/A')
            setFormInput('formInput-Desactive')
        } else {
            setValueNit(undefined)
            setFormInput('formInput') 
        }
    }

    //return formulario de empresas registro
    
    return <React.Fragment>
        
        {loading ? <div className="wrapper-home"><div className="loader-flex"><img alt="loader-company" src={loader}/></div></div> :
        
        <div className="wrapper-border">
            <div>
                < NavBar/>
            </div>
            {user &&
                <form>
                    <div className="wrapper-form">
                        <div className={intro}>
                            <div className="container-flex">
                                <div className="blockAdvance">
                                    <div className="circleAdvance">
                                        <img onClick={backIntro} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toDescriptionCompany} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toAdmin} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toProfileCompany} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                </div>
                            </div>
                            <div className="blockForm-general">
                                <h2>Información General</h2>
                                <div>
                                    <div className="formBlock">
                                        <div className="flex-form">
                                            <span className="block-input">
                                                <label>Tipo de la empresa</label><br/>
                                                <div className="formInput">          
                                                    <select 
                                                    onChange={NITactive} 
                                                    className="input-no-styles-selection" 
                                                    name="typeCompany" required>
                                                        <option>Persona Natural Comerciante</option>

                                                        <option>Empresa Unipersonal</option>

                                                        <option>Sociedades por Acciones Simplificadas (S.A.S.)</option>

                                                        <option>Sociedad Colectiva</option>

                                                        <option>Sociedad Anónima (S.A.)</option>

                                                        <option>Sociedad de Responsabilidad Limitada (Ltda.)</option>

                                                        <option>Sociedad en Comandita Simple (S. en C.)</option>
                                                    </select>
                                                </div>
                                            </span>
                                            <span className="block-input">
                                                <label>NIT empresarial</label><br/>
                                                <input className={formInput} value={valueNIT} type="text" placeholder="Digite el número del NIT de su empresa" required />
                                            </span>
                                        </div>
                                        <div className="flex-form">
                                            <span className="block-input">
                                                <label>Sector de la empresa</label><br/>
                                                <div className="formInput">
                                                    <select className="input-no-styles-selection" name="sectorCompany" required>
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
                                                </div>
                                            </span>
                                            <span className="block-input">
                                                <label>Tamaño de la empresa</label><br/>
                                                <div className="formInput">
                                                    <select className="input-no-styles-selection" name="typeCompany" required>

                                                        <option>De 1 a 5 trabajadores</option>

                                                        <option>De 6 a 10 trabajadores</option>

                                                        <option>De 11 a 50 trabajadores</option>

                                                        <option>De 51 a 100 trabajadores</option>

                                                        <option>De 101 a 250 trabajadores</option>

                                                        <option>De 251 a 500 trabajadores</option>

                                                        <option>Más de 501 trabajadores</option>

                                                    </select>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="buttons-flex">
                                        <div>
                                            <button type="button" className="button-regresar">Regresar</button>
                                            <button type="button" onClick={toDescriptionCompany} className="button-siguiente">Siguiente</button>
                                        </div>       
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className={descriptionCompany}>
                            <div className="container-flex">
                                <div className="blockAdvance">
                                    <div className="circleAdvance">
                                        <img onClick={backIntro} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toDescriptionCompany} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toAdmin} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toProfileCompany} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                </div>
                            </div>

                            <div className="blockForm-general">
                                <h2>Cuéntanos sobre tu empresa</h2>
                                <div>
                                    {/* Opción para editar textos
                                    <form>
                                        <EditorText/>
                                    </form> */}

                                        <div className="flex-form">
                                            <div className="formBlock">
                                                <div>
                                                    <div className="label-description">
                                                        <label className="label-functions">Escribe una breve descripción.</label><br/>
                                                        <textarea type="text" className="formInput-large" /> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button type="button" onClick={backIntro} className="button-regresar">Regresar</button>
                                                <button type="button" onClick={toAdmin} className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={admin}>
                            <div className="container-flex">
                                <div className="blockAdvance">
                                    <div className="circleAdvance">
                                        <img onClick={backIntro} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toDescriptionCompany} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toAdmin} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toProfileCompany} className={circle} alt="advance" src={circle} width="10px"/>
                                    </div>
                                </div>
                            </div>

                            <div className="blockForm-general">
                                <h2>Datos del administrador(a)</h2>
                                <div>
                                    
                                        <div className="flex-form">
                                            <div>
                                                <span className="flexInput">
                                                    <label>Nombres</label><br/>
                                                    <div className="formInput-flex">
                                                        <input 
                                                            className="input-no-styles" 
                                                            type="text"/>
                                                    </div>
                                                </span>
                                                <span className="flexInput">
                                                    <label>Apellidos</label><br/>
                                                    <div className="formInput-flex">
                                                        <input 
                                                            className="input-no-styles" 
                                                            type="text"/>
                                                    </div>
                                                </span>
                                                <span className="flexInput">
                                                    <label>Cargo</label><br/>
                                                    <div className="formInput-flex">
                                                        <input 
                                                            className="input-no-styles" 
                                                            type="text"/>
                                                    </div>
                                                </span>
                                                <span className="flexInput-number">
                                                    <label>Celular</label><br/>
                                                    <div className="block-number">   
                                                        <div className="formInput-number">
                                                            +<input 
                                                                type="number" 
                                                                placeholder="57" 
                                                                className="input-no-styles-code" 
                                                                min="0" max="99"/> -
                                                            
                                                            <input type="tel"
                                                                id="phone"
                                                                placeholder="312 557 3120" 
                                                                name="phone"
                                                                className="input-no-styles"  
                                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                minLength="9" maxLength="14" 
                                                                required/>
                                                        </div><br/>
                                                        <p>
                                                            + código area - numero de teléfono*
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button type="button" onClick={backDescriptionCompany} className="button-regresar">Regresar</button>
                                                <button type="button" onClick={toProfileCompany} className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={profileCompany}>
                            <div className="container-flex">
                                <div className="blockAdvance">
                                    <div className="circleAdvance">
                                        <img onClick={backIntro} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toDescriptionCompany} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toAdmin} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                    </div>
                                    <div className="circleAdvance">
                                        <img onClick={toProfileCompany} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                    </div>
                                </div>
                            </div>
                            <div className="blockForm-general">
                                <h2>Ya casi acabamos</h2>
                                <div>
                                    
                                        <div className="flex-form">
                                            <div className="block-image-profile">
                                            
                                                {/* <progress value={this.state.uploadValue} max="100" >
                                                {this.state.uploadValue} %
                                                </progress> */}
                                            
                                                { !picture && 
                                                <div>
                                                <img className="imagenPerfil"  width="200px" src={ profile } alt="" />
                                                <label htmlFor="subirFoto" className="subir">+</label> 
                                                </div>
                                                }

                                                { picture && 
                                                <div>
                                                <img  width="200px" src={ picture } alt="" />
                                                <label htmlFor="subirFoto" className="subir">x</label>
                                                </div>
                                                }
                                        
                                                <input id="subirFoto" className="display-none" type="file" onChange={handleUpload} /><br/>
                    
                                            </div>
                                            <div className="formBlock">
                                                <div>
                                                    <span className="block-input">
                                                        <label>Tu ubicación</label><br/>
                                                        <input className="formInput" type="text" placeholder="Ejemplo: Bogota-Colombia" />
                                                    </span>
                                                    <span className="block-input">
                                                        <label>Sitio Web</label><br/>
                                                        <input className="formInput" type="URL" placeholder="Ejemplo: Net-540.com" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button type="button" onClick={backAdmin} className="button-regresar">Regresar</button>
                                                <button type="button" className="button-siguiente">Enviar</button>
                                            </div>       
                                        </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
                    
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