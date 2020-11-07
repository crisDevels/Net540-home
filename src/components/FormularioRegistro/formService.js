import React from 'react'
import firebase from 'firebase';
import ReactDOM from 'react-dom'

import '../FormularioRegistro/stylesForm/formStyles.css'
import '../FormularioRegistro/stylesForm/switchStyles.css'
import '../styles/FormServiceStyles.css'

import plusImage from './images/plus.svg'
import equis from './images/cerrar.svg'
import descriptionIcon from './images/iconDescriptions.svg'
import { ButtonRegistreDemo } from '../buttonRegistreDemo';
import { ModalAreaSelection } from '../Modales/modalAreaSelection';

class FormService extends React.Component {
  state = {
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
  
  render () {
    return <React.Fragment>
      <div className='block-form-service'>
        <div>
          <form onSubmit={this.props.onSubmitForm}>
            <div className='formBlock-service'>
              <div className='block-input-flex-title'>
                <label>Título</label><br/>  
                <input
                onChange={this.props.onChange} 
                className='space-form-input' 
                type='text'
                placeholder='Ejemplo: Diseño de Interfaces, Estructuras para construcción, etc...'
                value={this.props.formValues.titleService} 
                name='titleService' required />
              </div>
              <div className='flex-form'>    
                <div className='col-1'>
                  <div className='block-input-service'>
                    <label>Área del servicio</label><br/>
                    <div className='relative-options-area'>
                      <button type='button' onClick={this.props.clickOpenModalArea} className='selected-area-input'>{this.props.areaSelected}</button>
                      <div onClick={this.props.closeModalArea} className={this.props.overlay}></div>
                      {ReactDOM.createPortal(
                        <ModalAreaSelection
                        modalArea={this.props.modalArea}
                        onChange={this.props.onChange}
                        closeModalArea={this.props.closeModalArea}
                        isOpenModalArea={this.props.isOpenModalArea} />,
                        document.getElementById('modalAreaSelection'))
                      }
                    </div>
                  </div>
                  <div className='block-input-service'>
                    <label>Modalidad de trabajo</label><br/>
                    <div className='form-input-selection'>          
                      <select
                      onChange={this.props.onChange} 
                      className='input-no-styles-selection' 
                      name='modalityJob'
                      value={this.props.formValues.modalityJob} 
                      required>
                        <option>Remoto</option>
                        <option>Presencial</option>
                        <option>Presencial y Remoto</option>
                      </select>
                    </div>
                  </div>
                  <div className='block-input-service'>
                    <label>Inversion estimada</label>
                    <div className='flex-skills'>
                      <input 
                      className='form-input-text-col'
                      onChange={this.props.onChange} 
                      value={this.props.formValues.rateJob}
                      placeholder='Ej: USD 15' 
                      type='text'
                      name={'rateJob'} />
                    </div>
                  </div>
                </div>  
                <div className='col-1'>
                  <div className='block-input-service'>
                    <label>Tiempo estimado</label><br/>
                    <div className='form-input-selection'>          
                      <select 
                      onChange={this.props.onChange}
                      className='input-no-styles-selection' 
                      name='timeService'
                      value={this.props.formValues.timeService} 
                      required>
                        <option>Menos de 1 mes</option>
                        <option>1 mes - 3 meses</option>
                        <option>3 meses - 6 meses</option>
                        <option>Más 6 meses</option>
                      </select>
                    </div>
                  </div>
                  <div className='block-input-service'>
                    <label>Ubicación</label><br/>      
                    <input
                    onChange={this.props.onChange} 
                    className='form-input-text-col'
                    placeholder='Ejemplo: Lima, Bogotá, etc...' 
                    type='text' 
                    value={this.props.formValues.locationJob}
                    name='locationJob' required />
                  </div>
                  <div className='block-input-service'>
                    <label>Modalidad de pago</label><br/>
                    <div className='form-input-selection'>
                      <select 
                      className='input-no-styles-selection'
                      onChange={this.props.onChange} 
                      value={this.props.formValues.timeRateJob}                    
                      type='text'
                      name={'timeRateJob'}>
                        <option>Hora</option>
                        <option>Proyecto</option>
                        <option>Asesoría</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='linea-form-service'></hr>
              <div>
                <p className='h2-description'>Descripción del servicio</p>  
                <textarea 
                className='textarea-description-work'
                type='text'
                onChange={this.props.onChange}
                value={this.props.formValues.descriptionService}
                placeholder='Realiza una breve descripción del servicio que necesitas.'
                name='descriptionService'
                required />
              </div>
              <hr className='linea-form-service'></hr>
              <div className='block-habilidades-laborales'>
                <div className='block-input-service'>
                  <label>Habilidades laborales</label><br/>
                  <div className='flex-skills-service'>
                    <input
                    onKeyPress={this.props.onKeyPress}
                    onChange={this.props.onChangeSkill} 
                    className='space-form-input' 
                    type='text'
                    name={'skillsUser'}
                    placeholder='Ej: Puntualidad, Innovación, Excel, Photoshop' />
                    <button type='button' onClick={this.props.onSkill} className='button-agregar'><img alt='plus-Add' src={plusImage} width='15px'/></button>
                  </div>
                  <div className='list-skills'>
                    <div>
                      <ul className='container-list-skills'>
                        {this.props.dataSkills.map((skill, i)=>{
                          return (
                            <li key={skill.conteoSkills} className='containerSkills'>
                              {skill.skillsUser}
                                <div className='button-remove' onClick={this.props.onDelete.bind(this, i)}><img alt='button-remove-skill' src={equis} width='9px'/></div> 
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='linea-form-service'></hr>
              <p className='h2-description'>Otras características</p>  
              <input
              onChange={this.props.onChange} 
              className='title-input-description-work' 
              type='text'
              placeholder='Agrega un título. Ej: aptitudes, actividades, beneficios del trabajo'
              value={this.props.formValues.titleDescription} 
              name='titleDescription'/>
              <div className='label-description'>
                <label>Agrega al menos 2 características para recomendar tu solicitud al 100%</label>
                <textarea
                className='textarea-description-work'
                onKeyPress={this.props.onKeyPressDescriptions}
                placeholder='Ej: Este trabajo require conocimientos...' 
                onChange={this.props.onChangeDescriptions}
                type='text'
                name={'descriptionsService'}/>
              <div className='flex-buttons-descriptions'>
                  <button type='button' onClick={this.props.onDescriptions} className='button-agregar'><img alt='plus-Add' src={plusImage} width='15px'/></button>
                  ó presiona Enter
                </div>
                <div>
                  <div>
                    <ul className='list-descriptions'>
                      {this.props.dataDescriptions.map((descriptions, i)=>{
                        return (
                          <li key={descriptions.conteoDescriptions} className='containerDescriptions'>
                            <div className='descriptions-p'>
                              <img alt='icon-items-descriptions' className='icon-items' src={descriptionIcon} width='12px'/>
                              {descriptions.descriptionsService}
                            </div>
                            <div className='button-remove' onClick={this.props.onDeleteDescriptions.bind(this, i)}><img alt='button-remove-description' src={equis} width='9px'/></div> 
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <hr className='linea-form-service'></hr>
              <div>
                <div className='flex-checkbox-urgent'>
                  <p>¿Este trabajo es de caracter urgente?</p>
                  <label className='switch'>
                    <input
                    onChange={this.props.onChange}
                    type='checkbox'
                    id='jobUrgent'
                    name='urgentJob'
                    value='URGENTE'/>
                    <div className='slider-round'></div>
                  </label>
                </div>
              </div>
            </div>
            {
            this.state.user &&
              <div className='centerButton-block'>
                  <button className='button-joobbi'>Publicar ( -10 cupones )</button>
              </div>                            
            }
          </form>
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
        </div>
      </div>   
    </React.Fragment>
  }
}

export default FormService;