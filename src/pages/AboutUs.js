import React from "react";

import Footer from '../components/footer.js'

//aqui estamos llamando los estilos del AboutUs
import '../globalStyles.css'
import '../components/styles/AboutStyles.css'
import '../components/styles/popRegistro.css'

// aqui estamos llamando los componentes de AboutUs
import NavBar from "../components/NavBar";
import HeroAboutUs from '../components/heroAboutUs'
import HowFuntion from '../components/HowFuntion.js'
import Quien from '../components/QuienSC.js'
import Comenzar from '../components/FormularioRegistro/comenzemos'

// gif de loading
import loader from '../images/loader.gif'


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
        return <React.Fragment>
            <section className={this.state.blur}>
            
            {this.state.isLoading ? <div><img alt="loader de net" src={loader}/></div> : 
            <div className="wrapper-border">
                <div>
                    <div>
                        <NavBar/>
                    </div>
                    
                    { !this.state.user &&
                    <div>
                        <div>
                            <HeroAboutUs/>
                        </div>

                        <div>
                            <HowFuntion/>
                        </div>

                        <div>
                            <Quien />
                        </div>
                    </div>}
                    { this.state.isLoading ? <div><img src={loader}/></div> : 
                            this.state.user &&
                                < Comenzar user={this.state.user} />
                            
                        }

                    { !this.state.user &&
                        <Footer/>
                    }

                </div>
            </div>
            }

            </section>
            
        </React.Fragment>
    }
}

export default AboutUs;