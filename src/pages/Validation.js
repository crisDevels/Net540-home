import React from 'react';

import './styles/forgetStyles.css'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

import ImagenILU from '../images/RECUPERACION.svg'


class Validation extends React.Component {
    render () {
        return <React.Fragment>
            <div className="wrapper-border">
                <div>
                    <NavBar />
                </div>
                <div className="backgroundHome">
                    <div className="pageOlvido">
                        <div className="container-content">
                            <h1>Olvidé mi contraseña</h1>
                            <p>Hemos enviado un correo a la cuenta de <strong>ejemplo@gmail.com</strong>, con instruciones
                            para recuperar tu contraseña.
                            </p>
                            <p className="nota">*Recuerda revisar tu bandeja de <strong>correo no deseado</strong> o <strong>Spam</strong></p>
                            <div className="container-dos">
                                <img alt="ilustración de validación" className="ilustración-validación" src={ImagenILU} />  
                            </div>
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Validation;