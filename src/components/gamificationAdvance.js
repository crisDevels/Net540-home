import React from 'react'

import './styles/gamificationStyles.css'

import checkIcon from '../images/check.svg'

class GamificationAdvance extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="block-center-gamification">
                    <p className="status-title">Estado de solicitud</p>
                    <div className="flex-block-gamifiication">
                        <div className="container-flow">
                            <div className={this.props.advanceBarra} style={this.props.styleBarraProgress}></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className="circle-advance"></div>
                            <div className={this.props.positionCheck}>
                                <img alt="solo es un check" src={checkIcon} className="check-icon" />
                            </div>
                        </div>
                    </div>
                    <p className="title-green">Completa todos los campos</p>
                    <p className="subtitle-gamification">{this.props.copyAdvance}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default GamificationAdvance