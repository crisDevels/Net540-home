import React from "react";

import NavAbout from '../components/navAbout'
import Footer from '../components/footer.js'

import '../globalStyles.css'
import '../components/styles/AboutStyles.css'
import '../components/styles/popRegistro.css'
import registroImage from '../images/RegistroILU.png'
import registroImageEmpresa from '../images/EmpresaILU.png'
import cerrar from '../images/CERRAR.png'

import HowFuntion from '../components/HowFuntion.js'
import Quien from '../components/QuienSC.js'


class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overlay: "overlay",
            modalProfesional: "modal",
            modalEmpresa: "modal",
            modalInicio: "modal",
            blur: "desactiveBlur"
        }
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

    render () {
        return <div>
            <section className={this.state.blur}>
            <div className="page-about">
            <div className="backHERO">
                <div className="container">
                <NavAbout/>
                </div>
                <div className="heroAboutUS">
                    <div className="colOne">
                        <h1>Uniendo Oportunidades</h1>
                        <button onClick={this.abrirModalProfesional} className="buttonHero">¿BUSCAS EMPLEO?</button>
                        <button onClick={this.abrirModalEmpresa} className="buttonHero">¿ESTÁS CONTRATANDO?</button>
                    </div>
                    <div className="colTwo">
                    <iframe className="youtube-player" type="text/html" src="http://www.youtube.com/embed/2WL3scr8cWI" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div>
                <HowFuntion/>
            </div>

            <div>
                <Quien />
            </div>
            <div className="container">
            <Footer/>
            </div>
            </div>
            </section>
            <section>
                <div className={this.state.overlay} id="overlay"></div>
                <div className={this.state.modalProfesional}>
                    <div>
                        <img src={registroImage} className="imageRegistro" width="310px" alt="Ilustración de registro" />
                    </div>
                    <div>
                        <div className="titleRegistro">
                            <h2>REGISTRO</h2>
                            <div className="spaceTitleRegistro"></div>
                                <img className="buttonCerrar" onClick={this.cerrarModal} src={cerrar} width="10px" alt="boton cerrar" />
                            </div>
                            <form className="formRegitre">
                                <input className="spaceForm" type="text" name="Nombres" placeholder="Nombres" size="40" required/>
                                <input className="spaceForm" type="text" name="Apellidos" placeholder="Apellidos" size="40" required/>
                                <input className="spaceForm" type="text" name="Email" placeholder="Correo Electrónico" size="40" required/>
                                <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required />
                                <input className="spaceForm" type="password" name="password" placeholder="Confirmar contraseña" required />
                                <input className="spaceForm" type="date" id="start" placeholder="Fecha de nacimiento" name="trip-start" value="2004-07-22" min="1920-01-01" max="2004-12-31" /><br/>
                                <label className="check"><input type="checkbox" id="cbox1" value="checkbox-politicas" className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label>
                                <input className="buttonRegistrar" type="submit" value="Registrar" />
                            </form>
                    </div>
                </div>
                <div className={this.state.modalEmpresa}>
                    <div>
                        <img src={registroImageEmpresa} className="imageRegistro" width="310px" alt="Ilustración de registro" />
                    </div>
                    <div>
                        <div class="titleRegistro">
                            <h2>REGISTRO</h2>
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
                            <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required />
                            <input className="spaceForm" type="password" name="password" placeholder="Confirmar contraseña" required /><br/>
                            <label className="check"><input type="checkbox" id="cbox1" value="checkbox-politicas" className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label>
                            <input className="buttonRegistrar" type="submit" value="Registrar" />
                        </form>
                    </div> 
                </div>
                
            </section>
        </div>
    }
}

export default AboutUs;