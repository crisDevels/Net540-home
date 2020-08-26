import React, { useRef } from 'react';

import './styles/registreStyles.css'
import './styles/popRegistro.css'
// import Modal from './Modal'
import '../components/styles/popRegistro.css'
import registroImage from '../images/RegistroILU.png'
import cerrar from '../images/CERRAR.png'


class Registre extends React.Component {

      render() {
        return <div>
            <span className="boxRegistre">
               <img src={this.props.imagenFreelancer} width="320px" />
               <input type="button" value={this.props.buttonRegistre} className="buttonRegistre"/>
            </span>

        </div>
    }
}

export default Registre;