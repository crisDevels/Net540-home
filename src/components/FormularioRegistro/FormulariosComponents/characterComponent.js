import React, { useState } from 'react'

import '../stylesForm/characterStyles.css'
import plusImage from '../images/plus.svg'
import boletinImage from '../images/boletin.svg'

function CharacterComponent(props) {
    // const [conteo, setConteo] = useState(1);
    const [conteoViñeta, setConteoViñeta] = useState(1);
    const [newCharacter, setNewCharacter] = useState(
            <div>
                <button className="add-add" onClick={()=>{
                    setNewCharacter(
                        <div>
                            <div>
                                <input 
                                type="text" 
                                className="input-no-styles-character-title" 
                                list="more-description" 
                                placeholder="Agrega un título" 
                                name={"moreDescriptionTitle2" + props.conteo}/><br/>
                                <datalist id="more-description">
                                    <select>
                                        <option>Requerimientos de la vacante</option>
                                        <option>Funciones generales</option>
                                        <option>Otros beneficios</option>
                                    </select>
                                </datalist>
                            </div>
                            <div className="label-description-requerid">
                                <div className="input-text-character">
                                    {textInput}    
                                </div>
                                {/* <textarea 
                                className="input-no-styles-characters" 
                                type="text"
                                name={"moreDescription" + conteo} 
                                placeholder="Más información sobre..."></textarea> */}
                                <div className="centerButton">
                                    <button type="button" className="button-viñeta" onClick={plusRequerid}><img src={plusImage} width="15px"/></button>
                                </div>
                                <div className="centerButton">
                                    {buttonBorrar}
                                </div>
                            </div>
                        </div>
                    )
                }}><img src={boletinImage} width="45px"/></button>
            </div>
    );
    const [buttonBorrar, setButtonBorrar] = useState(null)
    const [textInput, setTextInput] = useState(
            <div>
                <ul>
                    🔥<textarea 
                    className="input-no-styles-characters" 
                    type="text"
                    name={"moreDescription"}
                    placeholder="Más información sobre..." ></textarea>
                </ul>
            </div>
        );

    const plusRequerid = ()=> {
        setConteoViñeta(conteoViñeta + 1)
        setTextInput(
            <div>
                {textInput}
                <ul>
                🔥<textarea 
                        className="input-no-styles-characters-items"
                        type="text"
                        name={"moreDescription" + conteoViñeta}
                        placeholder="Más información sobre..."></textarea>
                </ul>
            </div>
        )
        if(!buttonBorrar) {
            setButtonBorrar(
                <button onClick={RemoveViñeta} className="button-borrar" type="button">Borrar</button>
            )
        }
    }
    
    const RemoveViñeta = ()=> {
        setTextInput(
            <div>
                <ul>
                 🔥<textarea 
                        className="input-no-styles-characters" 
                        type="text"
                        name={"moreDescription"} 
                        placeholder="Más información sobre..."></textarea>
                </ul>
            </div>
        )
        setButtonBorrar(null)
    }

    return <React.Fragment>
        <div className="flex-add-character">
            <div className="col1-add">
                <div>
                    <input 
                    type="text" 
                    className="input-no-styles-character-title" 
                    list="more-description" 
                    placeholder="Agrega un título" 
                    name={"moreDescriptionTitle" + props.conteo}/><br/>
                    <datalist id="more-description">
                        <select>
                            <option>Requerimientos de la vacante</option>
                            <option>Funciones generales</option>
                            <option>Otros beneficios</option>
                        </select>
                    </datalist>
                </div>
                <div className="label-description-requerid">
                    <div className="input-text-character">
                        {textInput}    
                    </div>
                    {/* <textarea 
                    className="input-no-styles-characters" 
                    type="text"
                    name={"moreDescription" + conteo} 
                    placeholder="Más información sobre..."></textarea> */}
                    <div className="centerButton">
                        <button type="button" className="button-viñeta" onClick={plusRequerid}><img src={plusImage} width="15px"/></button>
                    </div>
                    <div className="centerButton">
                        {buttonBorrar}
                    </div>
                </div>
            </div>
            <div className="col2-add">
                {newCharacter}
            </div>
        </div>

    </React.Fragment>
}

export default CharacterComponent;