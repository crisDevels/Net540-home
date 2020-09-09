import React from 'react';
import firebase from 'firebase';

import './stylesForm/formStyles.css'

import circle from './images/EllipseAdvance.svg'
import circleBlue from './images/EllipseBlue.svg'

import NavBar from '../NavBar';

// son los componentes para agregar nuevos estudios e experiencia

// import Studies from './studiesComp';
// import Works from './worksComp';

import profile from './images/profile.png'
import buttonOn from './images/Button-on.gif'
import loader from './images/loader.gif';


class Skills extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loading: true,
            circle: "gray",
            circleNone: "blue",
            skills: "null",
            study: "blockStudy",
            work: "null",
            languages: "null",
            description: "null",
            profile: "null",
            uploadValue: 0,
            picture: null,
            conteoStudies: 0,
            conteoJobs: 0,
            conteoLanguages: 0,
            dateEnd: "block-input-date",
            // nameSchoolValue: "",
            // typeSchoolValue: "",
            // typeProfesionValue: "",
            // titleProfesionValue: "",
            // locationSchoolValue: "",
            // DateStartStudyValue: "",
            // DateEndStudyValue: "",
            // languageValue: "",
            // levelLanguageValue: "",
            // nameCompanyExperienceValue:"",
            // sectorCompanyExperienceValue: "",
            // cargoCompanyExperienceValue: "",
            // locationCompanyExperienceValue: "",
            // dateStartExperienceValue: "",
            // dateEndExperienceValue: "",
            // functionsExperienceValue: "",     
            buttonActually: "button-actually",
            buttonDateEnd: "none",
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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ 
                user,
                loading: false,
             })
        })
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        this.setState({
        [name]: value 
        })
    }

    checkActullity = (e) => {
            this.setState({
                dateEnd: "null",
                buttonActually: "null",
                buttonDateEnd: "button-actually",
            })
    }

    checkDate = (e) => {
        this.setState({
            dateEnd: "block-input-date",
            buttonActually: "button-actually",
            buttonDateEnd: "null",
        })
    }

    // aqui se genera la funciónn para seguir al formulario de estudios 

    toStudy = ()=> {
        this.setState({
            skills: "none",
            study: "blockStudy",
            work: "null",
            languages: "null",
            description: "null",
            profile: "null",
        })
    }

    // aqui se genera una función para regresar al formulario de skills

    backSkills = () => {
        this.setState({
            skills: "blockSkills",
            study: "none",
            work: "null",
            languages: "null",
            description: "null",
            profile: "null",
        })
    }

    // aqui se genera una función para seguir al formulario de works

    toWork = () => {
        this.setState({
            study: "none",
            work: "blockWork",
            skills: "null",
            languages: "null",
            description: "null",
            profile: "null",
        })
    }

    // aqui se genera una función para regresar al formulario de studies

    backStudy = () => {
        this.setState({
            study: "blockStudy",
            work: "none",
            skills: "null",
            languages: "null",
            description: "null",
            profile: "null",
        })
    }

     // aqui se genera una función para seguir al formulario de languages

     toLanguages = () => {
        this.setState({
            work: "none",
            languages: "blockLanguages",
            skills: "null",
            study: "null",
            description: "null",
            profile: "null",
        })
    }

    // aqui se genera una función para regresar al formulario de works

    backWork = () => {
        this.setState({
            work: "blockWork",
            skills: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de languages

    toDescription = () => {
            this.setState({
                languages: "none",
                description: "blockDescription",
                skills: "null",
                study: "null",
                work: "null",
                profile: "null",
            })
        }
    
    // aqui se genera una función para regresar al formulario de works
    
    backLanguages = () => {
            this.setState({
            languages: "blockLanguages",
            work: "none",
        })
    }

    // aqui se genera una función para seguir al formulario de profile

    toProfile = () => {
        this.setState({
            profile: "blockProfile",
            description: "none",
            skills: "null",
            study: "null",
            work: "null",
            languages: "null",
        })
    }

    // aqui se genera una función para seguir al formulario de profile

    backDescription = () => {
        this.setState({
            description: "blockDescription",
            profile: "none",
        })
    }

    // se agrega data a estudios

    submitStudies = (e)=> {
        e.preventDefault();
        this.setState({
            conteoStudies: this.state.conteoStudies + 1,
        })
        console.log(this.state);
    }

    // se agrega data a experiencia

    submitJobs = (e)=> {
        e.preventDefault();
        this.setState({
            conteoJobs: this.state.conteoJobs + 1,
        })
        console.log(this.state);
    }
    
    // se agrega data a language

    submitLanguages = (e)=> {
        e.preventDefault();
        this.setState({
            conteoLanguages: this.state.conteoLanguages + 1,
        })
        console.log(this.state);
    }

    // se agraega data a personal profesional

    submitPersonalProfesional = (e)=> {
        e.preventDefault();
        console.log(this.state);
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

                {this.state.loading ? <div className="wrapper-home"><div className="loader-flex"><img alt="loader-skills" src={loader}/></div></div> :

                    <div className="wrapper-border">
                        <div>
                            <NavBar />
                        </div>
                        {/* <form> */}
                            <div className="wrapper-form">
                                <div className={this.state.study}>
                                    <div className="container-flex">
                                        <div className="blockAdvance">
                                            <div className="circleAdvance">
                                                <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toWork} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toDescription}  className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blockForm-general">
                                        <h2 className="title-studies">Agrega tus estudios</h2>
                                        {/* <div className="block-list-studies">
                                        <Studies studies={this.state.studies}/>
                                        </div> */}
                                        <div>
                                            <form>
                                                <div className="formBlock-save">
                                                    <div className="flex-form">
                                                        <span className="block-input">
                                                            <label>Centro Educativo</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.nameSchool}
                                                            name={"nameSchool" + this.state.conteoStudies}
                                                            placeholder="Escribe en donde estudiaste" required />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>Grado</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.typeProfesion}
                                                            name={"typeProfesion" + this.state.conteoStudies} 
                                                            placeholder="Seleciona tu grado de escolaridad" required />
                                                        </span>
                                                    </div>
                                                    <div className="flex-form">
                                                        <span className="block-input">
                                                            <label>Título</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.titleProfesion}
                                                            name={"titleProfesion" + this.state.conteoStudies}
                                                            placeholder="Ejemplo: Estudiante, Ingeniero, Arquitecto..." required />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>Ubicación</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.LocationSchool}
                                                            name={"locationSchool" + this.state.conteoStudies}
                                                            placeholder="Ejemplo: Bogotá, Lima, Quito" required />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <label>Duración</label><br/>
                                                        <span className="flex-date">
                                                            <div className="block-input-date">
                                                                <label>Fecha de inicio</label><br/>
                                                                <input
                                                                onChange={this.handleInputChange} 
                                                                className="formInput-date"
                                                                value={this.state.dateStartStudy}
                                                                name={"dateStartStudy" + this.state.conteoStudies} 
                                                                type="month" required />
                                                            </div>
                                                            <div className={this.state.dateEnd}>
                                                                <label>Fecha de finalización</label><br/>
                                                                <input 
                                                                onChange={this.handleInputChange}
                                                                className="formInput-date"
                                                                value={this.state.dateEndStudy}
                                                                name={"dateEndStudy" + this.state.conteoStudies} 
                                                                type="month" 
                                                                 />
                                                            </div>
                                                        </span><br/>
                                                        <button
                                                        onClick={this.checkActullity} 
                                                        type="button" 
                                                        className={this.state.buttonActually}>Actualmente estudias allí</button>
                                                        <button
                                                        onClick={this.checkDate} 
                                                        type="button" 
                                                        className={this.state.buttonDateEnd}>Agregar fecha de finalización</button>
                                                    </div>
                                                    <div className="buttons-flex-start">
                                                        <div>
                                                            <button 
                                                            onClick={this.submitStudies} 
                                                            type="button" 
                                                            className="button-siguiente">Agregar</button>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="buttons-flex">
                                                <div>
                                                    <button type="button" className="button-regresar">Regresar</button>
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
                                                <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toWork} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toDescription} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={circle} width="10px"/>
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
                                                            <div className="formInput">
                                                                <select
                                                                onChange={this.handleInputChange} 
                                                                className="input-no-styles-selection" 
                                                                name={"language" + this.state.conteoLanguages}
                                                                value={this.state.language}
                                                                required>
                                                                    <option>Alemán</option>

                                                                    <option>Ingles</option>

                                                                    <option>Italiano</option>

                                                                    <option>Francés</option>

                                                                    <option>Chino Mandarín</option>

                                                                    <option>Portugués</option>

                                                                    <option>Ruso</option>

                                                                    <option>Español</option>
                                                                </select>
                                                            </div>
                                                        </span>
                                                        <span className="block-input">
                                                            <label>¿Qué nivel eres?</label><br/>
                                                            <div className="formInput">
                                                                <select
                                                                onChange={this.handleInputChange} 
                                                                className="input-no-styles-selection" 
                                                                name={"levelLanguage" + this.state.conteoLanguages}
                                                                value={this.state.levelLanguage}
                                                                required>
                                                                    <option>A1 Eres principiante.</option>

                                                                    <option>A2 Posees nociones basicas.</option>

                                                                    <option>B1 Se defiende en el idioma.</option>

                                                                    <option>B2 Casi eres un pro.</option>

                                                                    <option>C1 Eres un pro.</option>

                                                                    <option>C2 ¡Maestro!</option>
                                                                </select>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="buttons-flex-start">
                                                        <div>
                                                            <button onClick={this.submitLanguages} type="button" className="button-siguiente">Agregar</button>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="buttons-flex">
                                                <div>
                                                    <button type="button" onClick={this.backStudy} className="button-regresar">Regresar</button>
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
                                                <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toWork} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toDescription} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                            </div>
                                            <div className="circleAdvance">
                                                <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={circle} width="10px"/>
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
                                                            <input
                                                            onChange={this.handleInputChange}
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.nameCompanyExperience}
                                                            name={"nameCompanyExperience" + this.state.conteoJobs}
                                                            placeholder="Escribe en donde trabajaste" required />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>Sector</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange}
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.sectorCompanyExperience}
                                                            name={"sectorCompanyExperience" + this.state.conteoJobs}
                                                            placeholder="Sector empresarial de la empresa" required />
                                                        </span>
                                                    </div>
                                                    <div className="flex-form">
                                                        <span className="block-input">
                                                            <label>Cargo</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.cargoCompanyExperience}
                                                            name={"cargoCompanyExperience" + this.state.conteoJobs} 
                                                            placeholder="Ejemplo: Residente, Senior, Gerente..." required />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>Ubicación</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            value={this.state.locationCompanyExperience}
                                                            name={"locationCompanyExperience" + this.state.conteoJobs}
                                                            placeholder="Ejemplo: Bogotá, Lima, Quito" required />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <label>Duración</label><br/>
                                                        <span className="flex-date">
                                                                <div className="block-input-date">
                                                                    <label>Fecha de inicio</label><br/>
                                                                    <input
                                                                    onChange={this.handleInputChange}
                                                                    className="formInput-date" 
                                                                    type="month"
                                                                    value={this.state.dateStartExperience}
                                                                    name={"dateStartExperience" + this.state.conteoJobs} required />
                                                                </div>
                                                                <div className={this.state.dateEnd}>
                                                                    <label>Fecha de finalización</label><br/>
                                                                    <input
                                                                    onChange={this.handleInputChange}
                                                                    className="formInput-date" 
                                                                    type="month"
                                                                    value={this.state.dateEndExperience}
                                                                    name={"dateEndExperience" + this.state.conteoJobs} />
                                                                </div>
                                                        </span><br/>
                                                        <button
                                                            onClick={this.checkActullity} 
                                                            type="button" 
                                                            className={this.state.buttonActually}>Actualmente trabajas allí</button>
                                                        <button
                                                            onClick={this.checkDate} 
                                                            type="button" 
                                                            className={this.state.buttonDateEnd}>Agregar fecha de finalización</button>
                                                        <div className="label-functions">
                                                            <label className="label-functions">Funciones a cargo</label><br/>
                                                            <textarea
                                                            onChange={this.handleInputChange} 
                                                            type="text" 
                                                            className="formInput-large"
                                                            value={this.state.functionsExperience}
                                                            name={"functionsExperience" + this.state.conteoJobs} required /> 
                                                        </div>
                                                    </div>
                                                    <div className="buttons-flex-start">
                                                        <div>
                                                            <button onClick={this.submitJobs} type="button" className="button-siguiente">Agregar</button>
                                                        </div>       
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="buttons-flex">
                                                <div>
                                                    <button type="button" onClick={this.backStudy} className="button-regresar">Regresar</button>
                                                    <button type="button" onClick={this.backSkills} className="button-siguiente">Siguiente</button>
                                                </div>       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className={this.state.skills}>
                                        <div className="container-flex">
                                            <div className="blockAdvance">
                                                <div className="circleAdvance">
                                                    <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toWork} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toDescription} className={this.state.circle} alt="advance"  src={circle} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blockForm-general">
                                            <h2>¿Qué sabes hacer?</h2>
                                            <div>
                                                <div className="formBlock">
                                                    <div className="flex-form">
                                                        <span className="block-input">
                                                            <label>¿Cuál es tu campo de acción?</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            name="profesionUser"
                                                            value={this.state.profesionUser}
                                                            placeholder="Escribe el area que consideres" />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>¿En qué te especializas?</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            name="specialUser"
                                                            value={this.state.specialUser}
                                                            placeholder="Escribe tu campo de acción" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-form">
                                                        <span className="block-input">
                                                            <label>¿Cuales son tus mejores habilidades?</label><br/>
                                                            <input
                                                            onChange={this.handleInputChange} 
                                                            className="formInput" 
                                                            type="text"
                                                            name="skillsUser"
                                                            value={this.state.skillsUser}
                                                            placeholder="Comparte tus habilidades" />
                                                        </span>
                                                        <span className="block-input">
                                                            <label>Valor del servicio</label><br/>
                                                            <div>
                                                                <input
                                                                onChange={this.handleInputChange}
                                                                className="formInput-short" 
                                                                type="text"
                                                                name="rateUser"
                                                                value={this.state.rateUser}
                                                                placeholder="$4'000.000" />
                                                                <input
                                                                onChange={this.handleInputChange} 
                                                                className="formInput-short" 
                                                                type="text"
                                                                name="timeRateUser"
                                                                value={this.state.TimeRateUser}
                                                                placeholder="Tiempo/Proyecto/Diseño" />
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons-flex">
                                                    <div>
                                                        <button type="button" onClick={this.backWork} className="button-regresar">Regresar</button>
                                                        <button type="button" onClick={this.toDescription} className="button-siguiente">Siguiente</button>
                                                    </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={this.state.description}>
                                        <div className="container-flex">
                                            <div className="blockAdvance">
                                                <div className="circleAdvance">
                                                    <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toWork} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toDescription} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={circle} width="10px"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blockForm-general">
                                            <h2>¿Por qué tu?</h2>
                                            <div>
                                                <div className="flex-form">
                                                    <div className="formBlock">
                                                        <div>
                                                            <div className="label-description">
                                                                <label className="label-functions">Cuentanos sobre tí</label><br/>
                                                                <textarea
                                                                onChange={this.handleInputChange} 
                                                                type="text"
                                                                name="descriptionProfesional"
                                                                value={this.state.descriptionProfesional}
                                                                className="formInput-large" /> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="buttons-flex">
                                                    <div>
                                                        <button type="button" onClick={this.backSkills} className="button-regresar">Regresar</button>
                                                        <button type="button" onClick={this.toProfile} className="button-siguiente">Siguiente</button>
                                                    </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={this.state.profile}>
                                        <div className="container-flex">
                                            <div className="blockAdvance">
                                                <div className="circleAdvance">
                                                    <img onClick={this.toStudy} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toLanguages} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toWork} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.backSkills} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toDescription} className={this.state.circle} alt="advance" src={circleBlue} width="10px"/>
                                                </div>
                                                <div className="circleAdvance">
                                                    <img onClick={this.toProfile} className={this.state.circle} alt="advance" src={buttonOn} width="30px"/>
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
                                                    </div>
                                                    <div className="formBlock-profile">
                                                        <div>
                                                            <span className="block-input">
                                                                <label>Tu ubicación</label><br/>
                                                                <input
                                                                onChange={this.handleInputChange}
                                                                className="formInput"
                                                                type="text"
                                                                name="locationProfesional"
                                                                value={this.state.locationProfesional}
                                                                placeholder="Ejemplo: Bogota-Colombia" />
                                                            </span>
                                                            <span className="block-input">
                                                                <label>Tu celular</label><br/>
                                                                <input
                                                                onChange={this.handleInputChange} 
                                                                className="formInput" 
                                                                type="text"
                                                                name="phoneProfesional"
                                                                value={this.state.phoneProfesional}
                                                                placeholder="Ejemplo: 310 245 2464" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="buttons-flex">
                                                    <div>
                                                        <button type="button" onClick={this.backDescription} className="button-regresar">Regresar</button>
                                                        <button type="button" onClick={this.submitPersonalProfesional} className="button-siguiente">Enviar</button>
                                                    </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        {/* </form> */}
                    </div>
    }

        </React.Fragment>
    } 
}

export default Skills;