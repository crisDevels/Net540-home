import React from 'react'

import '../styles/howStyles.css'
import { LineTimeContrat } from './lineTime/linetimeContrat'
import { LineTimeFreelancer } from './lineTime/linetimeFreelancer'

class BlockFunciona extends React.Component {
  state = {
    ButtonIndependiente: 'buttonFreelancer',
    ButtonEmpresa: 'buttonContratanteDesactive',
    BlockIndependiente: 'independiente',
    BlockEmpresa: 'contratante'
  }

  abrirIndependientes = ()=> {
    this.setState({
      BlockIndependiente: 'independiente',
      BlockEmpresa: 'contratante',
      ButtonIndependiente: 'buttonFreelancer',
      ButtonEmpresa: 'buttonContratanteDesactive'
    })
  }

  abrirEmpresa = ()=> {
    this.setState({
      BlockIndependiente: 'independiente-desactive',
      BlockEmpresa: 'contratante-active',
      ButtonIndependiente: 'buttonFreelancer-desactive',
      ButtonEmpresa: 'buttonContratante'
    })
  }
  
  render() {
    return (
      <div className='block-how-landing'>
        <div className='wrapper-landing'>
          <div className='title-block-landing'>
            <div className='flex-title-how'>
              <h2 className='title-how-function' >¿Cómo funciona?</h2>
              <div className='buttons-how'>
                <div className='buttons-50'>
                  <button onClick={this.abrirIndependientes} className={this.state.ButtonIndependiente}>Freelancers</button>
                </div>
                <div className='buttons-50'>
                  <button onClick={this.abrirEmpresa} className={this.state.ButtonEmpresa}>Empleadores</button>
                </div>
              </div>
            </div>
          </div>
          <div className={this.state.BlockIndependiente}>    
            <LineTimeFreelancer />
          </div>
          <div className={this.state.BlockEmpresa}>
            <LineTimeContrat />
          </div>
        </div>
      </div>
    )
  }
}

export default BlockFunciona