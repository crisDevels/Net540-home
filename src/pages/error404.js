import React from 'react'
import { Link } from 'react-router-dom'

import errorIMG from '../images/ERROR404.svg'

class ErrorNotPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="flex-error">
                        <div className="center-content-error">
                            <img src={errorIMG} alt="error en el URL" />
                            <h2>Parace que no hemos encontrado esta página.</h2>
                            <Link to="/works">
                                <button className="button-joobbi">Buscar trabajos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ErrorNotPage