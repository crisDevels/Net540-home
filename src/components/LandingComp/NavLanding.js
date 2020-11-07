import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import firebase from 'firebase';

import '../../pages/styles/landingStyles.css'
import { ModalInicioSesion } from '../Modales/ModalSesion'
import { ModalRegistre } from '../Modales/ModalRegistre';

import logoJoobbi from '../../images/LOGOjoobbiW.svg'
import { ModaleInicioBurguer } from '../Modales/modaleInicioBurguer';

class NavLanding extends React.Component {
  state = {
    user: null, 
    email:'',
    password:'',
    name:'',
    apellido: '',
    registryEmail: '',
    registryPassword: '',
    blockModalInicio: 'none',
    overlay: 'none',
    blockModalRegistro: 'none',
    isOpenInicio: false,
    isOpenRegistro: false,
    buttonsContainer: 'buttons-container',
    burguerIconInf: 'burguer-icon-sub',
    burguerIconSub: 'burguer-icon-inf',
    openMenuPhone: false,
  }
  // metodo para abrir el modal inicio
  abrirModalInicio = () =>  {
    this.setState({
      isOpenInicio: true,
      blockModalInicio: 'modalInicioActiveLanding',
      overlay: 'overlayActive',
      burguerIconInf: 'burguer-icon-sub',
      burguerIconSub: 'burguer-icon-inf',
      openMenuPhone: false,
    })
  }
  // metodo para cerrar el modal
  cerrarModalInicio = () =>  {
    this.setState({
      isOpenInicio: false,
      blockModalInicio: 'none',
      overlay: 'none',
      blockModalRegistro: 'none',
      isOpenRegistro: false
    })
  }
  // metodo handle para change del formulario de inicio
  handleChange = (e)=> {
    const { value, name } = e.target;    
    this.setState({
      [name]: value 
    })
  }
  // metodo de inicio sesión con firebase
  login = (e)=> {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(result => {
      window.location.href = '/works'
      console.log(`${result.user.email} ha iniciado sesión`)
    }).catch(error => console.log(`Error ${error.code}: ${error.message}`))         
  }
  // metodo para autentficar usuarios con google
  handleAuth = (e)=> {
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
  handleAuthFacebook = (e)=> {
    e.preventDefault()
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`)
      }).catch(error => {
        console.log(`Error ${error.code}: ${error.message}`)
      });
  }

  //conjunto metodos para formulario de registro de usuarios
  //metodo para abrir el modal registro
  abrirModalRegistro= ()=> {
    this.setState({
      overlay: 'overlayActive',
      blockModalRegistro: 'modalRegistreActive',
      isOpenRegistro: true,
      burguerIconInf: 'burguer-icon-sub',
      burguerIconSub: 'burguer-icon-inf',
      openMenuPhone: false,
    }) 
  }
  //metodo para cerrar el modal registro
  cerrarModalRegistro= ()=> {
    this.setState({
      overlay: 'none',
      blockModalRegistro: 'none',
      isOpenRegistro: false,
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
  // abrir menu con burguer button
  openMenu = ()=> {
    if (this.state.burguerIconInf === 'burguer-icon-sub') {
      this.setState({
        burguerIconInf: 'burguer-icon-sub-x',
        burguerIconSub: 'burguer-icon-inf-x',
        overlay: 'overlayActive',
        openMenuPhone: true,
      })
    } else {
      this.setState({
        burguerIconInf: 'burguer-icon-sub',
        burguerIconSub: 'burguer-icon-inf',
        overlay: 'none',
        openMenuPhone: false,
      })
    }
  }
  // metodo render del ciclo de vida en el componente 
  render() {
    return (
      <React.Fragment>
        <div className= 'block-buttons-inicio'>
          <div className= 'wrapper-nav-inicio'>
          <div onClick={this.cerrarModalInicio} className={this.state.overlay} id='overlay'></div>
            <div className="container-navBar-Landing">
              <div className='logo-container'>
                <Link to='/'>
                  <img src={logoJoobbi} alt='logo Joobbi png sin fondo' />
                </Link>  
              </div>
              <div onClick={this.openMenu} className='burguer-menu'>
                <div className='burguer-icon'>
                  <div className={this.state.burguerIconSub}></div>
                  <div className={this.state.burguerIconInf}></div>
                </div>
              </div>
              {
                ReactDOM.createPortal(
                  <ModaleInicioBurguer openMenuPhone={this.state.openMenuPhone} 
                                       openMenu={this.openMenu} 
                                       openModalInicio={this.abrirModalInicio}
                                       openModalRegistro={this.abrirModalRegistro} />,
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
                  <li className='list-item-nav'>
                    <button className='button-line-white' onClick={this.abrirModalRegistro}>Registrarme <hr className='border-button-botom-line-white'></hr></button>
                  </li>
                  <li className='list-item-nav'>
                    <button className='button-joobbi-white' onClick={this.abrirModalInicio}>Ingresar</button>  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {
          ReactDOM.createPortal(
            <ModalInicioSesion
              isOpenInicio={this.state.isOpenInicio}
              blockModalInicio={this.state.blockModalInicio}
              cerrarModalInicio={this.cerrarModalInicio}
              email={this.state.email}
              password={this.state.password}
              handleChange={this.handleChange}
              login={this.login}
              handleAuth={this.handleAuth}
              handleAuthFacebook={this.handleAuthFacebook} />,
            document.getElementById('modalInicio')
          )
        }
        {
          ReactDOM.createPortal(
            <ModalRegistre
              blockModalRegistro={this.state.blockModalRegistro}
              isOpenRegistro={this.state.isOpenRegistro}
              email={this.state.email}
              password={this.state.password}
              registryEmail={this.state.registryEmail}
              registryPassword={this.state.registryPassword}
              handleChange={this.handleChange}
              createUser={this.createUser}
              handleAuth={this.handleAuth}
              handleAuthFacebook={this.handleAuthFacebook}
              cerrarModalRegistro={this.cerrarModalRegistro}/>,
            document.getElementById('modalRegistre')
          )
        }
      </React.Fragment>
    )
  }
}

export default NavLanding