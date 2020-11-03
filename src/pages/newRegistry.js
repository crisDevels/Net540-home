import React from 'react'
import firebase from 'firebase';

import PageLoading from './pageLoading'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

import '../components/styles/registreStyles.css'
import ErrorNotPage from './error404';

class NewRegistry extends React.Component {
  state = {
    user: null,
    loading: true,
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }
  render () {
    return (
      <React.Fragment>
        {
        this.state.loading ? <PageLoading /> :
          <div>
            {
            this.state.user ? <div>
              <ErrorNotPage />
            </div> : <div>
              <NavBar />
                <div className="wrapper-border">
                  <div className="background-registro">
                    <div className="flex-registry">
                      <div className="col-registry">
                        <h2 className='title-registro'>Regístrate ahora</h2>
                        <p className="hero-p">Que el mundo no se pierda de tu talento, cuentanos sobre tí, que nosotros hacemos el resto <strong className="subtitle-strong">¿Qué estas esperando?</strong></p>  
                      </div>
                      <div className="border-form">
                        <form className="formRegitre-pages">
                          <div className="flex-Registre-names">
                            <input
                            value={this.state.name}
                            onChange={this.handleChange} 
                            className="space-form-input-50" 
                            type="text" 
                            name="name" 
                            placeholder="Nombre"
                            id="registryName"
                            size="40" required/>
                            <input
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            className="space-form-input-50" 
                            type="text" 
                            name="lastName" 
                            placeholder="Apellido"
                            id="registryApellido" 
                            size="40" required/>
                          </div>
                          <input
                          value={this.state.phone}
                          onChange={this.handleChange} 
                          className="space-form-input" 
                          type="phone" 
                          name="phoneNumber" 
                          placeholder="Celular"
                          id="registryPhone" 
                          size="40" required/>
                          <input
                          value={this.state.registryEmail}
                          onChange={this.handleChange} 
                          className="space-form-input" 
                          type="text" 
                          name="registryEmail" 
                          placeholder="Correo Electrónico"
                          id="registryEmail" 
                          size="40" required/>
                          <input
                          value={this.state.registryPassword}
                          onChange={this.handleChange} 
                          className="space-form-input" 
                          type="password" 
                          name="registryPassword"
                          id="registryPassword" 
                          placeholder="Contraseña" required />           
                          <input
                          value={this.state.registryPasswordConf}
                          onChange={this.handleChange} 
                          className="space-form-input" 
                          type="password" 
                          name="confregistryPassword"
                          id="confRegistryPassword" 
                          placeholder="Confirmar Contraseña" required /><br/>
                          <label className="check">
                            <input 
                              type="checkbox" 
                              id="check-politicas" 
                              name="checkedPoliticas" 
                              value="checkbox-politicas" 
                              className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label><br/>
                          <div className='container-button-registre'>
                            <button
                            onClick={this.createUser}
                            className="button-joobbi" 
                            type="submit">Registrar</button>                      
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              <Footer />
            </div>
            }
          </div>
        }
      </React.Fragment>
    )
  }
}

export default NewRegistry