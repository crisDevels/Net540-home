import React from 'react'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../pages/styles/feedStyles.css'

import iconSearch from '../images/searchIcon.svg'

var searchIcon = {
    backgroundImage: "url("+ iconSearch + ")"
};

function SearchFeed(props) {
        return (
            <div className={props.blockSearch}>
                <div>
                    <h2 className="titleSearch">Buscar trabajos</h2>
                    <div className="center-search">
                        <input style={searchIcon}
                            onChange={props.handleQuery}
                            value={props.query}
                            className="formInput-search" 
                            type="text"
                            name="profesionSearch"
                            placeholder="Cargo" />
                        <input style={searchIcon} 
                            className="formInput-search" 
                            type="text"
                            name="profesionSearch"
                            placeholder="Ciudad" />
                        <button className="button-siguiente">Buscar</button>
                    </div>
                </div>
            </div>
        )
}

export default SearchFeed;