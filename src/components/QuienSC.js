import React from 'react';

import barras from '../images/ILUSTRACION-MANOS.gif'
import './styles/QuienStyles.css'

class Quien extends React.Component {
    render () {
        return <div>
            <div className="quienSomos">
                <div className="CenterContent">
                <div className="imagenQuien">
                   <img src={barras} width='400px'/>
                </div>
        
            
                <div className="textQuien">
                    <h2>¿Quiénes somos?</h2>
                    <p>Net540 surge en Abril del año 2020 
                        en respuesta a una gran crisis 
                        económica que se ha estado dando 
                        en el transcurso del mismo año que 
                        fue creada. Net540 se constituye 
                        con varios socios con el fin de 
                        enfrentar la gran tasa de desempleo 
                        en Colombia y a con el propósito de 
                        enfrentarla a nivel Latinoamérica.</p>
                </div>
                </div>
            </div>
        
        </div>
    }
}

export default Quien;