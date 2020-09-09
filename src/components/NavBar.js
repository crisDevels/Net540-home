import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

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

var NetLogo = {
    color: "#1DAEFF",
}


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalInicio: "modal",
            overlay: "overlay",
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

    login = (e)=> {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => console.log('${result.user.email} ha iniciado sesión'))
        .catch(error => console.log('Error ${error.code}: ${error.message}'))
           
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        
        this.setState({
        [name]: value 
        })
    }


    handleAuth = ()=> {
        const provider = new firebase.auth .GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log('${result.user.email} ha iniciado sesión'))
            .catch(error => console.log('Error ${error.code}: ${error.message}'))

    }
    
    handleLogout = ()=> {
        firebase.auth().signOut()
            .then(result => console.log('${result.user.email} ha salido'))
            .catch(error => console.log('Error ${error.code}: ${error.message}'))
    }

    renderLoginButton () {
        //si login
        if (this.state.user) {
            return <React.Fragment>
                <div className="container-block-nav">
                    <div className="wrapper-home">
                        <div className="navForm">
                            <div className="logoN">
                                <Link to="/">
                                    <span style={NetLogo} className="icon-Logo_540"></span>
                                </Link>
                            </div>
                            <div className="nav-flex">
                                <div className="container-buttons">
                                    < Link to="/" >
                                        <button className="cerrar-sesion" onClick={this.handleLogout}>Cerrar Sesión</button>
                                    </ Link >
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
                                    <input onClick={this.login} className="buttonIniciar" type="submit" value="ACCEDER"/>
                                {/* </Link> */}
                                <Link to="/recuperar-contraseña">
                                    <input className="buttonOlvido" type="button" value="Olvidé mi contraseña" />
                                </Link>
                            </div>
                            <hr className="line-login" data-content="or"></hr>
                            <div className="div-buttons-auth">
                                <button style={iconGoogle} className="google-auth" onClick={this.handleAuth} type="buttton">Continuar con Google</button>
                                <button style={iconFacebook} className="facebook-auth" onClick={this.handleAuth} type="buttton">Continuar con Facebook</button>
                                <button style={iconLinked} className="linkedin-auth" onClick={this.handleAuth} type="buttton">Continuar con Linkedin</button>
                            </div>
                        </form>
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