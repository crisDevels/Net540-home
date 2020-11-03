import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

import logoJoobbi from '../images/LOGOjoobbiW.svg'
import logoJoobbiBlue from '../images/logo-joobbi-blue.svg'

import { AiFillHome } from 'react-icons/ai'
import { GoBriefcase } from 'react-icons/go'
import iconPublic from '../images/publicIcon.svg'
import { GoMegaphone } from 'react-icons/go'
import { CgUserlane } from 'react-icons/cg'
import iconTerms from '../images/termsIcon.svg'
import iconPublicaciones from '../images/publicacionesIcon.svg'
import iconSearch from '../images/searchIcon.svg'
import { ImSearch } from 'react-icons/im'

import '../fonts/style.css'

var iconColor = {
  color: 'white'
}

var iconTerminos = {
  backgroundImage: 'url('+ iconTerms + ')'
};

var iconPublica = {
  backgroundImage: 'url('+ iconPublic + ')'
};

var iconPublicacionesNet = {
  backgroundImage: 'url('+ iconPublicaciones + ')'
};

var searchIcon = {
  backgroundImage: 'url('+ iconSearch + ')'
};


class NavBar extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        open: false,
        modalProfile: 'none',
        modalPublic: 'none',
        modalJobs: 'none',
        modalBuscar: 'none',
        modalInicio: 'modal',
        overlay: 'overlay',
        overlayMenu: 'overlay',
        buttonInicio: 'buttonInicioN',
        bienvenido: 'blockPerfil',
        user: null, 
        email:'',
        password:'',
        name:'',
    }
    this.handleLogout =  this.handleLogout.bind(this);
  }


  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  abrirModalInicio = ()=> {
    this.setState({
      overlay: 'overlayActive',
      modalInicio: 'modalInicioActive',
    }) 
  }

  cerrarModalInicio = ()=> {
    this.setState({
      overlay: 'overlay',
      modalInicio: 'modal',
      buttonCerrar: 'inicioCerrarN',
      buttonInicio: 'buttonInicioN'
    }) 
  }

  modalProfileNav = ()=> {
    if(this.state.modalProfile === 'none') {
      this.setState ({
        modalProfile: 'Actionsv2-content',
        modalPublic: 'none',
        modalJobs: 'none',
        modalBuscar: 'none',
        overlayMenu: 'overlayActive-menu',
        })
    }else {
      this.setState ({
        modalProfile: 'none',
        overlayMenu: 'overlay',
        })
    }
  }

  modalPublicNav = ()=> {
    if(this.state.modalPublic === 'none') {
      this.setState ({
        modalPublic: 'Actionsv2-content',
        modalProfile: 'none',
        modalJobs: 'none',
        modalBuscar: 'none',
        overlayMenu: 'overlayActive-menu',
      })
    }else {
      this.setState ({
        modalPublic: 'none',
        overlayMenu: 'overlay',
      })
    }
  }

  modalJobsNav = ()=> {
    if(this.state.modalJobs === 'none') {
      this.setState ({
        modalJobs: 'Actionsv2-content',
        modalProfile: 'none',
        modalPublic: 'none',
        modalBuscar: 'none',
        overlayMenu: 'overlayActive-menu',
        })
    }else {
      this.setState ({
        modalJobs: 'none',
        overlayMenu: 'overlay',
      })
    }
  }

  modalBuscarNav = ()=> {
    if(this.state.modalBuscar === 'none') {
      this.setState ({
        modalBuscar: 'Actionsv2-content',
        modalProfile: 'none',
        modalJobs: 'none',
        modalPublic: 'none',
        overlayMenu: 'overlayActive-menu',
    })
    }else {
      this.setState ({
        modalBuscar: 'none',
        overlayMenu: 'overlay',
      })
    }
  }

  closeModales = ()=> {
    this.setState ({
      modalBuscar: 'none',
      modalProfile: 'none',
      modalJobs: 'none',
      modalPublic: 'none',
      overlayMenu: 'overlay',
      })
  }
    
  handleLogout = ()=> {
    firebase.auth().signOut()
      .then(result => {console.log(`${result.user.email} ha salido`)})
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton () {
    //si login
    if (this.state.user) {
      return <React.Fragment>
        <div className='container-block-nav'>
          <div className='wrapper-home'>
            <div className='navForm'>
              <div className='logoN-user'>
                <Link to='/works'>
                  <img src={logoJoobbi} alt='logo Joobbi png sin fondo' />
                </Link>
              </div>
              <div className='nav-flex-login'>
                <div className='container-buttons'>
                  <div className='container-buttons-flex'>
                    < Link to='/works'>
                      <button className='nonButtonsHeader' ><AiFillHome style={iconColor} size='20px' /></button>
                    </ Link>
                    <button className='nonButtonsHeader' onClick={this.modalJobsNav} ><GoBriefcase style={iconColor} size='20px' /></button>
                    <button className='nonButtonsHeader-search' onClick={this.modalBuscarNav} ><ImSearch style={iconColor} size='20px' /></button>
                    <button className='nonButtonsHeader' onClick={this.modalPublicNav} ><GoMegaphone style={iconColor} size='20px' /></button>
                    <button className='nonButtonsHeader' onClick={this.modalProfileNav} ><CgUserlane style={iconColor} size='20px' /></button>
                  </div>
                  <div className={this.state.modalProfile}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        Hola, {this.state.user.displayName}
                      </p>
                      <hr></hr>
                      <Link to='/condiciones-de-uso'>
                        <button style={iconTerminos} className='buttonMenu'>Términos y condiciones</button>
                      </Link>
                      <button className='button-joobbi' onClick={this.handleLogout}>Cerrar Sesión</button>
                    </div>  
                  </div>
                  <div className={this.state.modalBuscar}>
                    <div className='box-options'>
                      <h2>Buscar trabajos</h2>
                      <hr></hr>
                      <input style={searchIcon} 
                        className='formInput-search' 
                        type='text'
                        name='profesionSearch'
                        placeholder='Cargo' />
                      <input style={searchIcon} 
                        className='formInput-search' 
                        type='text'
                        name='profesionSearch'
                        placeholder='Ciudad' />
                      <button className='button-siguiente'>Buscar</button>
                    </div>  
                  </div>
                  <div onClick={this.closeModales} className={this.state.overlayMenu} id='overlay'></div>
                  <div className={this.state.modalPublic}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        ¿Necesitas un servicio?
                      </p>
                      <hr></hr>
                      <Link to='/my-publications'>
                        <button style={iconPublicacionesNet} className='buttonMenu'>Mis publicaciones</button>
                      </Link>
                      <Link to='/publicar-trabajo'>
                        <button style={iconPublica} className='buttonMenu'>Publica un trabajo</button>
                      </Link>
                    </div>  
                  </div>
                  <div className={this.state.modalJobs}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        Mis trabajos
                      </p>
                      <hr></hr>
                      <Link to='/home'>
                        <button style={iconPublicacionesNet} className='buttonMenu'>Guardados</button>
                      </Link>
                      <Link to='/publicar-trabajo'>
                        <button style={iconPublica} className='buttonMenu'>Mis aplicaciones</button>
                      </Link>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    } else {
      //no login
      return <React.Fragment>
        <div className='container-block-nav-inicio'>
          <div className='wrapper-home'>
            <div className='menuN'>
              <div className='logoN'>
                <Link to='/'>
                  <img src={logoJoobbiBlue} alt='logo Joobbi blue png sin fondo' />
                </Link>
              </div>
              <div className='buttons-container'>
                <ul className='list-buttons-nav'>
                  <li className='list-item-nav'>
                    <Link to='/'>
                      <button className='button-line'>Contenidos <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/'>
                      <button className='button-line'>Conócenos <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/'>
                      <button className='button-line'>Registrarme <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/'>
                    <button className='button-joobbi'>Ingresar</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </React.Fragment>
    }  
  }
  render() {
    return <React.Fragment>
      <div>
        {this.renderLoginButton()}
      </div>
    </React.Fragment>
  }
}

export default NavBar;