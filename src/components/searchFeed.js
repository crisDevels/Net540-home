import React from 'react'

import './FormularioRegistro/stylesForm/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../pages/styles/feedStyles.css'

import iconSearch from '../images/searchIcon.svg'


var searchIcon = {
    backgroundImage: "url("+ iconSearch + ")"
};

class SearchFeed extends React.Component {
    render() {
        return (
            <div className={this.props.blockSearch}>
                <div>
                    <h2>Buscar trabajos</h2>
                    <div className="center-search">
                        <input style={searchIcon} 
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
}

export default SearchFeed;