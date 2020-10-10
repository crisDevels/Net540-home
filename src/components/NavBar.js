import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

import iconHome from '../images/homeIcon.svg'
import iconJobs from '../images/JobsIcon.svg'
import iconPublic from '../images/publicIcon.svg'
import iconProfile from '../images/profileIcon.svg'
import iconTerms from '../images/termsIcon.svg'
import iconPublicaciones from '../images/publicacionesIcon.svg'
import iconSearch from '../images/searchIcon.svg'

import googleIcon from '../images/googleIcono.png'
import facebookIcon from '../images/facebook-icon.svg'
import linkedIcon from '../images/linked-icon.svg'

import '../fonts/style.css'

var iconGoogle = {
    width: "100%",
    backgroundImage: "url("+ googleIcon + ")"
  };

var iconFacebook = {
    width: "100%",
    backgroundImage: "url("+ facebookIcon + ")"
};

var iconLinked = {
    width: "100%",
    backgroundImage: "url("+ linkedIcon + ")"
};

var iconTerminos = {
    backgroundImage: "url("+ iconTerms + ")"
};

var iconPublica = {
    backgroundImage: "url("+ iconPublic + ")"
};

var iconPublicacionesNet = {
    backgroundImage: "url("+ iconPublicaciones + ")"
};

var NetLogo = {
    color: "#1DAEFF",
}

var searchIcon = {
    backgroundImage: "url("+ iconSearch + ")"
};


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            modalProfile: "none",
            modalPublic: "none",
            modalJobs: "none",
            modalBuscar: "none",
            modalInicio: "modal",
            overlay: "overlay",
            overlayMenu: "overlay",
            buttonInicio: "buttonInicioN",
            bienvenido: "blockPerfil",
            user: null, 
            email:"",
            password:"",
            name:""
        }
        this.handleAuth =  this.handleAuth.bind(this);
        this.handleLogout =  this.handleLogout.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }

    abrirModalInicio = ()=> {
        this.setState({
            overlay: "overlayActive",
            modalInicio: "modalInicioActive",
        }) 
    }

    cerrarModalInicio = ()=> {
        this.setState({
            overlay: "overlay",
            modalInicio: "modal",
            buttonCerrar: "inicioCerrarN",
            buttonInicio: "buttonInicioN"
        }) 
    }

    modalProfileNav = ()=> {
        if(this.state.modalProfile === "none") {
            this.setState ({
                modalProfile: "Actionsv2-content",
                modalPublic: "none",
                modalJobs: "none",
                modalBuscar: "none",
                overlayMenu: "overlayActive-menu",
            })
        } else{
            this.setState ({
                modalProfile: "none",
                overlayMenu: "overlay",
            })
        }
    }

    modalPublicNav = ()=> {
        if(this.state.modalPublic === "none") {
            this.setState ({
                modalPublic: "Actionsv2-content",
                modalProfile: "none",
                modalJobs: "none",
                modalBuscar: "none",
                overlayMenu: "overlayActive-menu",
            })
        } else{
            this.setState ({
                modalPublic: "none",
                overlayMenu: "overlay",
            })
        }
    }

    modalJobsNav = ()=> {
        if(this.state.modalJobs === "none") {
            this.setState ({
                modalJobs: "Actionsv2-content",
                modalProfile: "none",
                modalPublic: "none",
                modalBuscar: "none",
                overlayMenu: "overlayActive-menu",
            })
        } else{
            this.setState ({
                modalJobs: "none",
                overlayMenu: "overlay",
            })
        }
    }

    modalBuscarNav = ()=> {
        if(this.state.modalBuscar === "none") {
            this.setState ({
                modalBuscar: "Actionsv2-content",
                modalProfile: "none",
                modalJobs: "none",
                modalPublic: "none",
                overlayMenu: "overlayActive-menu",
            })
        } else{
            this.setState ({
                modalBuscar: "none",
                overlayMenu: "overlay",
            })
        }
    }

    closeModales = ()=> {
        this.setState ({
            modalBuscar: "none",
            modalProfile: "none",
            modalJobs: "none",
            modalPublic: "none",
            overlayMenu: "overlay",
        })
    }

    login = (e)=> {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => {
            window.location.href = '/works'
            console.log(`${result.user.email} ha iniciado sesión`)
            }
        )
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
           
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        
        this.setState({
        [name]: value 
        })
    }


    handleAuth = ()=> {
        const provider = firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`))

    }
    
    handleLogout = ()=> {
        firebase.auth().signOut()
            .then(result => {
                console.log(`${result.user.email} ha salido`)})
            .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    renderLoginButton () {
        //si login
        if (this.state.user) {
            return <React.Fragment>
                <div className="container-block-nav">
                    <div className="wrapper-home">
                        <div className="navForm">
                            <div className="logoN-user">
                                <Link to="/works">
                                    <span style={NetLogo} className="icon-Logo_540"></span>
                                </Link>
                            </div>
                            <div className="nav-flex-login">
                                <div className="container-buttons">
                                    <div className="container-buttons-flex">
                                        < Link to="/works" >
                                            <button className="nonButtonsHeader" ><img alt="icono de homeNet" src={iconHome} width="20px" /></button>
                                        </ Link >
                                        <button className="nonButtonsHeader" onClick={this.modalJobsNav} ><img alt="icono de jobsNet" src={iconJobs} width="20px" /></button>
                                        <button className="nonButtonsHeader-search" onClick={this.modalBuscarNav} ><img alt="icono de jobsNet" src={iconSearch} width="20px" /></button>
                                        <button className="nonButtonsHeader" onClick={this.modalPublicNav} ><img alt="icono de jobsNet" src={iconPublic} width="20px" /></button>
                                        <button className="nonButtonsHeader" onClick={this.modalProfileNav} ><img alt="icono de jobsNet" src={iconProfile} width="20px" /></button>
                                    </div>
                                    <div className={this.state.modalProfile}>
                                        <div className="box-options">
                                            <p className="title-modal-nav">
                                                Hola, {this.state.user.displayName}
                                            </p>
                                            <hr></hr>
                                            <Link to="/condiciones-de-uso">
                                                <button style={iconTerminos} className="buttonMenu">Términos y condiciones</button>
                                            </Link>
                                            <button className="cerrar-sesion" onClick={this.handleLogout}>Cerrar Sesión</button>
                                        </div>  
                                    </div>
                                    <div className={this.state.modalBuscar}>
                                        <div className="box-options">
                                            <h2>
                                                Buscar trabajos
                                            </h2>
                                            <hr></hr>
                                            <input style={searchIcon} 
                                                className="formInput-search" 
                                                type="text"
                                                name="profesionSearch"
                                                placeholder="Cargo" />
                                            <input style={searchIcon} 
                                                className="formInput-search" 
                                                type="text"
                                                name="profesionSearch"
                                                placeholder="Ciudad" />
                                            <button className="button-siguiente">Buscar</button>
                                        </div>  
                                    </div>
                                    <div onClick={this.closeModales} className={this.state.overlayMenu} id="overlay"></div>
                                    <div className={this.state.modalPublic}>
                                        <div className="box-options">
                                            <p className="title-modal-nav">
                                                ¿Necesitas un servicio?
                                            </p>
                                            <hr></hr>
                                            <Link to="/my-publications">
                                                <button style={iconPublicacionesNet} className="buttonMenu">Mis publicaciones</button>
                                            </Link>
                                            <Link to="/publicar-trabajo">
                                                <button style={iconPublica} className="buttonMenu">Publica un trabajo</button>
                                            </Link>
                                        </div>  
                                    </div>
                                    <div className={this.state.modalJobs}>
                                        <div className="box-options">
                                            <p className="title-modal-nav">
                                                Mis trabajos
                                            </p>
                                            <hr></hr>
                                            <Link to="/home">
                                                <button style={iconPublicacionesNet} className="buttonMenu">Guardados</button>
                                            </Link>
                                            <Link to="/publicar-trabajo">
                                                <button style={iconPublica} className="buttonMenu">Mis aplicaciones</button>
                                            </Link>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        } else {
        //no login
            return <React.Fragment>
                <div className="container-block-nav-inicio">
                    <div className="wrapper-home">
                        <div className="menuN">
                            <div className="logoN">
                                <Link to="/">
                                    <span style={NetLogo} className="icon-Logo_net540"></span>
                                </Link>
                            </div>
                            <div className="nav-flex">
                                <span>
                                    <Link to="/aboutUs">
                                        <button className="buttonConocenosN" type="button">Conócenos</button>
                                    </Link>
                                </span>
                                <span>
                                    <button onClick={this.abrirModalInicio} className={this.state.buttonInicio} type="button">Ingresar</button>  
                                </span>  
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={this.cerrarModalInicio} className={this.state.overlay} id="overlay"></div>
                
                <div className={this.state.modalInicio}>
                        <div className="titleRegistro-inicio-sesion">
                            <div className="title-modal-inicio">
                                <h2>Iniciar Sesión</h2>
                            </div>
                            <div className="button-flex-end">
                                <span onClick={this.cerrarModalInicio} className="icon-Logo_equis"></span>
                            </div>
                        </div>
    
                        <form className="formRegitreInicio">
                            
                            <input
                                value={this.state.email}
                                onChange={this.handleChange} 
                                className="spaceFormInicio" 
                                type="email" 
                                name="email" 
                                placeholder="Correo Electrónico"
                                id="inputEmail" 
                                size="40" required/>
                            
                            <input
                                value={this.state.password}
                                onChange={this.handleChange} 
                                className="spaceFormInicio" 
                                type="password" 
                                name="password"
                                id="inputPassword" 
                                placeholder="Contraseña" required />
                                
                            <div className="login">
                                {/* <Link to="/barrainteractiva"> */}
                                    <button onClick={this.login} className="buttonIniciar" type="submit">Acceder</button>
                                {/* </Link> */}
                                <Link to="/recuperar-contraseña">
                                    <button className="buttonOlvido" type="button">Olvidé mi contraseña</button>
                                </Link>
                            </div>
                        </form>
                        <hr className="line-login" data-content="or"></hr>
                        <div className="div-buttons-auth">
                            <button style={iconGoogle} className="google-auth" onClick={this.handleAuth} type="buttton">Continuar con Google</button>
                            <button style={iconFacebook} className="facebook-auth" onClick={this.handleAuth} type="buttton">Continuar con Facebook</button>
                            <button style={iconLinked} className="linkedin-auth" onClick={this.handleAuth} type="buttton">Continuar con Linkedin</button>
                        </div>
                        <div>
                            <p>¿Eres nuevo en Net540? < Link to="/registro-net"> Regístrate ahora</Link></p>
                        </div>
                    </div>
                
            </React.Fragment>
        }  
    }

    render() {
        return <React.Fragment>
            <div>
                {this.renderLoginButton()}
            </div>
        </React.Fragment>
        }
    }

export default NavBar;