import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import ReactDOM from 'react-dom'

import './styles/navStyles.css'
import './styles/popRegistro.css'
import '../globalStyles.css'
import '../pages/styles/homeStyles.css'

import { ModaleInicioBurguer } from './Modales/modaleInicioBurguer';

import logoJoobbi from '../images/LOGOjoobbiW.svg'

import { AiFillHome } from 'react-icons/ai'
import { GoBriefcase } from 'react-icons/go'
import { GoMegaphone } from 'react-icons/go'
import { RiUser6Fill } from 'react-icons/ri'
import { ImSearch } from 'react-icons/im'
import { IoIosListBox } from 'react-icons/io'
import { MdSecurity } from 'react-icons/md'
import { IoIosSave } from 'react-icons/io'
import { BsFillFolderFill } from 'react-icons/bs'
import { VscLightbulbAutofix } from 'react-icons/vsc'
import { HiUserGroup } from 'react-icons/hi'
import { BsFilePost } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'

import '../fonts/style.css'

import { ModalAreaSelection } from './Modales/modalAreaSelection'
import { ModalSpecialSelection } from './Modales/modalSpecialSelection'

import '../pages/styles/feedStyles.css'

import { MdPlace } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'

var styleIcon = {
  color: '#757575'
}

var iconColor = {
  color: 'white'
}

var iconColorBlue = {
  color: '#1daeff',
}

export const NavBar = () => {
  // estados del nav
  const [modalProfile, setModalProfile] = useState('none')
  const [modalOptions, setModalOptions] = useState('none')
  const [modalPublic, setModalPublic] = useState('none')
  const [modalJobs, setModalJobs] = useState('none')
  const [modalBuscar, setModalBuscar] = useState('none')
  const [overlay, setOverlay] = useState('none')
  const [overlayMenu, setOverlayMenu] = useState('none')
  const [user, setUser] = useState(null)
  //modal de areas estados
  const [areaService, setAreaService] = useState('Selecciona un área')
  const [modalArea, setModalArea] = useState('none')
  const [isOpenModalArea, setOpenModalArea] = useState(false)
  //modal de specialty
  const [specialty, setSpecialty] = useState('Selecciona una especialidad')
  const [modalSpecial, setModalSpecial] = useState('none')
  const [isOpenModalSpecial, setOpenModalSpecial] = useState(false)
  // modal de burguer
  const [burguerIconInf, setBurguerIconInf] = useState('burguer-icon-sub')
  const [burguerIconSub, setBurguerIconSub] = useState('burguer-icon-inf')
  const [openMenuPhone, setOpenMenuPhone] = useState(false)

  useEffect(()=> {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if (mounted) {
        setUser(user)
      }
    })
    return function cleanup() {
      mounted = false
    }
  }, [])

  const cerrarModalInicio = ()=> {
    setOpenMenuPhone(false)
  }

  const modalOptionsNav = () => {
    if(modalOptions === 'none') {
      setModalProfile('none')
      setModalPublic('none')
      setModalJobs('none')
      setModalBuscar('none')
      setOverlayMenu('overlayActive-menu')
      setModalOptions('Actionsv2-content')
    }else {
      setModalOptions('none')
      setOverlayMenu('none')
    }
  }

  const modalProfileNav = ()=> {
    if(modalProfile === 'none') {
      setModalProfile('Actionsv2-content')
      setModalPublic('none')
      setModalJobs('none')
      setModalBuscar('none')
      setModalOptions('none')
      setOverlayMenu('overlayActive-menu')
    }else {
      setModalProfile('none')
      setOverlayMenu('none')
    }
  }

  const modalPublicNav = ()=> {
    if(modalPublic === 'none') {
      setModalProfile('none')
      setModalPublic('Actionsv2-content')
      setModalJobs('none')
      setModalBuscar('none')
      setModalOptions('none')
      setOverlayMenu('overlayActive-menu')
    }else {
      setModalPublic('none')
      setOverlayMenu('none')
    }
  }

  const modalJobsNav = ()=> {
    if(modalJobs === 'none') {
      setModalProfile('none')
      setModalPublic('none')
      setModalJobs('Actionsv2-content')
      setModalBuscar('none')
      setModalOptions('none')
      setOverlayMenu('overlayActive-menu')
    }else {
      setModalJobs('none')
      setOverlayMenu('none')
    }
  }

  const modalBuscarNav = ()=> {
    if(modalBuscar === 'none') {
      setModalProfile('none')
      setModalPublic('none')
      setModalJobs('none')
      setModalOptions('none')
      setModalBuscar('Actionsv2-content')
      setOverlayMenu('overlayActive-menu')
    }else {
      setModalBuscar('none')
      setOverlayMenu('none')
    }
  }

  const closeModales = ()=> {
    setModalProfile('none')
    setModalPublic('none')
    setModalJobs('none')
    setModalBuscar('none')
    setOverlayMenu('none')
    setModalArea('none')
    setModalSpecial('none')
    setModalOptions('none')
  }
    
  const handleLogout = ()=> {
    firebase.auth().signOut()
      .then(result => {console.log(`El usuario ha salido`)})
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  //metodo change para el formulario de buscar
  const handleChangeArea = (e)=> {
    const { value } = e.target;    
    setAreaService(value)
  }

  const handleChangeSpecialty = (e)=> {
    const { value } = e.target;    
    setSpecialty(value)
  }

  //click Modal Area 
  const clickOpenModalArea = ()=> {
    setModalArea('modal-options-area')
    setOpenModalArea(true)
    setOverlay('overlayActive') 
  }

  const closeModalArea = ()=> {
    setModalArea('none')
    setOverlay('none')
  }

  //metodos para abrir y cerrar modal de special
  const clickOpenModalSpecial = ()=> {
    setModalSpecial('modal-options-area')
    setOpenModalSpecial(true)
    setOverlay('overlayActive')
  }

  const closeModalSpecial = ()=> {
    setModalSpecial('none')
    setOverlay('none')
  }

  // metodo para abrir modal burguer
  // abrir menu con burguer button
  const openMenu = ()=> {
    if (burguerIconInf === 'burguer-icon-sub') {
      setBurguerIconInf('burguer-icon-sub-x')
      setBurguerIconSub('burguer-icon-inf-x')
      setOverlay('overlayActive')
      setOpenMenuPhone(true)
    } else {
      setBurguerIconInf('burguer-icon-sub')
      setBurguerIconSub('burguer-icon-inf')
      setOverlay('none')
      setOpenMenuPhone(false)
    }
  }
  const renderLoginButton = () => {
    //si login
    if (user) {
      return <React.Fragment>
        <div className='container-block-nav'>
          <div className='wrapper-home'>
            <div className='navForm'>
              <div className='icon-search-phone'>
                <ImSearch onClick={modalBuscarNav} size='20px' style={iconColor} />
              </div>
              <div className='logoN-user'>
                <Link to='/works'>
                  <img src={logoJoobbi} alt='logo Joobbi png sin fondo' />
                </Link>
              </div>
              <div className='nav-flex-login'>
                <div className='container-buttons'>
                  <div className='container-buttons-flex'>
                    <button className='nonButtonsHeader' onClick={modalOptionsNav} ><AiFillHome size='20px' /></button>
                    <button className='nonButtonsHeader' onClick={modalJobsNav} ><GoBriefcase size='20px' /></button>
                    <button className='nonButtonsHeader-search' onClick={modalBuscarNav} ><img src={logoJoobbi} alt='logo Joobbi png sin fondo' /></button>
                    <button className='nonButtonsHeader' onClick={modalPublicNav} ><GoMegaphone size='20px' /></button>
                    <button className='button-despliegue' onClick={modalProfileNav} >
                      {user.displayName}
                      {user.photoURL ? <img alt='profile user avatar' src={user.photoURL} className='photo-user' /> : <RiUser6Fill size='20px' /> }
                    </button>
                  </div>
                  <div className={modalProfile}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        Hola, {user.displayName}
                      </p>
                      <hr></hr>
                      <Link to='/registro-freelancer'>
                        <button className='buttonMenu'>
                          <ImProfile style={iconColorBlue} size='20px' />
                          Actualiza tu perfil
                        </button>
                      </Link>
                      <Link to='/condiciones-de-uso'>
                        <button className='buttonMenu'>
                          <MdSecurity style={iconColorBlue} size='20px' />
                          Términos y condiciones
                        </button>
                      </Link>
                      <div className='container-cerrar-sesion'>
                        <button className='button-joobbi' onClick={handleLogout}>Cerrar Sesión</button>
                      </div>
                    </div>  
                  </div>
                  <div className={modalBuscar}>
                    <div className='box-options'>
                      <h2>Buscar trabajos</h2>
                      <hr></hr>
                      <div className='center-flex-modal-search'>
                        <div className="center-search">
                          <form>
                            <div className='flex-input-search'>
                              <BsFillCollectionFill style={styleIcon} size='20px'/>
                              <button type='button' onClick={clickOpenModalArea} className='form-input-search'>{areaService}</button>
                              <div onClick={closeModalArea} className={overlay}></div>
                              {ReactDOM.createPortal(
                                <ModalAreaSelection
                                modalArea={modalArea}
                                onChange={handleChangeArea}
                                closeModalArea={closeModalArea}
                                user={user}
                                isOpenModalArea={isOpenModalArea} />,
                              document.getElementById('modalAreaSelection'))
                              }
                            </div>
                            <div className='flex-input-search'>
                              <VscLightbulbAutofix style={styleIcon} size='20px'/>
                              <button type='button' onClick={clickOpenModalSpecial} className='form-input-search'>{specialty}</button>
                              <div onClick={closeModalSpecial} className={overlay}></div>
                              {ReactDOM.createPortal(
                                <ModalSpecialSelection
                                modalSpecial={modalSpecial}
                                onChange={handleChangeSpecialty}
                                closeModalSpecial={closeModalSpecial}
                                isOpenModalSpecial={isOpenModalSpecial} />,
                              document.getElementById('modalSpecialSelection'))
                              }
                            </div>
                            <div className='flex-input-search'>
                              <MdPlace style={styleIcon} size='20px'/>
                              <input 
                              className="form-input-search" 
                              type="text"
                              name="profesionSearch"
                              placeholder="Ciudad" />
                            </div>
                            <div className='container-button-search'>
                              <button type='button' className="button-joobbi">Buscar</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <div onClick={closeModales} className={overlayMenu} id='overlay'></div>
                  <div className={modalOptions}>
                    <div className='box-options'>
                      <p className='title-modal-nav'>
                        ¿Qué quieres descubrir?
                      </p>
                      <hr></hr>
                      <Link to='/works'>
                        <button className='buttonMenu'>
                          <BsFilePost style={iconColorBlue} size='20px' />
                          Trabajos
                        </button>
                      </Link>
                      <Link to='/freelancers'>
                        <button className='buttonMenu'>
                          <HiUserGroup style={iconColorBlue} size='20px' />
                          Personas
                        </button>
                      </Link>
                    </div>  
                  </div>
                  <div className={modalPublic}>
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
                  <div className={modalJobs}>
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
          <div onClick={cerrarModalInicio} className={overlay} id='overlay'></div>
          <div className='wrapper-home'>
            <div className='menuN'>
              <div className='logoN'>
                <Link to='/'>
                  <img src={logoJoobbi} alt='logo Joobbi blue png sin fondo' />
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
                    <Link to='/inicio-joobbi'>
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
  return (<React.Fragment>
    <div>
      {renderLoginButton()}
    </div>
    </React.Fragment>
  ) 
}