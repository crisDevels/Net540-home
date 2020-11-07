import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

import logoJoobbi from '../images/LOGOjoobbiW.svg'

import { AiFillHome } from 'react-icons/ai'
import { GoBriefcase } from 'react-icons/go'
import { GoMegaphone } from 'react-icons/go'
/* import { CgUserlane } from 'react-icons/cg' */
import { RiUser6Fill } from 'react-icons/ri'
import iconSearch from '../images/searchIcon.svg'
import { ImSearch } from 'react-icons/im'
import { IoIosListBox } from 'react-icons/io'
import { MdSecurity } from 'react-icons/md'
import { IoIosSave } from 'react-icons/io'
import { BsFillFolderFill } from 'react-icons/bs'

import '../fonts/style.css'

var iconColor = {
  color: 'white'
}

var iconColorBlue = {
  color: '#1daeff',
}

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
              <div className='icon-search-phone'>
                <ImSearch onClick={this.modalBuscarNav} size='20px' style={iconColor} />
              </div>
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
                    <button className='nonButtonsHeader-search' onClick={this.modalBuscarNav} ><img src={logoJoobbi} alt='logo Joobbi png sin fondo' /></button>
                    <button className='nonButtonsHeader' onClick={this.modalPublicNav} ><GoMegaphone style={iconColor} size='20px' /></button>
                    <button className='nonButtonsHeader' onClick={this.modalProfileNav} ><RiUser6Fill style={iconColor} size='20px' /></button>
                  </div>
                  <div className={this.state.modalProfile}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        Hola, {this.state.user.displayName}
                      </p>
                      <hr></hr>
                      <Link to='/condiciones-de-uso'>
                        <button className='buttonMenu'>
                          <MdSecurity style={iconColorBlue} size='20px' />
                          Términos y condiciones
                        </button>
                      </Link>
                      <div className='container-cerrar-sesion'>
                        <button className='button-joobbi' onClick={this.handleLogout}>Cerrar Sesión</button>
                      </div>
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
                        <button className='buttonMenu'>
                          <BsFillFolderFill style={iconColorBlue} size='20px' />
                          Mis publicaciones
                        </button>
                      </Link>
                      <Link to='/publicar-trabajo'>
                        <button className='buttonMenu'>
                          <GoMegaphone style={iconColorBlue} size='20px' />
                          Publica un trabajo
                        </button>
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
                        <button className='buttonMenu'>
                          <IoIosSave style={iconColorBlue} size='20px' />
                          Guardados
                        </button>
                      </Link>
                      <Link to='/publicar-trabajo'>
                        <button className='buttonMenu'>
                          <IoIosListBox style={iconColorBlue} size='20px' />
                          Mis aplicaciones
                        </button>
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
                  <img src={logoJoobbi} alt='logo Joobbi blue png sin fondo' />
                </Link>
              </div>
              <div className='buttons-container'>
                <ul className='list-buttons-nav'>
                  <li className='list-item-nav'>
                    <Link to='/works'>
                      <button className='button-line-white'>Ver trabajos <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/publicar-trabajo'>
                      <button className='button-line-white'>Contacta un freelancer <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/registro-joobbi'>
                      <button className='button-line-white'>Registrarme <hr className='border-button-botom-line'></hr></button>
                    </Link>
                  </li>
                  <li className='list-item-nav'>
                    <Link to='/registro-joobbi'>
                    <button className='button-joobbi-white'>Ingresar</button>
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