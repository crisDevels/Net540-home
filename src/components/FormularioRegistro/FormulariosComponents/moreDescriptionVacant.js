import React, { useState } from 'react';

import CharacterComponent from './characterComponent'

function MoreDescription() {
    const [conteo, setConteo] = useState(2);

    return <React.Fragment>
        <div className="blockForm-general">
        <h2 className="title-description">Agrega más información</h2>
        <p className="label-functions-more">
            Puedes añadir más caracteristicas a tu vacante (2 máximo).
        </p>
            <div>
                <div className="flex-form">
                    <div className="formblock-characters">
                        <div>
                            <CharacterComponent conteo={conteo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default MoreDescription;