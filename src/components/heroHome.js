import React from "react";
import firebase from 'firebase';


import '../pages/styles/homeStyles.css'
import Registre from '../components/registre.js'
import imagefreelancer from '../images/ILUSTRACION-PRUEBA-1.gif'

import '../components/styles/popRegistro.css'
import registroImage from '../images/registroILU2.svg'

import '../fonts/style.css'

class HeroHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
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
            this.setState({ 
                user,
                isLoading: true,
             })
        })
    }

    abrirModalProfesional= ()=> {
        this.setState({
            overlay: "overlayActive",
            modalProfesional: "modalProfesionalActive",
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
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))   
    }

    createUser = (e)=> {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)

        .then(() => {
        
        // window.location.reload(true)
        window.location.href = '/works'

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
            {/* <div className="hero">
                <h1>Te damos la bienvenida</h1>
            </div> */}
            <div className="container-content-registre">
                <div className="registreBlock">
                    <div className="boxReg">
                        <h1>Te damos la bienvenida</h1>
                        <p className="hero-p">Que el mundo no se pierda de tu talento, cuentanos sobre tí, que nosotros hacemos el resto <strong className="subtitle-strong">¿Qué estas esperando?</strong></p>
                        {/* <button className="buttonModal" onClick={this.abrirModalEmpresa}>< Registre imagenFreelancer={imageProject} buttonRegistre="¿Estás contratando?" /></button> */}
                    </div>
                    <div className="boxReg">
                        <button className="buttonModal" onClick={this.abrirModalProfesional}>< Registre imagenFreelancer={imagefreelancer} buttonRegistre="Regístrate ahora" /></button>
                    </div>
                </div>
            </div>

            <div onClick={this.cerrarModal} className={this.state.overlay} id="overlay"></div>
                <div className={this.state.modalProfesional}>
                    <div>
                        <img src={registroImage} className="imageRegistro" width="310px" alt="Ilustración de registro" />
                    </div>
                    <div>
                        <div className="titleRegistro">
                            <div className="title-modal">
                                <h2>Registro</h2>
                            </div>
                            <div>
                                <span onClick={this.cerrarModal} className="icon-Logo_equis"></span>
                            </div>   
                        </div>
                        <form className="formRegitre">
                            <div className="flex-name">
                                <input
                                value={this.state.name}
                                onChange={this.handleChange} 
                                className="spaceForm-name" 
                                type="text" 
                                name="name" 
                                placeholder="Nombre"
                                id="registryName"
                                size="40" required/>
        
                                <input
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                className="spaceForm-name" 
                                type="text" 
                                name="lastName" 
                                placeholder="Apellido"
                                id="registryApellido" 
                                size="40" required/>
                            </div>

                            <input
                                value={this.state.phone}
                                onChange={this.handleChange} 
                                className="spaceForm" 
                                type="phone" 
                                name="phoneNumber"
                                placeholder="Celular"
                                id="registryPhone" 
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
                                value={this.state.registryPassword}
                                onChange={this.handleChange} 
                                className="spaceForm" 
                                type="password" 
                                name="ConfregistryPassword"
                                id="ConfRegistryPassword" 
                                placeholder="Confirmar Contraseña" required /><br/>


                            <label className="check">
                                <input 
                                    type="checkbox" 
                                    id="check-politicas" 
                                    name="checkedPoliticas" 
                                    value="checkbox-politicas" 
                                    className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label><br/>
                                    
                            <button
                                onClick={this.createUser}
                                className="buttonRegistrar" 
                                type="submit" 
                                >Registrar</button>
                        </form>
                    </div>
                </div>
                
 </React.Fragment>
}

}

export default HeroHome;