import React from 'react'
import firebase from 'firebase';

import PageLoading from './pageLoading'
import LOGOhero from '../images/logo-joobbi-home-blue.png'

import ILUfem from '../images/Registro-ilustracion-personaje.svg'
import ILUfemMano from '../images/Registro-ilustracion-mano.svg'

import '../components/styles/registreStyles.css'

class NewRegistry extends React.Component {
  state = {
    user: null,
    loading: true,
    email:'',
    password:'',
    name:'',
    apellido: '',
    registryEmail: '',
    registryPassword: '',
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  //handle de registro de usuarios
  handleChange = (e)=> {
    const { value, name } = e.target;    
    this.setState({
      [name]: value 
    })
  }

  //metodo para crear usuarios con firebase
  createUser = (e)=> {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)
    .then(() => {
      // window.location.reload(true)
      window.location.href = '/works'
      const nameUser = this.state.name
      console.log(nameUser)
      var user = firebase.auth().currentUser;
      //Actualizando nombre de usuario 
      user.updateProfile({
        displayName: this.state.name
      })
    }).catch((error)=> {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
      alert(errorMessage);
      }
      console.log(error);
    });    
  }

  render () {
    return (
      <React.Fragment>
        {
        this.state.loading ? <PageLoading /> :
          <div>
            {
            this.state.user ? <div> <PageLoading /> {window.location.href = '/works'} </div> : <div className='block-registre-page'>
              <div className="wrapper-border">
                <div className="background-registro">
                  <div className="flex-registry">
                    <div className="col-registry">
                      <img src={LOGOhero} alt='LOGO png Joobbi sin fondo' className='styles-logo-hero' />
                      <p className="hero-p">Queremos transformar el estilo y calidad de vida para las personas, el futuro del trabajo está aquí. Regístrate<strong className="subtitle-strong"> ¿Qué estas esperando?</strong></p>  
                    </div>
                    <div className="border-form">
                      <div className='container-form-registre'>
                        <div className='obsolute-image'>
                          <img src={ILUfem} alt='ilustracion de una mujer curioseando' />
                        </div>
                        <div className='background-form-registre'>
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
                        <div className='obsolute-image-mano'>
                          <img src={ILUfemMano} alt='ilustracion de una mujer curioseando mano' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        }
      </React.Fragment>
    )
  }
}

export default NewRegistry