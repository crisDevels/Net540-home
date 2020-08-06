import React from 'react';

import logoB from '../images/logoNetB.png';

import '../components/styles/InteractiveStyles.css';

class BarraInteractive extends React.Component {
    render () {
        return <React.Fragment>
            <div className="profile">
                <div className="container-profile">
                    <div className="flex-search">
                        <div className="logo">
                        <img src={logoB} width="100px"/>
                        </div>
                        <input type="texto" placeholder="buscar"/>
                    </div>
                    <div>
                        <img src="" width=""/>
                        <h2>Juan Martin Arias</h2>
                        <p>Ingeniero-Mecatrónico</p>
                        <p>Bógota-Colombia</p>
                    </div>
                    <hr className="line"></hr>
                    <div>
                        <div>
                            <button>comprar 1 cupónn</button>
                        </div>
                        <div>
                            <button>comprar 2 cupones</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default BarraInteractive;