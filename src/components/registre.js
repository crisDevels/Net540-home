import React from 'react';

import './styles/registreStyles.css'
import './styles/popRegistro.css'
import '../components/styles/popRegistro.css'

class Registre extends React.Component {

      render() {
        return <div>
            <span className="boxRegistre">
               <img src={this.props.imagenFreelancer} alt={"image registre " + this.props.buttonRegistre} width="320px" />
               <input type="button" value={this.props.buttonRegistre} className="buttonRegistre"/>
            </span>

        </div>
    }
}

export default Registre;