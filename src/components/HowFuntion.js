import React from 'react';

import AdornoQuien from '../images/BarraILU.png'
import AdornoComofuncionaIzquierda from '../images/LapizDER.png'
import AdornoComofuncionaDerecha from '../images/LapizDERR.png'

import candidatoUno from '../images/Candidato-boton-1.png'
import candidatoDos from '../images/Candidato-boton-2.png'
import candidatoTres from '../images/Candidato-boton-3.png'
import candidatoCuatro from '../images/Candidato-boton-4.png'
import candidatoCinco from '../images/Candidato-boton-5.png'

import empresaUno from '../images/Empleador-boton-1.png'
import empresaDos from '../images/Empleador-boton-2.png'
import empresaTres from '../images/Empleador-boton-3.png'
import empresaCuatro from '../images/Empleador-boton-4.png'

import cerrar from '../images/ARROWup.png'
import arrow from '../images/ARROW.png'

// Se importa la fuente iconográfica
import '../fonts/style.css'


import './styles/howStyles.css'

var colorIcon = {
    color: "white",   
}

class HowFuntion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ButtonIndependiente: "buttonActive",
            ButtonEmpresa: "buttonDesactive",
            BlockIndependiente: "independiente",
            BlockEmpresa: "empresaDesactive"
        }
    }

    abrirIndependientes = ()=> {
        this.setState({
            BlockIndependiente: "independiente",
            BlockEmpresa: "empresaDesactive",
            ButtonIndependiente: "buttonActive",
            ButtonEmpresa: "buttonDesactive"
        })
    }

    abrirEmpresa = ()=> {
        this.setState({
            BlockIndependiente: "independienteDesactive",
            BlockEmpresa: "empresa",
            ButtonIndependiente: "buttonDesactive",
            ButtonEmpresa: "buttonActive"
        })
    }


    render() {
        return <React.Fragment>
        <div className="howgran">
            <div className="titleComo">
    
                <div className="blockTitle">
                    <h2>¿Cómo funciona?</h2>
                    <div>
                        <button onClick={this.abrirIndependientes} className={this.state.ButtonIndependiente}>INDEPENDIENTES</button>
                        <button onClick={this.abrirEmpresa} className={this.state.ButtonEmpresa}>EMPLEADOR</button>
                    </div>
                </div>
            
            </div>
            <div className={this.state.BlockIndependiente}>
            
            <div className="pasoApaso">
                <div className="paso">
                    <div className="border">
                        <div className="iconComo">
                            <span style={colorIcon} className="icon-Logo_registrate"></span>
                        </div>
                        <h2>01</h2>
                    </div>

                    <div className="swiftActive">
                    <h3>Regístrate</h3>
                        <p className="textActive">Crea tu perfil y vúelvete
                        visible para las empresas</p>
                    </div> 
                </div>
                <div className="paso">
                    <div className="border">
                        <div className="iconComo">
                            <span style={colorIcon} className="icon-Logo_sube-tu-hoja-de-vida"></span>
                        </div>
                        <h2>02</h2>
                    </div>
                    
                    <div className="swiftActive">
                    <h3>Sube tu CV</h3>
                        <p className="textActive">Tu hoja de vida genera un 61% más 
                        de confianza en tu perfil</p>
                    </div> 
                </div>
                <div className="paso">
                    <div className="border">
                        <div className="iconComo">
                            <span style={colorIcon} className="icon-Logo_cupones_varios"></span>
                        </div>
                        <h2>03</h2>
                    </div>

                    <div className="swiftActive">
                    <h3>Adquiere cupones</h3>
                        <p className="textActive">Invierte en Net540 
                        para conseguir mejores ofertas laborales</p>
                    </div>       
                </div>
                <div className="paso">
                    <div className="border">
                        <div className="iconComo">
                            <span style={colorIcon} className="icon-Logo_comparte"></span>
                        </div>
                        <h2>04</h2>
                    </div>

                    <div className="swiftActive">
                    <h3>Comparte</h3>
                        <p className="textActive">Aporta valor a trabajadores 
                        independientes y a nuevas empresas</p>
                    </div>      
                </div>
                <div className="paso">
                    <div className="border">
                        <div className="iconComo">
                            <span style={colorIcon} className="icon-Logo_crea-tu-red"></span>
                        </div>
                        <h2>05</h2>
                    </div>

                    <div className="swiftActive">
                    <h3>Crea tu red</h3>
                        <p className="textActive">Conecta con profesionales que empaticen contigo y 
                        crea contenido en comunidad</p>
                    </div>  
                </div>
            </div>
            
            </div>

            <div className={this.state.BlockEmpresa}>
                <div className="pasoApaso">
                    <div className="paso">
                        <div className="border">
                            <div className="iconComo">
                                <span style={colorIcon} className="icon-Logo_documento"></span>
                            </div>
                            <h2>01</h2>
                        </div>

                        <div className="swiftActive">
                        <h3>Regístrate</h3>
                            <p className="textActive">Publica tu empresa y haz que nuestra comunidad te reconozca</p>
                        </div>
                    </div>
                    <div className="paso">
                        <div className="border">
                            <div className="iconComo">
                                <span style={colorIcon} className="icon-Logo_maletin"></span>
                            </div>
                            <h2>02</h2>
                        </div>

                        <div className="swiftActive">
                        <h3>Actuliza tu perfil</h3>
                            <p className="textActive">Tus seguidores se enteran de actualizaciones en tu feed</p>
                        </div>
                    </div>
                    <div className="paso">
                        <div className="border">
                            <div className="iconComo">
                                <span style={colorIcon} className="icon-Logo_maletin"></span>
                            </div>
                            <h2>03</h2>
                        </div>

                        <div className="swiftActive">
                        <h3>Tu anuncio de empleo</h3>
                            <p className="textActive">Comunidad de freelancers y profesionales comprometida y apasionada</p>
                        </div>
                    </div>
                    <div className="paso">
                        <div className="border">
                            <div className="iconComo">
                                <span style={colorIcon} className="icon-Logo_maletin"></span>
                            </div>
                            <h2>04</h2>  
                        </div>

                        <div className="swiftActive">
                        <h3>Nuevos socios</h3>
                            <p className="textActive">Aleación B2B para fortalecer relaciones internas y externas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    }
}

export default HowFuntion;