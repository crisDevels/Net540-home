import React, { Fragment, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import styled, { keyframes } from 'styled-components'

import '../../pages/styles/landingStyles.css'
import { ModalInicioSesion } from '../Modales/ModalSesion'
import { ModalRegistre } from '../Modales/ModalRegistre';

import logoJoobbi from '../../images/LOGOjoobbiW.svg'
import logoJoobbiL from '../../images/logo-joobbi-home-blue.png'
import { ModaleInicioBurguer } from '../Modales/modaleInicioBurguer';

const AnimationNav = keyframes`
  from {
    top: -200px;
  }
  to {
    top: 0;
  }
`

const FixedDiv = styled.div`
  &.fixed {
    background: #1daeff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
    animation: .5s ${AnimationNav} ease;
  }
`

const ImgLogo = styled.img`
  height: 25px;
`

export const NavLanding = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ registryEmail, setRegistryEmail ] = useState('')
  const [ registryPassword, setRegistryPassword ] = useState('')
  const [ name, setName ] = useState('')
  const [ blockModalInicio, setBlockModalInicio ] = useState('none')
  const [ blockModalRegistro , setBlockModalRegistro ] = useState('none')
  const [ overlay, setOverlay ] = useState('none')
  const [ isOpenInicio, setIsOpenInicio ] = useState(false)
  const [ isOpenRegistro, setIsOpenRegistro ] = useState(false)
  const [ burguerIconSub, setBurguerIconSub ] = useState('burguer-icon-sub')
  const [ burguerIconInf, setBurguerIconInf ] = useState('burguer-icon-inf')
  const [ openMenuPhone, setOpenMenuPhone ] = useState(false)

  const [showFixed, setShowFixed] = useState(false)

  useEffect (()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY > 100
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)

  } )

  // metodo para abrir el modal inicio
  const abrirModalInicio = () =>  {
    setIsOpenInicio(true)
    setBlockModalInicio('modalInicioActiveLanding')
    setOverlay('overlayActive')
    setBurguerIconInf('burguer-icon-inf')
    setBurguerIconSub('burguer-icon-sub')
    setOpenMenuPhone(false)
  }
  // metodo para cerrar el modal
  const cerrarModalInicio = () =>  {
    setIsOpenInicio(false)
    setBlockModalInicio('none')
    setOverlay('none')
    setBlockModalRegistro('none')
    setIsOpenRegistro(false)
    setOpenMenuPhone(false)
  }

  // metodo de inicio sesión con firebase
  const login = (e)=> {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      window.location.href = '/works'
      console.log(`${result.user.displayName} ha iniciado sesión`)
    }).catch(error => console.log(`Error ${error.code}: ${error.message}`))         
  }
  // metodo para autentficar usuarios con google
  const handleAuthGoogle = (e)=> {
    e.preventDefault()
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult()
      .then(result => {
        console.log(`${result.user.displayName} ha iniciado sesión`)
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
        console.log(`${result.user.displayName} ha iniciado sesión`)
      }).catch(error => {
        console.log(`Error ${error.code}: ${error.message}`)
      });
  }

  //conjunto metodos para formulario de registro de usuarios
  //metodo para abrir el modal registro
  const abrirModalRegistro= ()=> {
    setOverlay('overlayActive')
    setBlockModalRegistro('modalRegistreActive')
    setIsOpenRegistro(true)
    setBurguerIconInf('burguer-icon-sub')
    setBurguerIconSub('burguer-icon-inf')
    setOpenMenuPhone(false) 
  }
  //metodo para cerrar el modal registro
  const cerrarModalRegistro= ()=> {
    setOverlay('none')
    setBlockModalRegistro('none')
    setIsOpenRegistro(false)
  }

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

  // abrir menu con burguer button
  const openMenu = ()=> {
    if (burguerIconInf === 'burguer-icon-inf') {
      setBurguerIconSub('burguer-icon-sub-x')
      setBurguerIconInf('burguer-icon-inf-x')
      setOverlay('overlaActive')
      setOpenMenuPhone(true)
    } else {
      setBurguerIconSub('burguer-icon-sub')
      setBurguerIconInf('burguer-icon-inf')
      setOverlay('none')
      setOpenMenuPhone(false)
    }
  }

  const renderNav = (fixed)=> {
    return (
      <FixedDiv className={fixed ? 'fixed' : ''}>
      <div className= 'block-buttons-inicio'>
        <div className= 'wrapper-nav-inicio'>
          <div onClick={cerrarModalInicio} className={overlay} id='overlay'></div>
          <div className="container-navBar-Landing">
            <div className='logo-container'>
              <Link to='/'>
                <ImgLogo src={fixed ? logoJoobbiL : logoJoobbi} alt='logo Joobbi png sin fondo' />
              </Link>
            </div>
            <div onClick={openMenu} className='burguer-menu'>
              <div className='burguer-icon'>
                <div className={burguerIconSub}></div>
                <div className={burguerIconInf}></div>
              </div>
            </div>
            {
              ReactDOM.createPortal(
                <ModaleInicioBurguer 
                openMenuPhone={openMenuPhone} 
                openMenu={openMenu} />,
                document.getElementById('modalMenuBurguer')
              )
            }
            <div className='buttons-container'>
              <ul className='list-buttons-nav'>
                <li className='list-item-nav'>
                  <Link to='/'>
                    <button className='button-line-white'>Contenidos <hr className='border-button-botom-line-white'></hr></button>
                  </Link>
                </li>
                <li className='list-item-nav'>
                  <Link to='/somos-joobbi'>
                    <button className='button-line-white'>Conócenos <hr className='border-button-botom-line-white'></hr></button>
                  </Link>
                </li>
                {fixed ? 
                <Fragment>
                  <Link to='/registro-joobbi'>
                    <li className='list-item-nav'>
                      <button className='button-line-white'>Registrarme <hr className='border-button-botom-line-white'></hr></button>
                    </li>
                  </Link>
                  <Link to='/inicio-joobbi'>
                    <li className='list-item-nav'>
                      <button className='button-joobbi-white'>Ingresar</button>  
                    </li> 
                  </Link>
                </Fragment> :
                <Fragment>
                  <li className='list-item-nav'>
                    <button className='button-line-white' onClick={abrirModalRegistro}>Registrarme <hr className='border-button-botom-line-white'></hr></button>
                  </li>
                  <li className='list-item-nav'>
                    <button className='button-joobbi-white' onClick={abrirModalInicio}>Ingresar</button>  
                  </li>
                </Fragment>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      {
        ReactDOM.createPortal(
          <ModalInicioSesion
          isOpenInicio={isOpenInicio}
          blockModalInicio={blockModalInicio}
          cerrarModalInicio={cerrarModalInicio}
          email={email}
          password={password}
          handleEmail={(ev) => {setEmail(ev.target.value)}}
          handlePassword={(ev) => {setPassword(ev.target.value)}}
          login={login}
          handleAuth={handleAuthGoogle}
          handleAuthFacebook={handleAuthFacebook} />,
          document.getElementById('modalInicio')
        )
      }
      {
        ReactDOM.createPortal(
          <ModalRegistre
          blockModalRegistro={blockModalRegistro}
          isOpenRegistro={isOpenRegistro}
          name={name}
          email={email}
          password={password}
          registryEmail={registryEmail}
          registryPassword={registryPassword}
          handleName={(ev)=> {setName(ev.target.value)}}
          handleEmail={(ev)=> {setRegistryEmail(ev.target.value)}}
          handlePassword={(ev)=> {setRegistryPassword(ev.target.value)}}
          createUser={createUser}
          handleAuth={handleAuthGoogle}
          handleAuthFacebook={handleAuthFacebook}
          cerrarModalRegistro={cerrarModalRegistro}/>,
        document.getElementById('modalRegistre')
        )
      }
    </FixedDiv>
    )
  }

  // metodo render del ciclo de vida en el componente 
  return (
    <Fragment>
        {renderNav()}
        {showFixed && renderNav(true)}
    </Fragment>
  )
}