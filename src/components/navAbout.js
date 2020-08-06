import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navStylesAbout.css'
import './styles/popRegistro.css'

import logo from "../images/logoNet.png"
import logoB from "../images/logoNetB.png"
import logoA from "../images/LOGO-NET540A.png"

class NavAbout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalInicio: "modal",
            buttonCerrar: "inicioCerrar",
            buttonInicio: "buttonInicio"
        }
    }

    abrirModalInicio = ()=> {
        this.setState({
            modalInicio: "modalInicioActive",
            buttonCerrar: "buttonInicioCerrar",
            buttonInicio: "buttonInicioDesactive"
        }) 
    }

    cerrarModalInicio = ()=> {
        this.setState({
            modalInicio: "modal",
            buttonCerrar: "inicioCerrar",
            buttonInicio: "buttonInicio"
        }) 
    }

    render() {
        return <div className="menu">
                    <div className="logo">
                    <Link to="/"><img src={logoB} width="100px" alt="Logo de net540"/></Link>
                    </div>
                    <div className="spaceMenu"></div>
                    <span>
                        <Link to="/aboutUs">
                        <input className="buttonConocenos" type="button" value="CONÓCENOS"></input>
                        </Link>
                        </span>
                    <span>
                        <input onClick={this.abrirModalInicio} className={this.state.buttonInicio} type="button" value="INGRESAR"></input>
                        <input onClick={this.cerrarModalInicio} className={this.state.buttonCerrar} type="button" value="CERRAR"></input>
                    </span>
                    <div className={this.state.modalInicio}>
                    <form className="formRegitreInicio">
                    <input className="spaceFormInicio" type="email" name="Email" placeholder="Correo Electrónico" size="40" required/>
                    <input className="spaceFormInicio" type="password" name="password" placeholder="Contraseña" required />
                    <div className="login">
                        <Link to="/barrainteractiva">
                        <input className="buttonIniciar" type="submit" value="ACCEDER" />
                        </Link>
                        <Link to="/recuperar-contraseña">
                            <input className="buttonOlvido" type="button" value="Olvidé mi contraseña" />
                        </Link>
                    </div>
                    </form>
                </div>
                </div>
                
        }
    }

export default NavAbout;