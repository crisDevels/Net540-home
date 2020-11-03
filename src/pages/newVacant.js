import React from 'react';
import firebase from 'firebase';

import api from '../api'

import NavBar from '../components/NavBar';
import FormService from '../components/FormularioRegistro/formService'
import MyVacant from '../components/FormularioRegistro/FormulariosComponents/myVacant'
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';
import PageLoading from './pageLoading'
import GamificationAdvance from '../components/gamificationAdvance.js'

import '../components/FormularioRegistro/stylesForm/formStyles.css'
import './styles/feedStyles.css'

class NewVacant extends React.Component {
  state = {
    user: null,
    loading: true,
    formServices: {
      dataSkills: [],
      dataDescriptions: [],
      titleService: undefined,
      areaService: "Selecciona el área",
      modalityJob: undefined,
      locationJob: undefined,
      timeService: undefined,
      rateJob: undefined,
      TimeRateJob: undefined,
      descriptionService: undefined,
      verify: false,
      save: false,
      active: true,
    },
    conteoSkills: 0,
    conteoDescriptions: 0,
    dataSkills: [],
    dataDescriptions: [],
    rankingWorks: 0,
    statusWork: "",
    positionCheck: "cirle-check",
    advanceBarra: "container-flow-blank",
    copyAdvance: "Empecemos por el título",
    styleBarraProgress: {width: '0%'},
    checkVerify: "none",
    modalArea: "none"
  }
    
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ 
        user,
        loading: false,
      })
    })
  }

  handleChange = (ev)=> {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState ({
      formServices: {
        ...this.state.formServices,
        [name]: value,
      },
    })
    if (this.state.formServices.titleService !== undefined && this.state.rankingWorks !== 10) {
      this.setState({
        rankingWorks: 1,
        styleBarraProgress: {width: '10%'},
        copyAdvance: "Genial, nos encanta esto",
      })
      if (this.state.formServices.areaService !== "Selecciona el área" ) {
        this.setState({
          rankingWorks: 2,
          styleBarraProgress: {width: '20%'},
        })
        if (this.state.formServices.timeService !== undefined ) {
          this.setState({
            rankingWorks: 3,
            styleBarraProgress: {width: '30%'},
          })
          if (this.state.formServices.modalityJob !== undefined ) {
            this.setState({
              rankingWorks: 4,
              styleBarraProgress: {width: '40%'},
            })
            if (this.state.formServices.locationJob !== undefined ) {
              this.setState({
                rankingWorks: 5,
                styleBarraProgress: {width: '50%'},
              })
              if (this.state.formServices.rateJob !== undefined ) {
                this.setState({
                  rankingWorks: 6,
                  styleBarraProgress: {width: '60%'},
                })
                if (this.state.formServices.TimeRateJob !== undefined ) {
                  this.setState({
                    rankingWorks: 7,
                    styleBarraProgress: {width: '70%'},
                  })
                  if (this.state.formServices.descriptionService !== undefined ) {
                    this.setState({
                      rankingWorks: 8,
                      styleBarraProgress: {width: '80%'},
                      copyAdvance: "Falta poco, agrega características a tu solicitud",
                    })
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  verifyWorking = ()=> {
    if (this.state.dataDescriptions >= Array(2) && this.state.rankingWorks === 8) {
      this.setState({
        checkVerify: "cirle-check-publication",
        styleBarraProgress: {width: '100%'},
        rankingWorks: 10,
        copyAdvance: "Perfecto, solicitud 100% recomendada",
      }) 
    } else if (this.state.dataDescriptions <= Array(3) && this.state.rankingWorks === 10) {
      this.setState({
        checkVerify: "none",
        styleBarraProgress: {width: '80%'},
        rankingWorks: 8,
        copyAdvance: "Agrega características a tu solicitud",
      }) 
    }
    if (this.state.dataDescriptions >= Array(2)) {
      this.setState({
        formServices: {
          ...this.state.formServices,
          verify: true,
        },
      })
    } else if (this.state.dataDescriptions <= Array(3)) {
      this.setState({
        formServices: {
          ...this.state.formServices,
          verify: false,
        }, 
      })
    }
  }
  //click Modal Area 
  clickOpenModalArea = ()=> {
    this.setState({
      modalArea: "modal-options-area"
    }) 
  }

  closeModalArea = ()=> {
    this.setState({
      modalArea: "none"
    })
  }
  // submit del formulario completo de trabajos
  onSubmitWork = async (e)=> {
    e.preventDefault()
    this.setState({ loading: true, error: null })
    try {
      await api.works.create(this.state.formServices)
        this.setState({ loading: false })
        this.props.history.push('/works')
    }catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  // metodos para agregar y borrar skills

  // handle en skillsUser
  handleSkillChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }
  // agregar skills con Enter
  onKeyPress = (e) => {
    if(e.which === 13) {
      e.preventDefault();
      this.setState({
        conteoSkills: this.state.conteoSkills + 1,
      })
      const dataContent = {
        skillsUser: this.state.skillsUser,
        conteoSkills: this.state.conteoSkills
      }
      var newSkill = this.state.dataSkills.concat([dataContent])
      this.setState({
        dataSkills : newSkill,
        formServices : {
          ...this.state.formServices,
          dataSkills: newSkill,
        }
      })
    }
  }
  //agregar skills a data en db.json
  agregarSkill = (e)=> {
    e.preventDefault();
    this.setState({
      conteoSkills: this.state.conteoSkills + 1,
    })
    const dataContent = {
      skillsUser: this.state.skillsUser,
      conteoSkills: this.state.conteoSkills
    }
    var newSkill = this.state.dataSkills.concat([dataContent])
    this.setState({
      dataSkills : newSkill,
      formServices : {
        ...this.state.formServices,
        dataSkills: newSkill,
      }
    })
  }
  //borrar skills
  borrar = (i) => {
    var newSkill = this.state.dataSkills;
    newSkill.splice(i, 1)
    this.setState ({
      dataSkills: newSkill,
      formServices : {
        ...this.state.formServices,
        dataSkills: newSkill,
      }
    })
  }

  // metodos para agregar y borrar descriptions

  // agregar descripciones del state con Enter
  onKeyPressDescriptions = (e) => {
    if(e.which === 13) {
      e.preventDefault();
      this.setState({
        conteoDescriptions: this.state.conteoDescriptions + 1,
      })
      const dataContentDescriptions = {
        descriptionsService: this.state.descriptionsService,
        conteoDescriptions: this.state.conteoDescriptions
      }
      var newDescription = this.state.dataDescriptions.concat([dataContentDescriptions])
      this.setState({
        dataDescriptions : newDescription,
        formServices : {
          ...this.state.formServices,
          dataDescriptions: newDescription,
        }
      })
    }
    this.verifyWorking()
  }
  //agregar descripciones del state a data en db.json
  agregarDescriptions = (e)=> {
    e.preventDefault();
    this.setState({
      conteoDescriptions: this.state.conteoDescriptions + 1,
    })
    const dataContentDescriptions = {
      descriptionsService: this.state.descriptionsService,
      conteoDescriptions: this.state.conteoDescriptions
    }
    var newDescription = this.state.dataDescriptions.concat([dataContentDescriptions])
    this.setState({
      dataDescriptions : newDescription,
      formServices : {
        ...this.state.formServices,
        dataDescriptions: newDescription,
      }
    })
    this.verifyWorking()
  }
  //borrar descripciones del state
  borrarDescriptions = (i) => {
    var newDescription = this.state.dataDescriptions;
    newDescription.splice(i, 1)
    this.setState ({
      dataDescriptions: newDescription,
      formServices : {
        ...this.state.formServices,
        dataDescriptions: newDescription,
      }
    })
    this.verifyWorking()
  }
  // metodo para renderizar en el formulario page works
  render () {
    return <React.Fragment>
      {
      this.state.loading ? < PageLoading /> :
        <div>
          <NavBar />
          <div className="wrapper-border">
            {
            this.state.user && <div>
              <div className="flex-feed">
                <div className="col-50">
                  <h2 className='title-form-service'>Publica un trabajo</h2>
                  <GamificationAdvance 
                  positionCheck={this.state.positionCheck} 
                  advanceBarra={this.state.advanceBarra} 
                  advanceBarrar={this.advanceBarrar}
                  styleBarraProgress={this.state.styleBarraProgress}
                  copyAdvance={this.state.copyAdvance} />
                  <FormService
                  areaSelected={this.state.formServices.areaService}
                  clickOpenModalArea={this.clickOpenModalArea}
                  closeModalArea={this.closeModalArea}
                  modalArea={this.state.modalArea}
                  onChange={this.handleChange}
                  onSubmitForm={this.onSubmitWork}
                  formValues={this.state.formServices}
                  // agrega skills
                  onChangeSkill={this.handleSkillChange}
                  onSkill={this.agregarSkill}
                  onKeyPress={this.onKeyPress}
                  onDelete={this.borrar}
                  dataSkills={this.state.dataSkills}
                  conteoSkills={this.state.conteoSkills}
                  // agrega descriptions
                  onChangeDescriptions={this.handleSkillChange}
                  onDescriptions={this.agregarDescriptions}
                  onKeyPressDescriptions={this.onKeyPressDescriptions}
                  onDeleteDescriptions={this.borrarDescriptions}
                  dataDescriptions={this.state.dataDescriptions}
                  conteoDescriptions={this.state.conteoDescriptions}/>
                </div>
                <div className="col-50-">
                  <h2 className="view-vacant">Visualiza tu solicitud</h2>
                  <MyVacant
                  checkVerify={this.state.checkVerify}
                  title={this.state.formServices.titleService || "Ingeniero Mecatrónico"}
                  area={this.state.formServices.areaService || "Metalmecánica"}
                  modality={this.state.formServices.modalityJob || "Remoto"}
                  specialty={this.state.formServices.specialtyService || "Planimetria de producto"}
                  location={this.state.formServices.locationJob || "Medellín"}
                  time={this.state.formServices.timeService || "Menos de 1 mes"}
                  rate={this.state.formServices.rateJob || "$3'500.000 - $5'300.000"}
                  timeRate={this.state.formServices.TimeRateJob || "Quincenal"}
                  titleDescription={this.state.formServices.titleDescription}
                  description={this.state.formServices.descriptionService || "Se requiere a un profesional con la especialidad especificada, con experiencia mínimo de (x) mes(es) en el área y sector previamente mencionados. Debe cumplir con aquellas habilidades y requerimientos solicitados en el trabajo."}
                  descriptions={this.state.dataDescriptions || []}
                  skills={this.state.dataSkills || []}
                  urgent={this.state.formServices.urgentJob || undefined} />
                </div>
              </div>
            </div>
            }
            {
            !this.state.user && <div>
              <div className="flex-feed">
                <div className="col-50">
                  <GamificationAdvance 
                  positionCheck={this.state.positionCheck} 
                  advanceBarra={this.state.advanceBarra} 
                  advanceBarrar={this.advanceBarrar}
                  styleBarraProgress={this.state.styleBarraProgress}
                  copyAdvance={this.state.copyAdvance} />
                  <FormService
                  areaSelected={this.state.formServices.areaService}
                  clickOpenModalArea={this.clickOpenModalArea}
                  closeModalArea={this.closeModalArea}
                  modalArea={this.state.modalArea}
                  onChange={this.handleChange}
                  onSubmitForm={this.onSubmitWork}
                  formValues={this.state.formServices}
                  // agrega skills
                  onChangeSkill={this.handleSkillChange}
                  onSkill={this.agregarSkill}
                  onKeyPress={this.onKeyPress}
                  onDelete={this.borrar}
                  dataSkills={this.state.dataSkills}
                  conteoSkills={this.state.conteoSkills}
                  // agrega descriptions
                  onChangeDescriptions={this.handleSkillChange}
                  onDescriptions={this.agregarDescriptions}
                  onKeyPressDescriptions={this.onKeyPressDescriptions}
                  onDeleteDescriptions={this.borrarDescriptions}
                  dataDescriptions={this.state.dataDescriptions}
                  conteoDescriptions={this.state.conteoDescriptions}/>
                </div>
                <div className="col-50-">
                  <h2 className="view-vacant">Visualiza tu solicitud</h2>
                  <MyVacant
                  checkVerify={this.state.checkVerify}
                  title={this.state.formServices.titleService || "Ingeniero Mecatrónico"}
                  area={this.state.formServices.areaService || "Metalmecánica"}
                  modality={this.state.formServices.modalityJob || "Remoto"}
                  specialty={this.state.formServices.specialtyService || "Planimetria de producto"}
                  location={this.state.formServices.locationJob || "Medellín"}
                  time={this.state.formServices.timeService || "Menos de 1 mes"}
                  rate={this.state.formServices.rateJob || "$3'500.000 - $5'300.000"}
                  timeRate={this.state.formServices.TimeRateJob || "Quincenal"}
                  titleDescription={this.state.formServices.titleDescription}
                  description={this.state.formServices.descriptionService || "Se requiere a un profesional con la especialidad especificada, con experiencia mínimo de (x) mes(es) en el área y sector previamente mencionados. Debe cumplir con aquellas habilidades y requerimientos solicitados en el trabajo."}
                  descriptions={this.state.dataDescriptions || []}
                  skills={this.state.dataSkills || []}
                  urgent={this.state.formServices.urgentJob || undefined} />
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      }
    </React.Fragment>
  }
}

export default NewVacant