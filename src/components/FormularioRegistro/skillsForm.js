import React from 'react';
import firebase from 'firebase';

import './stylesForm/formStyles.css'

import circle from './images/EllipseAdvance.svg'
import circleBlue from './images/EllipseBlue.svg'

import NavBar from '../NavBar';
import Studies from './studiesComp';
import Works from './worksComp';

import profile from './images/profile.png'
import buttonOn from './images/Button-on.gif'


var sectionProfile = {
    width: "100px",
    backgroundImage: "url("+ profile + ")"
  };

class Skills extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            circle: "gray",
            circleNone: "blue",
            skills: "blockSkills",
            study: "null",
            work: "null",
            languages: "null",
            description: "null",
            profile: "null",
            uploadValue: 0,
            picture: null,
            // studies: [
            //     {
            //         school: 'Universidad Nacional',
            //         titleStudy: 'Diseñador Industrial',
            //         placeStudy: 'Bogotá, Colombia',
            //         dateStartStudy: 'Noviembre del 2013',
            //         dateEndStudy: 'Mayo del 2019',
            //     },
            //     {
            //         school: 'Universidad de los Andes',
            //         titleStudy: 'Product Design',
            //         placeStudy: 'Bogotá, Colombia',
            //         dateStartStudy: 'Noviembre del 2019',
            //         dateEndStudy: 'Mayo del 2020',
            //     },
            // ],
            // works: [
            //     {
            //         empresa: 'Totto',
            //         cargo: 'Diseñador Junior',
            //         placeWork: 'Bogotá, Colombia',
            //         dateStartWork: 'Noviembre del 2013',
            //         dateEndwork: 'Mayo del 2019',
            //     },
            //     {
            //         empresa: 'Arturo Calle',
            //         cargo: 'Residente de Diseño',
            //         placeWork: 'Bogotá, Colombia',
            //         dateStartWork: 'Noviembre del 2019',
            //         dateEndwork: 'Mayo del 2020',
            //     },
            // ]
        };

        this.handleUpload = this.handleUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
        
        
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        this.setState({
        [name]: value 
        })
    }

    // aqui se genera la funciónn para seguir al formulario de estudios 

    toStudy = ()=> {
        this.setState({
            skills: "none",
            study: "blockStudy"
        })
    }

    // aqui se genera una función para regresar al formulario de skills

    backSkills = () => {
        this.setState({
            skills: "blockSkills",
            study: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de works

    toWork = () => {
        this.setState({
            study: "none",
            work: "blockWork",
        })
    }

    // aqui se genera una función para regresar al formulario de studies

    backStudy = () => {
        this.setState({
            study: "blockStudy",
            work: "none",
        })
    }

     // aqui se genera una función para seguir al formulario de languages

     toLanguages = () => {
        this.setState({
            work: "none",
            languages: "blockLanguages",
        })
    }

    // aqui se genera una función para regresar al formulario de works

    backWork = () => {
        this.setState({
            work: "blockWork",
            languages: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de languages

    toDescription = () => {
            this.setState({
                languages: "none",
                description: "blockDescription",
            })
        }
    
    // aqui se genera una función para regresar al formulario de works
    
    backLanguages = () => {
            this.setState({
            languages: "blockLanguages",
            description: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de profile

    toProfile = () => {
        this.setState({
            profile: "blockProfile",
            description: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de profile

    backDescription = () => {
        this.setState({
            description: "blockDescription",
            profile: "none",
        })
    }

    // aqui se genera un llamada al storage de firebase para subir una foto de perfil

        
    handleUpload = (e) => {
            const file = e.target.files[0];
            const storageRef = firebase.storage().ref(`/fotosPerfil/${file.name}`);
            var task = storageRef.put(file);
    
            task.on('state_changed', snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({
                    uploadValue: percentage,
                });
            }, error => {
                console.log(error.message)
            }, () => {
        
                this.setState({
                    // uploadValue: 100,
                    picture: task.snapshot.downloadURL,   
                });
            });        
    }
    

    

    render() {
    
        return <React.Fragment>
                    <div>
                        <NavBar />
                    </div>
                    <div className={this.state.skills}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance"  src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>

                        <div className="blockForm-general">

                        <h2>¿Qué sabes hacer?</h2>
                    
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
                                    <button type="button" className="button-regresar">Regresar</button>
                                    <button type="button" onClick={this.toStudy} className="button-siguiente">Siguiente</button>
                                </div>       
                                </div>
                            </form>
                        </div>
                        </div>

                        </div>
                        
                    
                    <div className={this.state.study}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>
                        <div className="blockForm-general">
                        
                        <h2 className="title-studies">Agrega tus estudios</h2>

                        {/* <div className="block-list-studies">
                            <Studies studies={this.state.studies}/>
                        </div> */}
                        
                        <div>
                            
                            <div className="formBlock-save">
                                <form>
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Centro Educativo</label><br/>
                                            <input className="formInput" type="text" placeholder="Escribe en donde estudiaste" />
                                        </span>
                                        <span className="block-input">
                                            <label>Grado</label><br/>
                                            <input className="formInput" type="text" placeholder="Seleciona tu grado de escolaridad" />
                                        </span>
                                    </div>
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Título</label><br/>
                                            <input className="formInput" type="text" placeholder="Ejemplo: Estudiante, Ingeniero, Arquitecto..." />
                                        </span>
                                        <span className="block-input">
                                            <label>Ubicación</label><br/>
                                            <input className="formInput" type="text" placeholder="Ejemplo: Bogotá, Lima, Quito" />
                                        </span>
                                    </div>
                                    <div>
                                        <label>Duración</label><br/>
                                        <span className="flex-date">
                                            
                                                <div className="block-input-date">
                                                    <label>Fecha de inicio</label><br/>
                                                    <input className="formInput-date" type="month" />
                                                </div>
                                                <div className="block-input-date">
                                                    <label>Fecha de finalización</label><br/>
                                                    <input className="formInput-date" type="month" />
                                                </div>

                                        </span><br/>
                                        <label className="check">
                                                <input 
                                                    type="checkbox" 
                                                    id="cbox1" 
                                                    value="checkbox-politicas" 
                                                    className="checkbox"/> Actualmente trabajas allí </label>
                                
                                    </div>
                                    <div className="buttons-flex-start">
                                        <div>
                                            <button type="button" className="button-siguiente">Agregar</button>
                                        </div>       
                                    </div>
                                </form>
                            </div>
                            
                            <div className="buttons-flex">
                                <div>
                                    <button type="button" onClick={this.backSkills} className="button-regresar">Regresar</button>
                                    <button type="button" onClick={this.toWork} className="button-siguiente">Siguiente</button>
                                </div>       
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>
                    <div className={this.state.work}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>
                        <div className="blockForm-general">
                        
                        <h2 className="title-studies">¿En qué has trabajado?</h2>

                        {/* <div className="block-list-studies">
                            <Works workies={this.state.works}/>
                        </div> */}
                        
                        <div>
                            
                            <div className="formBlock-save">
                                <form>
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Empresa</label><br/>
                                            <input className="formInput" type="text" placeholder="Escribe en donde trabajaste" />
                                        </span>
                                        <span className="block-input">
                                            <label>Sector</label><br/>
                                            <input className="formInput" type="text" placeholder="Sector empresarial de la empresa" />
                                        </span>
                                    </div>
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Cargo</label><br/>
                                            <input className="formInput" type="text" placeholder="Ejemplo: Residente, Senior, Gerente..." />
                                        </span>
                                        <span className="block-input">
                                            <label>Ubicación</label><br/>
                                            <input className="formInput" type="text" placeholder="Ejemplo: Bogotá, Lima, Quito" />
                                        </span>
                                    </div>
                                    <div>

                                        <label>Duración</label><br/>
                                        <span className="flex-date">
                                            
                                                <div className="block-input-date">
                                                    <label>Fecha de inicio</label><br/>
                                                    <input className="formInput-date" type="month"  />
                                                </div>
                                                <div className="block-input-date">
                                                    <label>Fecha de finalización</label><br/>
                                                    <input className="formInput-date" type="month"  />
                                                </div>

                                        </span><br/>
                                        <label className="check">
                                                <input 
                                                    type="checkbox" 
                                                    id="cbox1" 
                                                    value="checkbox-politicas" 
                                                    className="checkbox"/> Actualmente trabajas allí </label><br/>
                                        
                                        <div className="label-functions">
                                        <label className="label-functions">Funciones a cargo</label><br/>
                                        <textarea type="text" className="formInput-large" /> 
                                        </div>
                                
                                    </div>

                                    <div className="buttons-flex-start">
                                        <div>
                                            <button type="button" className="button-siguiente">Agregar</button>
                                        </div>       
                                    </div>
                                </form>
                            </div>
                            
                            <div className="buttons-flex">
                                <div>
                                    <button type="button" onClick={this.backStudy} className="button-regresar">Regresar</button>
                                    <button type="button" onClick={this.toLanguages} className="button-siguiente">Siguiente</button>
                                </div>       
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>

                    <div className={this.state.languages}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>
                        <div className="blockForm-general">
                        
                        <h2>¿Qué idiomas hablas?</h2>
                        
                        <div>
                            <form>
                                <div className="formBlock">
                                    <div className="flex-form">
                                        <span className="block-input">
                                            <label>Seleciona un idioma</label><br/>
                                            <select className="formInput" name="idiomas">

                                                <option>Alemán</option>

                                                <option>Ingles</option>

                                                <option>Italiano</option>

                                                <option>Francés</option>

                                                <option>Chino Mandarín</option>

                                                <option>Portugués</option>

                                                <option>Ruso</option>

                                                <option>Español</option>

                                            </select>
                                        </span>
                                        <span className="block-input">
                                            <label>¿Qué nivel eres?</label><br/>
                                            <select className="formInput" name="idiomas">

                                                <option>A1 Eres principiante.</option>

                                                <option>A2 Posees nociones basicas.</option>

                                                <option>B1 Se defiende en el idioma.</option>

                                                <option>B2 Casi eres un pro.</option>

                                                <option>C1 Eres un pro.</option>

                                                <option>C2 ¡Maestro!</option>

                                            </select>
                                        </span>
                                    </div>
                                    <div className="buttons-flex-start">
                                        <div>
                                            <button type="button" className="button-siguiente">Agregar</button>
                                        </div>       
                                    </div>
                                </div>
                                <div className="buttons-flex">
                                    <div>
                                        <button type="button" onClick={this.backWork} className="button-regresar">Regresar</button>
                                        <button type="button" onClick={this.toDescription} className="button-siguiente">Siguiente</button>
                                    </div>       
                                </div>
                            </form>
                        </div>
                        </div>
                        
                    </div>

                    <div className={this.state.description}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>
                        <div className="blockForm-general">
                        
                        <h2>¿Por qué tu?</h2>
                        
                        <div>

                            <form>
                                <div className="flex-form">
                                    
                                    <div className="formBlock">
                                        <div>
                                            <div className="label-description">
                                                <label className="label-functions">Cuentanos sobre tí</label><br/>
                                                <textarea type="text" className="formInput-large" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons-flex">
                                    <div>
                                        <button type="button" onClick={this.backLanguages} className="button-regresar">Regresar</button>
                                        <button type="button" onClick={this.toProfile} className="button-siguiente">Siguiente</button>
                                    </div>       
                                </div>
                            </form>
                        </div>
                        </div>
                        
                    </div>

                    <div className={this.state.profile}>
                        <div className="container-flex">
                            <div className="blockAdvance">
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circleNone} alt="advance" src={circle} width="10px"/>
                                    <img className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                                <div className="circleAdvance">
                                    <img className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                    <img className={this.state.circleNone} alt="advance" src={circleBlue} width="10px"/>
                                </div>
                            </div>
                        </div>
                        <div className="blockForm-general">
                        
                        <h2>Ya casi acabamos</h2>
                        
                        <div>

                            <form>
                                <div className="flex-form">
                                    <div className="block-image-profile">
                                        
                                        {/* <progress value={this.state.uploadValue} max="100" >
                                            {this.state.uploadValue} %
                                        </progress> */}
                                        
                                            { !this.state.picture && 
                                               <div>
                                               <img  width="200px" src={ profile } alt="" />
                                               <label htmlFor="subirFoto" className="subir">+</label> 
                                               </div>
                                            }

                                            { this.state.picture && 
                                               <div>
                                               <img  width="200px" src={ this.state.picture } alt="" />
                                               <label htmlFor="subirFoto" className="subir">x</label>
                                               </div>
                                            }
                                        
                                        
                                        
                                        <input id="subirFoto" className="display-none" type="file" onChange={ this.handleUpload } /><br/>
                                        
                                        
                                        <br/>
                                        

                                    </div>
                                    <div className="formBlock">
                                        <div>
                                            <span className="block-input">
                                                <label>Tu ubicación</label><br/>
                                                <input className="formInput" type="text" placeholder="Ejemplo: Bogota-Colombia" />
                                            </span>
                                            <span className="block-input">
                                                <label>Tu celular</label><br/>
                                                <input className="formInput" type="text" placeholder="Ejemplo: 310 245 2464" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons-flex">
                                    <div>
                                        <button type="button" onClick={this.backDescription} className="button-regresar">Regresar</button>
                                        <button type="button" className="button-siguiente">Siguiente</button>
                                    </div>       
                                </div>
                            </form>
                        </div>
                        </div>
                        
                    </div>

        </React.Fragment>
    } 
}

export default Skills;