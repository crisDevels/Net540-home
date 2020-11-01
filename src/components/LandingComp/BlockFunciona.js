import React from 'react'

import '../styles/howStyles.css'

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
            <div className='pasoApaso'>
            <div className='line-time-animation'></div>
            <div className='paso-paso'>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>01</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Regístrate</h3>
                    <p className='textActive'>Completa el formulario y forma parte de la comunidad.</p>
                  </div> 
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>02</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Adjunta tu HV</h3>
                    <p className='textActive'>Tu hoja de vida genera un 61% más de confianza para los contratantes.</p>
                  </div>
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>03</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Visibilizamos tu perfil</h3>
                    <p className='textActive'>Nuestro equipo establece los servicios ideales según tu perfil.</p>
                  </div>       
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>04</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Evalua propuestas</h3>
                    <p className='textActive'>Realizamos la conexión entre clientes y freelancers.</p>
                  </div>      
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>05</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Trabaja y cobra</h3>
                    <p className='textActive'>Entrega trabajos de alta calidad y establece el valor.</p>
                  </div>  
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className={this.state.BlockEmpresa}>
            <div className='pasoApaso'>
            <div className='line-time-animation'></div>
            <div className='paso-paso'>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>01</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Regístrate</h3>
                    <p className='textActive'>Completa el formulario y forma parte de la comunidad.</p>
                  </div>
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>02</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Publica tu proyecto</h3>
                    <p className='textActive'>Adjunta la información necesaria para su desarrollo.</p>
                  </div>
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>03</h4>
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Visibilizamos tu idea o trabajo</h3>
                    <p className='textActive'>Nuestro equipo selecciona los freelancers ideales según tu solicitud.</p>
                  </div>
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>04</h4>  
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Elige al freelancer</h3>
                    <p className='textActive'>Te envíamos los perfiles que mejor se acoplan a tu proyecto.</p>
                  </div>
                </div>
              </div>
              <div className='paso'>
                <div className='container-paso-number'>
                  <div className='iconComo'>
                    <h4 className='number-paso'>05</h4>  
                  </div>
                </div>
                <div className='container-text-paso'>
                  <div className='swiftActive'>
                    <h3>Revisa y paga</h3>
                    <p className='textActive'>Cuando estes conforme con el trabajo, podrás pagar el valor acordado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlockFunciona