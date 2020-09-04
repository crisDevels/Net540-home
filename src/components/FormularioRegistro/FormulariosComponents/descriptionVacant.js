import React from 'react';

function DescriptionVacant() {   
    return <React.Fragment>
            <div className="blockForm-general">
            <h2 className="title-description">Describe la vacante</h2>
            <p>Escribe una breve descripción.</p>
                <div>
                    <div className="flex-form">
                        <div className="formBlock">
                            <div>
                                <div className="label-description">
                                    {/* <label className="label-functions">Escribe una breve descripción.</label><br/> */}
                                    <textarea 
                                        type="text"
                                        name="description-vacant" 
                                        className="formInput-large" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
}

export default DescriptionVacant;