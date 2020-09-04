import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import NavBar from '../NavBar';

import './stylesForm/formStyles.css';

import loader from './images/loader.gif';
import circle from './images/EllipseAdvance.svg';
import circleBlue from './images/EllipseBlue.svg';
import buttonOn from './images/Button-on.gif';

import GeneralVacant from './FormulariosComponents/generalVacant';
import DescriptionVacant from './FormulariosComponents/descriptionVacant';
import MoreDescription from './FormulariosComponents/moreDescriptionVacant';
import Benefits from './FormulariosComponents/benefitsVacant.js';
import MyVacant from './FormulariosComponents/myVacant.js';



function VacantForm() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [general, setGeneral] = useState('blockGeneral');
    const [descriptionVacant, setDescriptionVacant] = useState('none');
    const [moreDescription, setMore] = useState('none');
    const [benefits, setBenefits] = useState('none');
    const [myVacant, setMyVacant] = useState('none');

    // función para que el usuario avance a la descripción de la vacante
    const toDescriptionVacant = ()=> {
        setGeneral('none')
        setDescriptionVacant('blockDescription-vacant')
        setMore('none')
        setBenefits('none')
        setMyVacant('none')
    }
    // función para que el usuario retorceda a la descripción de la vacante
    const backGeneral = ()=> {
        setGeneral('blockGeneral')
        setDescriptionVacant('none')
        setMore('none')
        setBenefits('none')
        setMyVacant('none')
    }
    
    const toMoreDescription = ()=> {
        setGeneral('none')
        setDescriptionVacant('none')
        setMore('moreBlock')
        setBenefits('none')
        setMyVacant('none')
    }
    
    const backDescription = ()=> {
        setDescriptionVacant('blockDescription-vacant')
        setMore('none')
    }

    const toBenefits = ()=> {
        setGeneral('none')
        setDescriptionVacant('none')
        setMore('none')
        setBenefits('benefitsBlock')
        setMyVacant('none')
    }

    const backMore = ()=> {
        setMore('moreBlock')
        setBenefits('none')
    }

    const toMyVacant = ()=> {
        setGeneral('none')
        setDescriptionVacant('none')
        setMore('none')
        setBenefits('none')
        setMyVacant('myVacantBlock')
    }

    const backBenefits = ()=> {
        setBenefits('benefitsBlock')
        setMyVacant('none')
    }

    // Autentificación del usuario en formulario empresas

    firebase.auth().onAuthStateChanged(user => {
        setUser(user)
        setLoading(false)
    })

    return <React.Fragment>
        {loading ? <div><img src={loader}/></div> : 
            <div>
                <NavBar/>
                
                {user && 
                    <div className="block-center">
                        <form>
                            <div className="wrapper-form">
                                <div className={general}>
                                    <div className="block-container">
                                        <div className="flex-component">
                                            <div className="container-flex">
                                                <div className="blockAdvance">
                                                    <div className="circleAdvance">
                                                        <img onClick={backGeneral} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toDescriptionVacant} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMoreDescription} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toBenefits} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMyVacant} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <GeneralVacant />
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button type="button" className="button-regresar">Regresar</button>
                                                <button onClick={toDescriptionVacant} type="button" className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className={descriptionVacant}>
                                    <div className="block-container">
                                        <div className="flex-component">
                                            <div className="container-flex">
                                                <div className="blockAdvance">
                                                    <div className="circleAdvance">
                                                        <img onClick={backGeneral} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toDescriptionVacant} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMoreDescription} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toBenefits} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMyVacant} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <DescriptionVacant/>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button onClick={backGeneral} type="button" className="button-regresar">Regresar</button>
                                                <button onClick={toMoreDescription} type="button" className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className={moreDescription}>
                                    <div className="block-container">
                                        <div className="flex-component">
                                            <div className="container-flex">
                                                <div className="blockAdvance">
                                                    <div className="circleAdvance">
                                                        <img onClick={backGeneral} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toDescriptionVacant} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMoreDescription} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toBenefits} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMyVacant} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <MoreDescription />
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button onClick={backDescription} type="button" className="button-regresar">Regresar</button>
                                                <button onClick={toBenefits} type="button" className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className={benefits}>
                                    <div className="block-container">
                                        <div className="flex-component">
                                            <div className="container-flex">
                                                <div className="blockAdvance">
                                                    <div className="circleAdvance">
                                                        <img onClick={backGeneral} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toDescriptionVacant} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMoreDescription} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toBenefits} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMyVacant} className={circle} alt="advance" src={circle} width="10px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <Benefits/>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button onClick={backMore} type="button" className="button-regresar">Regresar</button>
                                                <button onClick={toMyVacant} type="button" className="button-siguiente">Siguiente</button>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className={myVacant}>
                                    <div className="block-container">
                                        <div className="flex-component">
                                            <div className="container-flex">
                                                <div className="blockAdvance">
                                                    <div className="circleAdvance">
                                                        <img onClick={backGeneral} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toDescriptionVacant} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMoreDescription} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toBenefits} className={circle} alt="advance" src={circleBlue} width="10px"/>
                                                    </div>
                                                    <div className="circleAdvance">
                                                        <img onClick={toMyVacant} className={circle} alt="advance" src={buttonOn} width="30px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <MyVacant/>
                                        </div>
                                        <div className="buttons-flex">
                                            <div>
                                                <button onClick={backBenefits} type="button" className="button-regresar">Regresar</button>
                                                <button type="button" className="button-siguiente">Enviar</button>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                {!user && 
                    <div>
                        Registrate <Link to='/'>aquí</Link>
                    </div>
                }
                
            </div>
        }
    </React.Fragment>
}

export default VacantForm;