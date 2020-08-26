import React, {useRefs} from 'react';

import '../components/styles/popRegistro.css'
import registroImage from '../images/RegistroILU.png'
import cerrar from '../images/CERRAR.png'

function Modal(){
    
    return (
        <div>
            <div className="modal">
            <div>
                <img src={registroImage} width="300px" alt="Ilustración de registro" />
            </div>
            <div>
                <div className="titleRegistro">
                    <h2>REGISTRO</h2>
                    <div className="spaceTitleRegistro"></div>
                    <img className="buttonCerrar" src={cerrar} width="10px" alt="boton cerrar" />
                </div>
                <form className="formRegitre">
                    <input className="spaceForm" type="text" name="Nombres" placeholder="Nombres" size="40" required/>
                    <input className="spaceForm" type="text" name="Apellidos" placeholder="Apellidos" size="40" required/>
                    <input className="spaceForm" type="text" name="Email" placeholder="Correo Electrónico" size="40" required/>
                    <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required minlength="8" required />
                    <input className="spaceForm" type="date" id="start" placeholder="Fecha de nacimiento" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                    <input className="buttonRegistrar" type="submit" value="Registrar" />
                </form>
            </div>
        </div>
        </div>
    )
}

export default Modal;