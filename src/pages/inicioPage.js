import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

import PageLoading from './pageLoading'
import LOGOhero from '../images/logo-joobbi-home-blue.png'

import ILUfem from '../images/Registro-ilustracion-personaje.svg'
import ILUfemMano from '../images/Registro-ilustracion-mano.svg'

import '../components/styles/registreStyles.css'

var colorIcon = {
  color: 'white'
}

export const NewInicio = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect (()=>{
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

  // metodo de inicio sesión con firebase
  const login = (e)=> {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      window.location.href = '/works'
      console.log(`${result.user.email} ha iniciado sesión`)
    }).catch(error => console.log(`Error ${error.code}: ${error.message}`))         
  }

  // metodo para autentficar usuarios con google
  const handleAuth = (e)=> {
    e.preventDefault()
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult()
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`)
      }).catch(error => {
      console.log(`Error ${error.code}: ${error.message}`)
      });
  }
  //auth con facebook
  const handleAuthFacebook = (e)=> {
    e.preventDefault()
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`)
      }).catch(error => {
        console.log(`Error ${error.code}: ${error.message}`)
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
                  <div className="border-form">
                    <div className='container-form-registre'>
                      <div className='obsolute-image'>
                        <img src={ILUfem} alt='ilustracion de una mujer curioseando' />
                      </div>
                      <div className='background-form-registre'>
                        <div className='div-form-inicio'>
                          <form className='formRegitreInicio'>
                            <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='space-form-input' 
                            type='email' 
                            name='email' 
                            placeholder='Correo Electrónico'
                            id='inputEmail' 
                            size='40' required/>
                            <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className='space-form-input' 
                            type='password' 
                            name='password'
                            id='inputPassword' 
                            placeholder='Contraseña' required />
                            <div className='login'>
                              <div className='button-100'>
                                <button onClick={login} className='button-joobbi' type='submit'>Acceder</button>
                              </div>
                              <div className='button-100'>
                                <Link to='/recuperar-contraseña'>
                                  <button className='button-line' type='button'>Olvidé mi contraseña</button>
                                </Link>
                              </div>
                            </div>
                          </form>
                          <hr className='line-login' data-content='or'></hr>
                          <div className='block-social-media'>
                            <p className='title-social-media-registre'>Ingresa con tus redes sociales</p>
                            <div className='flex-buttons-social'>
                              <button onClick={handleAuth} className='button-short-google'>
                                < FcGoogle size='20px' />
                              </button>
                              <button onClick={handleAuthFacebook} className='button-short-face'>
                                < FaFacebookF style={colorIcon} size='20px' />
                              </button>
                              <button onClick={handleAuth} className='button-short-linkedin'>
                                < FaLinkedinIn style={colorIcon} size='20px' />
                              </button>
                            </div>
                          </div>
                          <div className='align-center-style'>
                            <p>¿Eres nuevo en Joobbi? < Link className='link-color' to='/registro-joobbi'> Regístrate ahora</Link></p>
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
