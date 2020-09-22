import React from 'react';

import loaderSencillo from '../../images/loader.gif';

import '../styles/navStyles.css'
import '../FormularioRegistro/stylesForm/formStyles.css'

class Comenzar extends React.Component {

    render() {
        return <React.Fragment>
                <div className="container-comenzamos">
                    <div className="block">
                        <div>
                            <div className="loader-flex-comenzar">
                                <div className="loaderS-container">
                                    <img alt="loader-skills" src={loaderSencillo} width="80px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    } 
}

export default Comenzar;