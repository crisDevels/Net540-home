import React from 'react'
import firebase from 'firebase'

import registroImage from '../images/registroILU2.svg'
import nonRegistroImage from '../images/noRegistroIMG.svg'

import '../components/styles/popRegistro.css'

class registroPage extends React.Component {
    state = {
      overlay: "overlayActive",
      modalProfesional: "modalProfesionalActive",
      email:"",
      password:"",
      name:"",
      lastName:"",
      registryEmail:"",
      registryPassword:"",
    }

    cerrarModal= ()=> {
      this.setState({
          overlay: "overlay",
          modalProfesional: "modal",
      }) 
    }

    createUser = (e)=> {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)

      .then(() => {
        // window.location.reload(true)
        window.location.href = '/registro-skills'

        alert('Your account has been created');
        const nameUser = this.state.name;
        const lastNameUser = this.state.lastName;
        const phoneUser = this.state.phone;
        console.log(nameUser, lastNameUser, phoneUser);

        var user = firebase.auth().currentUser;
        //Actualizando nombre de usuario 
        user.updateProfile({
          displayName: this.state.name,
          lastName: this.state.lastName,
          phoneNumber: this.state.phone,
          })
        })

      .catch((error)=> {
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

      handleChange = (e)=> {
       const { value, name } = e.target;
       this.setState({
         [name]: value 
       })
    }
    
    render () {
        return (
          <div>
            <div onClick={this.cerrarModal} className={this.state.overlay} id="overlay"></div>
              <div className={this.state.modalProfesional}>
                <div className="center-nonRegistre">
                  <h2>Parece que aún no te has registrado</h2>
                  <img src={nonRegistroImage} className="imageNonRegistro" width="500px" alt="Ilustración de registro" />
                  <div className="center-button">
                    <button
                    onClick={this.cerrarModal}
                    className="buttonRegistrar-page" 
                    type="button">Regístrate ahora</button>
                  </div>
                </div>
              </div>
            <div className="flex-registre">
              <div className="col-img">
                <img src={registroImage} className="imageRegistro" width="340px" alt="Ilustración de registro" />
              </div>
              <div className="col-form">
                  <div className="titleRegistro-page">
                    <div className="title-modal">
                      <h2>Regístrate ahora</h2>
                    </div>   
                  </div>
                  <form className="formRegitre-page">
                    <div className="flex-Registre-name">
                      <input
                        value={this.state.name}
                        onChange={this.handleChange} 
                        className="spaceForm-registre-name" 
                        type="text" 
                        name="name" 
                        placeholder="Nombre"
                        id="registryName"
                        size="40" required/>
          
                      <input
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        className="spaceForm-registre-name" 
                        type="text" 
                        name="lastName" 
                        placeholder="Apellido"
                        id="registryApellido" 
                        size="40" required/>
                    </div>

                    <input
                      value={this.state.phone}
                      onChange={this.handleChange} 
                      className="spaceForm-registre" 
                      type="phone" 
                      name="phoneNumber" 
                      placeholder="Celular"
                      id="registryPhone" 
                      size="40" required/>
      
                    <input
                      value={this.state.registryEmail}
                      onChange={this.handleChange} 
                      className="spaceForm-registre" 
                      type="text" 
                      name="registryEmail" 
                      placeholder="Correo Electrónico"
                      id="registryEmail" 
                      size="40" required/>
      
                    <input
                      value={this.state.registryPassword}
                      onChange={this.handleChange} 
                      className="spaceForm-registre" 
                      type="password" 
                      name="registryPassword"
                      id="registryPassword" 
                      placeholder="Contraseña" required />
                                  
                    <input
                      value={this.state.registryPasswordConf}
                      onChange={this.handleChange} 
                      className="spaceForm-registre" 
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
                    <button
                      onClick={this.createUser}
                      className="buttonRegistrar-page" 
                      type="submit">Registrar</button>                      
                </form>
              </div>
            </div>
          </div>
        )
    }
}

export default registroPage