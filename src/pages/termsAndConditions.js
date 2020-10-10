import React from 'react'

import NavBar from '../components/NavBar'

import './styles/conditionsStyles.css'
import '../fonts/style.css'

var colorIconMini = {
    color: "#1DAEFF",  
}

class TermsConditions extends React.Component {
    state = {
        blockTerms: "block-terms-conditions",
        blockConditions: "none",
        itemsBlockConditions: "none",
        itemsBlockTerms: "block",
    }

    clickButtonTerms = ()=> {
            this.setState({
                blockTerms: "block-terms-conditions",
                blockConditions: "none",
                itemsBlockConditions: "none",
                itemsBlockTerms: "block",
            })
    }

    clickButtonConditions = ()=> {
        this.setState({
            blockTerms: "none",
            blockConditions: "block-terms-conditions",
            itemsBlockConditions: "block",
            itemsBlockTerms: "none",
        }) 
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="wrapper-border">
                    < NavBar />

                    <div className="flex-container">
                        <div className="col-20">
                            <div>
                                <button onClick={this.clickButtonTerms} className="button-title-conditions" type="button">Terminos del servicio</button>
                                <div className={this.state.itemsBlockTerms}>
                                    <ul className="list-items-conditions">
                                        <li><a className="item-list-conditions" href="#intro">Introducción</a></li>
                                        <li><a className="item-list-conditions" href="#cuentas">1. Cuentas en Net540</a></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="linea-conditions"></hr>
                            <div>
                                <button onClick={this.clickButtonConditions} className="button-title-conditions" type="button">Condiciones de uso</button>
                                <div className={this.state.itemsBlockConditions}>
                                    <ul className="list-items-conditions">
                                        <li><a className="item-list-conditions" href="#intro">Introducción</a></li>
                                        <li><a className="item-list-conditions" href="#cuentas">1. Cuentas en Net540</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-mini">
                                <div className="socialMedia-mini">
                                    <a href="https://youTube.com/channel/UCm9SvjlV-2Z4cEdlLgGf8TQ"><span style={colorIconMini} className="icon-Logo_youtube"></span></a>
                                    <a href="https://instagram.com/net_540"><span style={colorIconMini} className="icon-Logo_instagram"></span></a>
                                    <a href="https://linkedin.com/company/campaña-540"><span style={colorIconMini} className="icon-Logo_linkedin"></span></a>
                                    <a href="https://facebook.com/net540"><span style={colorIconMini} className="icon-Logo_facebook"></span></a>
                                </div>
                                <div>
                                    <p className="net-logo-footer">Net540 © 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-80">
                            <div className={this.state.blockTerms}>
                                <h2>Terminos del servicios</h2>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p>
                                <h3 id="intro">Introducción</h3>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p>    
                                <h3 id="cuentas">1. Cuentas Net540</h3>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p> 
                            </div>
                            <div className={this.state.blockConditions}>
                                <h2>Condiciones de uso</h2>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p>
                                <h3 id="intro">Introducción</h3>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p>    
                                <h3 id="cuentas">1. Cuentas Net540</h3>
                                <p>Por favor leer este documento y todos los demás acuerdos referenciados y definidos abajo como “términos de servicio” cuidadosamente, estos contienen información importante y se de detallan sus derechos legales, soluciones jurídicas, y obligaciones. Estos incluyen varias limitaciones y exclusiones.</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TermsConditions