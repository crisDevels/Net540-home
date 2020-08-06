import React from "react";
import firebase from 'firebase';


import '../pages/styles/homeStyles.css'
import Registre from '../components/registre.js'
import imagefreelancer from '../images/ILUSTRACION-PRUEBA-1.gif'
import imageProject from '../images/ILUSTRACION-MANOS.gif'

import '../components/styles/popRegistro.css'
import registroImage from '../images/RegistroILU.png'
import registroImageEmpresa from '../images/EmpresaILU.png'
import cerrar from '../images/CERRAR.png'

class HeroHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overlay: "overlay",
            modalProfesional: "modal",
            modalEmpresa: "modal",
            modalInicio: "modal",
            blur: "desactiveBlur",
            user: null,
            email:"",
            password:"",
            name:"",
            apellido:"",
            registryEmail:"",
            registryPassword:"",
        }
        this.createUser = this.createUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }

    abrirModalProfesional= ()=> {
        this.setState({
            overlay: "overlayActive",
            modalProfesional: "modalProfesionalActive",
            blur: "activeBlur"
        }) 
    }

    abrirModalEmpresa = ()=> {
        this.setState({
            overlay: "overlayActive",
            modalEmpresa: "modalEmpresaActive",
            blur: "activeBlur"
        })
    }

    cerrarModal= ()=> {
        this.setState({
            overlay: "overlay",
            modalProfesional: "modal",
            modalEmpresa: "modal",
            blur: "desactiveBlur"
        }) 
    }

    login = ()=> {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => console.log('${result.user.email} ha iniciado sesión'))
        .catch(error => console.log('Error ${error.code}: ${error.message}'))   
    }

    createUser = (e)=> {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)
        .then(() => {
  
        alert('Your account has been created');
            const nameUser = this.state.name;
            console.log(nameUser);
        
            
        var user = firebase.auth().currentUser;
        //Actualizando nombre de usuario 
        user.updateProfile({
              displayName: this.state.name
            })
    
          })

        .catch((error)=> {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        });    
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        this.setState({
        [name]: value 
        })
    }

render() {
    return <React.Fragment>
            <div className="hero">
                <h1>Te damos la bienvenida</h1>
            </div>
            <div className="container-content-registre">
                <div className="registreBlock">
                    <div className="boxReg">
                        <button className="buttonModal" onClick={this.abrirModalProfesional}>< Registre imagenFreelancer={imagefreelancer} buttonRegistre="¿BUSCAS EMPLEO?" /></button>
                    </div>
                    <div className="boxReg">
                        <button className="buttonModal" onClick={this.abrirModalEmpresa}>< Registre imagenFreelancer={imageProject} buttonRegistre="¿ESTÁS CONTRATANDO?" /></button>
                    </div>
                </div>
            </div>
            <div className={this.state.overlay} id="overlay"></div>
                <div className={this.state.modalProfesional}>
                    <div>
                        <img src={registroImage} className="imageRegistro" width="310px" alt="Ilustración de registro" />
                    </div>
                    <div>
                        <div className="titleRegistro">
                            <h2>INDEPENDIENTE</h2>
                            <div className="spaceTitleRegistro"></div>
                                <img className="buttonCerrar" onClick={this.cerrarModal} src={cerrar} width="10px" alt="boton cerrar" />
                            </div>
                            <form className="formRegitre">

                                <input
                                    value={this.state.name}
                                    onChange={this.handleChange} 
                                    className="spaceForm" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Nombre"
                                    id="registryName"
                                    size="40" required/>

                                <input
                                    value={this.state.apellido}
                                    onChange={this.handleChange}
                                    className="spaceForm" 
                                    type="text" 
                                    name="apellido" 
                                    placeholder="Apellido"
                                    id="RegistryApellido" 
                                    size="40" required/>

                                <input
                                    value={this.state.registryEmail}
                                    onChange={this.handleChange} 
                                    className="spaceForm" 
                                    type="text" 
                                    name="registryEmail" 
                                    placeholder="Correo Electrónico"
                                    id="RegistryEmail" 
                                    size="40" required/>

                                <input
                                    value={this.state.registryPassword}
                                    onChange={this.handleChange} 
                                    className="spaceForm" 
                                    type="password" 
                                    name="registryPassword"
                                    id="RegistryPassword" 
                                    placeholder="Contraseña" required />

                                <input
                                    
                                    className="spaceForm" 
                                    type="date" 
                                    id="FechaNacimiento" 
                                    placeholder="Fecha de nacimiento" 
                                    name="trip-start" 
                                    value="2004-07-22" 
                                    min="1920-01-01" 
                                    max="2004-12-31" /><br/>

                                <label className="check">
                                    <input 
                                        type="checkbox" 
                                        id="cbox1" 
                                        value="checkbox-politicas" 
                                        className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label><br/>
                                <input
                                    onClick={this.createUser}
                                    className="buttonRegistrar" 
                                    type="submit" 
                                    value="Registrar" />

                            </form>
                    </div>
                </div>
                <div className={this.state.modalEmpresa}>
                    <div>
                        <img src={registroImageEmpresa} className="imageRegistro" width="310px" alt="Ilustración de registro" />
                    </div>
                    <div>
                        <div class="titleRegistro">
                            <h2>EMPRESA</h2>
                            <div className="spaceTitleRegistro"></div>
                            <img  className="buttonCerrar" onClick={this.cerrarModal} id="hide-modal-Empresa" src={cerrar} width="10px" alt="boton cerrar" />
                        </div>
                        <form className="formRegitre">
                            <input className="spaceForm" type="text" name="Nombres" placeholder="Nombre de empresa" size="40" required/>
                            <select className="spaceFormSelect" name="Económico" placeholder="Razón social">

                            <option selected>Actividad Económica</option>

                            <option>Ganadero</option>
                        
                            <option>Pesquero</option>
                        
                            <option>Agrícola</option>

                            <option>Minero</option>

                            <option>Forestal</option>

                            <option>Industrial</option>

                            <option>Bienes Culturales</option>

                            <option>Energético</option>

                            <option>Minero</option>

                            <option>Construcción</option>

                            <option>Transportes</option>

                            <option>Comunicaciones</option>

                            <option>Comercial</option>

                            <option>Turístico</option>

                            <option>Sanitario</option>

                            <option>Educativo</option>

                            <option>Artístico</option>

                            <option>Financiero</option>

                            <option>Administración</option>

                            <option>Investigación</option>

                            <option>Desarrollo e Investigación</option>

                            <option>Otros</option>
                        
                            </select>
                            <input className="spaceForm" type="text" name="Email" placeholder="Correo empresarial" size="40" required/>
                            <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required minlength="8" required />
                            <input className="spaceForm" type="password" name="password" placeholder="Confirmar contraseña" required minlength="8" required /><br/>
                            <label className="check"><input type="checkbox" id="cbox1" value="checkbox-politicas" className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label><br/>
                            <input className="buttonRegistrar" type="submit" value="Registrar" />
                        </form>
                    </div> 
                </div>
 </React.Fragment>
}

}

export default HeroHome;