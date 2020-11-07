import React from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import firebase from 'firebase'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../components/styles/modales.css'

import { MdClose } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import URLink from '../images/URLink.svg'
import IconSave from '../images/saveIcon.svg'
import descriptionIcon from '../images/iconDescriptions.svg'
import checkIcon from '../images/check.svg'

import imageDEFAULT from '../images/ILUSTRACIONESSECTORESdesign.png'

import { ButtonRegistreDemo } from './buttonRegistreDemo'

import LoaderSkeletonWorkDetails from './loaderWorkDetails'

import { MdPlace } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { SiCashapp } from 'react-icons/si'

var styleIcon = {
  color: '#1DAEFF'
}

var URLicon = {
  backgroundImage: "url("+ URLink + ")"
}

var saveIcon = {
  backgroundImage: "url("+ IconSave + ")"
}

class WorkLarge extends React.Component {
  state = {
    modalStyle: "none",
    option: false,
    buttonGuardar: "button-guardar",
    contentButton: "Guardar trabajo",
    save: true,
    copied: false,
    // registre user
    user: null,
    loading: false,
    blockModalRegistro: 'none',
    isOpenRegistro: false,
    overlay: 'none',
    registryEmail: '',
    registryPassword: '',
    email:'',
    password:'',
    name:'',
    apellido: '',
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  openOptions = () => {
    if(!this.state.option) {
      this.setState({
        modalStyle: "modal-options",
        option: true,
      })
    }else {
      this.setState({
        modalStyle: "none",
        option: false,
      })
    }
  }

  saveWork = () => {
    if(!this.state.save) {
      this.setState({
        contentButton: "Guardar trabajo",
        save: true,
        buttonGuardar: "button-guardar",
      })
    } else {
      this.setState({
        contentButton: "Dejar de guardar",
        save: false,
        buttonGuardar: "button-guardado",
      })
    }
  }

  //conjunto metodos para formulario de registro de usuarios

  // metodo handle para change del formulario de inicio
  handleChange = (e)=> {
    const { value, name } = e.target;    
    this.setState({
      [name]: value 
    })
  }
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
      alert('Your account has been created')
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

  render() {
    if(this.props.dataNull.length === 0 || this.props.reLoading) {
      return(
        <LoaderSkeletonWorkDetails />
      )
    }

    return (
      <React.Fragment>
        <div className={this.props.block}>
          <div className='container-publication-large'>
            <div className="publication">
              <div className='cabecera-publication-large'>
                <div className='image-position-context'>
                  <img src={imageDEFAULT} alt='imagen de contexto areas' />
                </div>
                <h2 className='title-service-context'>{this.props.title}</h2>
              </div>
              <div className='flex-info-service'>
                <div className='info-service'>
                  <div className="flex-title-vacant">
                    <div className="div-TypeCompany">
                      <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage} width="35px"/>
                      {
                      this.props.verify &&
                        <div className="cirle-check-publication">
                          <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                        </div>
                      }
                    </div>
                    <div className="title-vacant-general">
                      <p className="titleVacant">
                        {this.props.area}  
                        <strong> {this.props.urgent && "URGENTE"}</strong>
                      </p>
                      <p className="subtitleVacant-fecha">
                        Trabajo {this.props.modality}
                      </p>
                    </div>
                    <div className='container-rate'>
                      <p>USD {this.props.rate}</p>
                    </div>
                    <div className="option-title-vacant">
                      <div className="spaceModal">
                        <div onClick={this.openOptions} className="buttons-options">
                          <BsThreeDots style={styleIcon} size='20px' />
                        </div>
                        <div option={this.state.options} className={this.state.modalStyle}>
                          <CopyToClipboard text={`http://localhost:3000/works/${this.props.id}`} onCopy={()=> this.setState({ copied: true, modalStyle: "none" })}>
                            <button style={URLicon} className="iconURLmodal">Copiar link</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                      <div className="spaceModal">
                        <Link to="/works" >
                          <MdClose style={styleIcon} size='20px' />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="blockSubs">
                    <p className="subtitleVacant">
                      <img alt="icono salario" src={iconRate} width="15px"/>
                      Valor del servicio: USD {this.props.rate}
                    </p>
                    <p className="subtitleVacant">
                      <img alt="icono localización" src={iconLocation} height="19px"/>
                      Ubicación: {this.props.location}
                    </p>
                  </div> */}
                  <hr></hr>
                  <div className="description-vacant">
                    <div>
                      <p>{this.props.description}</p>
                      <p className="title-decriptions-feed">{this.props.titleDescription}</p>
                      <div className="block-items-descriptions">
                        <div>
                          <ul className="list-descriptions">
                            {this.props.descriptions.map((descriptions, i)=>{
                              return (
                                <li key={descriptions.conteoDescriptions} className="containerDescriptions">
                                  <div className="descriptions-p">
                                    <img alt="icon-items-descriptions" className="icon-items" src={descriptionIcon} width="12px"/>
                                    {descriptions.descriptionsService}
                                  </div> 
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-items">
                    <div className='container-item-service'>
                      <MdPlace style={styleIcon} size='30px'/>
                      <p className='p-item-service'>{this.props.location}</p>
                    </div>
                    <div className='container-item-service'>
                      <BiTimeFive style={styleIcon} size='30px'/>
                      <p className='p-item-service'>Tiempo: {this.props.time}</p>
                    </div>
                    <div className='container-item-service'>
                      <SiCashapp style={styleIcon} size='27px'/>
                      <p className='p-item-service'>Pago por {this.props.timeRate}</p>
                    </div>
                  </div>
                  <hr className="linea-form-service"></hr>
                  <div>
                    <h3 className="title-skill">Habilidades recomendadas</h3>
                    <div className="list-skills">
                      <div>
                        <ul className="container-list-skills">
                          {this.props.skills.map((skill, i)=>{
                            return (
                              <li key={skill.conteoSkills} className="containerSkills-publication">
                                {skill.skillsUser}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="linea-form-service"></hr>
                  {this.state.user ?
                    <div className="centerButton-block">
                      {
                      !this.props.save &&
                        <div>
                          <button onClick={this.saveWork} save={this.state.saveWorks} style={saveIcon} type="button" className={this.state.buttonGuardar}>{this.state.contentButton}</button>
                        </div>
                      }
                      <button onClick={this.props.onAplication} type="button" className="button-aplicar">Aplicar (-5 cupones)</button>
                    </div> :
                      <ButtonRegistreDemo 
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
                      cerrarModalRegistro={this.cerrarModalRegistro}
                      abrirModalRegistro= {this.abrirModalRegistro}
                      overlay={this.state.overlay}
                      user={this.state.user} />
                  } 
                </div>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default WorkLarge 