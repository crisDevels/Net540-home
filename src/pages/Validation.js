import React from 'react';
import { Link } from 'react-router-dom';

import './styles/forgetStyles.css'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

import ImagenILU from '../images/ILUSTRACION-PRUEBA-1.gif'

import ImagenBackground from '../images/BackgroundILU.png'

var sectionBackground = {
    width: "100%",
    backgroundImage: "url("+ ImagenBackground + ")"
  };

class Validation extends React.Component {
    render () {
        return <React.Fragment>
            <div style={sectionBackground} className="backgroundHome">
            <div className="opacity">
                <div className="pageOlvido">
                    {/* <div className="container">
                        <NavBar />
                    </div> */}
                    <div className="container-content">
                        
                        <h1>Olvidé mi contraseña</h1>
                        <p>Hemos enviado un correo a la cuenta de <strong>ejemplo@gmail.com</strong>, con instruciones
                        para recuperar tu contraseña.
                        </p>
                        <p className="nota">*Recuerda revisar tu bandeja de <strong>correo no deseado</strong> o <strong>Spam</strong></p>
                        <div className="container-dos">
                            <Link to="/">
                                <button className="buttonRegresar" type="button" >REGRESAR</button>
                            </Link><br/>
                            <img src={ImagenILU} />  
                        </div>
                    </div>
                    
                    <div className="container">
                        <Footer />
                    </div>
                </div>
                
            </div>
            </div>
        </React.Fragment>
    }
}

export default Validation;