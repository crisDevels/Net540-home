import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
// import { useUser } from 'reactfire';
// import firebaseApp from '../config/firebase';

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

import Comenzar from '../components/FormularioRegistro/comenzemos'

import AboutUs from '../pages/AboutUs'
import Home from '../pages/home'

import logo from "../images/logoNet.png"
import logoB from "../images/logoNetB.png"
import logoA from "../images/LOGO-NET540A.png"
import logoSesion from "../images/logoSesion.png"
import load from '../images/loader.gif'

import googleIcon from '../images/googleIcono.png'

import '../fonts/style.css'

var iconGoogle = {
    width: "100%",
    backgroundImage: "url("+ googleIcon + ")"
  };

var NetLogo = {
    color: "#1DAEFF",
}

// const user = useUser();

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // loading: true,
            // error: null,
            modalInicio: "modal",
            buttonCerrar: "inicioCerrarN",
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
            modalInicio: "modalInicioActive",
            buttonCerrar: "buttonInicioCerrarN",
            buttonInicio: "buttonInicioDesactiveN"
        }) 
    }

    cerrarModalInicio = ()=> {
        this.setState({
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
            </React.Fragment>
        } else {
        //no login
            return <React.Fragment>
                <div className="container-block-nav-inicio">

                    <div className="menuN">
                        <div className="logoN">
                            <Link to="/"><img src={logoA} width="100px" alt="Logo de net540"/></Link>
                        </div>
                        <div className="nav-flex">
                            <span>
                                <Link to="/aboutUs">
                                    <input className="buttonConocenosN" type="button" value="CONÓCENOS"></input>
                                </Link>
                            </span>
                            <span>
                                <input onClick={this.abrirModalInicio} className={this.state.buttonInicio} type="button" value="INGRESAR"></input>
                                <input onClick={this.cerrarModalInicio} className={this.state.buttonCerrar} type="button" value="CERRAR"></input>  
                            </span>  
                        </div>
                    </div>

                </div>

                <div className={this.state.modalInicio}>
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
                            <button style={iconGoogle} className="google-auth" onClick={this.handleAuth} type="buttton">Continuar con Google</button>
                        </form>
                    </div>
                
            </React.Fragment>
        }
        
    }

    render() {
        return <React.Fragment>

                <div>
                {/* {this.state.loading &&
                <div>
                    <img src={load}/>
                </div>
                } */}
                {this.renderLoginButton()}
                </div>
                

                </React.Fragment>
        }
    }

export default NavBar;