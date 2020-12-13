import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';

import PageLoading from './pageLoading'
import LOGOhero from '../images/logo-joobbi-home-blue.png'

import ILUfem from '../images/Registro-ilustracion-personaje.svg'
import ILUfemMano from '../images/Registro-ilustracion-mano.svg'

import '../components/styles/registreStyles.css'

export const NewRegistry = ()=> {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [registryEmail, setRegistryEmail] = useState('')
  const [registryPassword, setRegistryPassword] = useState('')
  
  useEffect (()=> {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if (mounted) {
       setUser(user)
       setLoading(false) 
      }
    })
    return function cleanup() {
      mounted = false
    }
  }, [])

  //metodo para crear usuarios con firebase
  const createUser = (e)=> {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(registryEmail, registryPassword)
    .then(() => {
      // window.location.reload(true)
      window.location.href = '/works'
      const nameUser = name
      console.log(nameUser)
      var user = firebase.auth().currentUser;
      //Actualizando nombre de usuario 
      user.updateProfile({
        displayName: name
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

    return (
      <React.Fragment>
        {
        loading ? <PageLoading /> :
          <div>
            {
            user ? <div> <PageLoading /> {window.location.href = '/works'} </div> : <div className='block-registre-page'>
              <div className="wrapper-border">
                <div className="background-registro">
                  <div className="flex-registry">
                    <div className="col-registry">
                      <img src={LOGOhero} alt='LOGO png Joobbi sin fondo' className='styles-logo-hero' />
                      <p className="hero-p">Queremos transformar el estilo y calidad de vida para las personas, el futuro del trabajo está aquí. Regístrate<strong className="subtitle-strong"> ¿Qué estas esperando?</strong></p>  
                    </div>
                    <div className="border-form-registro">
                      <div className='container-form-registre'>
                        <div className='obsolute-image'>
                          <img src={ILUfem} alt='ilustracion de una mujer curioseando' />
                        </div>
                        <div className='background-form-registre'>
                          <div className='div-form-inicio'>
                            <form className="formRegitre-pages">
                              <input
                              value={name}
                              onChange={(e) => {setName(e.target.value)}} 
                              className="space-form-input" 
                              type="text" 
                              name="name" 
                              placeholder="Nombre"
                              id="registryName"
                              size="40" required/>
                              <input
                              value={registryEmail}
                              onChange={(e) => {setRegistryEmail(e.target.value)}}  
                              className="space-form-input" 
                              type="text" 
                              name="registryEmail" 
                              placeholder="Correo Electrónico"
                              id="registryEmail" 
                              size="40" required/>
                              <input
                              value={registryPassword}
                              onChange={(e) => {setRegistryPassword(e.target.value)}}  
                              className="space-form-input" 
                              type="password" 
                              name="registryPassword"
                              id="registryPassword" 
                              placeholder="Contraseña" required /><br/>         
                              <label className="check">
                                <input 
                                type="checkbox" 
                                id="check-politicas" 
                                name="checkedPoliticas" 
                                value="checkbox-politicas" 
                                className="checkbox"/> Estoy de acuerdo con la <a href="/"><strong>política de privacidad</strong></a> y con los <a href="/"><strong>terminos y condiciones</strong></a></label><br/>
                              <div className='container-button-registre'>
                                <button
                                onClick={createUser}
                                className="button-joobbi" 
                                type="submit">Registrar</button>                      
                              </div>
                            </form>
                            <div className='align-center-style'>
                              <p>¿Ya tienes una cuenta? < Link className='link-color' to='/inicio-joobbi'> Inicia Sesión</Link></p>
                            </div>
                          </div>
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