import React from 'react';
// import firebase from 'firebase';
import { Link } from 'react-router-dom';

import '../styles/navStyles.css'
import '../FormularioRegistro/stylesForm/formStyles.css'

class Comenzar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comenzar: "block"
        }
    }


    render() {
        return <React.Fragment>
                <div className="container-comenzamos">
                    <div className={this.state.comenzar}>
                        <div className="blockPerfil">
                            <h2 className="title-encuesta">Comencemos</h2>
                            <div className="container-inicio">
                                <p className="texto-inicio">{this.props.user.displayName}, al completar tu perfil das más credibilidad ante los reclutadores</p>
                                <Link to="/skills">
                                    <button type="button" className="button-comenzar">De una</button>
                                </Link>
                            </div>
                        </div>
                        <Link to="/">
                                <button type="button" className="button-omitir">Omitir</button>
                        </Link>
                    </div>
                </div>
        </React.Fragment>
    } 
}

export default Comenzar;