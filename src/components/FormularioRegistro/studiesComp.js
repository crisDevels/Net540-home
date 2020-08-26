import React from 'react';

// import edit from './images/edit.svg';
import remove from './images/remove.svg';
import './stylesForm/stylesComponentStudies.css'

class Studies extends React.Component {
    render () {
        return <React.Fragment>
            <ul className="list-data">
                {this.props.studies.map((studiesList) => {
                    return (
                        <li className="container-school">
                            <div className="container-flex-studies">
                            <div className="container-block-studies" >
                                <h2>
                                    {studiesList.school}
                                </h2>  
                                <h3>
                                    {studiesList.titleStudy}
                                </h3>
                                {/* <h3>
                                    {studiesList.placeStudy}
                                </h3>
                                <h3>
                                    {studiesList.dateStartStudy} - {studiesList.dateEndStudy}
                                </h3> */}

                            </div>
                            <div className="container-block-button">
                                {/* <button className="button-edit">
                                    <img src={edit}  width="20px"/>
                                </button> */}
                                <button className="button-remove">
                                    <img src={remove} width="10px"/>
                                </button>
                            </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    }
}

export default Studies;