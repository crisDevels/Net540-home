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


import './styles/howStyles.css'

class HowFuntion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ButtonIndependiente: "buttonActive",
            ButtonEmpresa: "buttonDesactive",
            BlockIndependiente: "independiente",
            BlockEmpresa: "empresaDesactive",
            tweetUno: "tweetUnoActive",
            line: "lineDesactive",
            icon: "iconComoActive",
            swift: "swiftDesactive",
            cerrarSw: "cerrarDesactive",
            abrirSw: "abrirActive"
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

    abrirSwift = ()=> {
        this.setState({
            swift: "swiftActive",
            cerrarSw: "cerrarActive",
            abrirSw: "abrirDesactive",
            line: "lineActive",
        })
    }

    cerrarSwift = ()=> {
        this.setState({
            swift: "swiftDesactive",
            cerrarSw: "cerrarDesactive",
            abrirSw: "abrirActive",
            line: "lineDesactive"
        })
    }

    render() {
        return <div className="howgran">
            <div className="titleComo">
            {/* <div className="blockTitle">
                <img src={AdornoComofuncionaIzquierda} width="150px"></img>
            </div> */}
            <div className="blockTitle">
            <h2>¿Cómo funciona?</h2>
            <div>
                <button onClick={this.abrirIndependientes} className={this.state.ButtonIndependiente}>INDEPENDIENTES</button>
                <button onClick={this.abrirEmpresa} className={this.state.ButtonEmpresa}>EMPLEADOR</button>
            </div>
            </div>
            {/* <div className="blockTitle">
                <img src={AdornoComofuncionaDerecha} width="150px"></img>
            </div> */}
            </div>
            <div className={this.state.BlockIndependiente}>
            <div className="pasoApaso">
                <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={candidatoUno} width="50px"/>
                    </div>
                    <h2>01</h2>
                    <h3>Regístrate</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Crea tu perfil y vúelvete
                    visible para las empresas</p>
                    </div>
                    
            </div>
            <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={candidatoDos} width="50px"/>
                    </div>
                    <h2>02</h2>
                    <h3>Sube tu CV</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Tu hoja de vida genera un 61% más 
                        de confianza en tu perfil</p>
                    </div>
                    
            </div>
            <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={candidatoTres} width="50px"/>
                    </div>
                    <h2>03</h2>
                    <h3>Adquiere cupones</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Invierte en Net540 
                        para conseguir mejores ofertas laborales</p>
                    </div>
                    
            </div>
            <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={candidatoCuatro} width="50px"/>
                    </div>
                    <h2>04</h2>
                    <h3>Comparte</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Aporta valor a trabajadores 
                    independientes y a nuevas empresas</p>
                    </div>
                   
            </div>
            <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={candidatoCinco} width="50px"/>
                    </div>
                    <h2>05</h2>
                    <h3>Crea tu red</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Conecta con profesionales que empaticen contigo y 
                    crea contenido en comunidad</p>
                    </div>
                    
            </div>
            </div>
            <hr className={this.state.line}></hr>
            <button onClick={this.abrirSwift} className={this.state.abrirSw}>VER MÁS</button>
            <button onClick={this.cerrarSwift} className={this.state.cerrarSw}>CERRAR</button>
            {/* <div className="content">
            <span className="Option">
                <p>¿Buscas Trabajo?</p>
            </span>
            </div> */}
            </div>
            <div className={this.state.BlockEmpresa}>
            <div className="pasoApaso">
                <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={empresaUno} width="50px"/>
                    </div>
                    <h2>01</h2>
                    <h3>Regístrate</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Publica tu empresa y haz que nuestra comunidad te reconozca</p>
                    </div>
                </div>
                <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={empresaDos} width="50px"/>
                    </div>
                    <h2>02</h2>
                    <h3>Actuliza tu perfil</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Tus seguidores se enteran de actualizaciones en tu feed</p>
                    </div>
                </div>

                <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={empresaTres} width="50px"/>
                    </div>
                    <h2>03</h2>
                    <h3>Tu anuncio de empleo</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Comunidad de freelancers y profesionales comprometida y apasionada</p>
                    </div>
                </div>

                <div className="paso">
                    <div onClick={this.abrirSwift} className="border">
                    <div className="iconComo">
                        <img src={empresaCuatro} width="50px"/>
                    </div>
                    <h2>03</h2>
                    <h3>Nuevos socios</h3>
                    </div>
                    <div className={this.state.swift}>
                    <p className="textActive">Aleación B2B para fortalecer relaciones internas y externas</p>
                    </div>
                </div>

            </div>
            <hr className={this.state.line}></hr>
            <button onClick={this.abrirSwift} className={this.state.abrirSw}>VER MÁS</button>
            <button onClick={this.cerrarSwift} className={this.state.cerrarSw}>CERRAR</button>
            {/* <div className="content">
            <label className="Option">
                <p>¿Estás Contratando?</p>
            </label>
            </div> */}
            </div>
        </div>
    }
}

export default HowFuntion;