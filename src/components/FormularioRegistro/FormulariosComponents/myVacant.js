import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../stylesForm/PublicationStyle.css'

import typeCompanyImage from '../images/factoryTypeCompany.svg'
import optionsImage from '../images/options.svg'
import ubicationImage from '../images/Ubication.svg'
import dateImage from '../images/date.svg'
import sendImage from '../images/sendPublication.svg'

class MyVacant extends React.Component {
    render() {
        return <React.Fragment>
            <div className="blockForm-general">
                <h2>Visualiza tu vacante</h2>
                <div className="publication">
                    <div className="flex-title-vacant">
                        <div className="div-TypeCompany">
                            <img src={typeCompanyImage} width="30px"/>
                        </div>
                        <div className="title-vacant-general">
                            <p className="titleVacant">Se requiere Ingeniero Mecatrónico</p>
                            <p className="subtitleVacant">Sector Textil y Manufactura / Salario: $2'500.000</p>
                        </div>
                        <div className="option-title-vacant">
                            <img src={optionsImage} height="20px"/>
                        </div>
                    </div>
                    <div className="short-description-vacant">
                        <div>
                            <p>Importante Empresa del sector Textil ubicada en el oriente Antioqueño, requiere para su equipo de trabajo un (1) Ingeniero Mecatrónico, ingeniero de control o ingeniero electrónico, con experiencia mínimo de 6 ( seis) meses en las áreas de procesos productivos. <Link to="/">Ver más...</Link></p>
                        </div>
                    </div>
                    <div className="flex-buttons-vacant">
                        <div className="button-vacant-start">
                            <img className="button-vacant-image" src={ubicationImage} width="20px"/>
                            <p className="button-vacant-p" >Bogotá D.C.</p>
                        </div>
                        <div className="button-vacant">
                            <img className="button-vacant-image" src={dateImage} width="30px"/>
                            <p className="button-vacant-p">Publicado hace 2 horas</p>
                        </div>
                        <div className="button-vacant-end">
                            <img className="button-vacant-image" src={sendImage} width="30px"/>
                            <p className="button-vacant-p">Compartir</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </React.Fragment>
    }
}

export default MyVacant;