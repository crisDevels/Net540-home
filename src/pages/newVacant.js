import React from 'react';
import firebase from 'firebase';

import api from '../api'

import { NavBar } from '../components/NavBar';
import FormService from '../components/FormularioRegistro/formService'
import MyVacant from '../components/FormularioRegistro/FormulariosComponents/myVacant'
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
      titleService: '',
      areaService: 'Selecciona el área',
      specialty: 'Selecciona una especialidad',
      modalityJob: '',
      locationJob: '',
      timeService: '',
      rateJob: '',
      timeRateJob: '',
      descriptionService: '',
      titleDescription: '',
      verify: false,
      save: false,
      active: true,
    },
    disableArea: true,
    disableSpecialty: true,
    disableModality: true,
    disableRate: true,
    disableTimeService: true,
    disableLocation: true,
    disableTimeRate: true,
    disableDescription: true,
    disableSkills: true,
    disableTitleCharacters: true,
    disableCharacters: true,
    conteoSkills: 0,
    conteoDescriptions: 0,
    dataSkills: [],
    dataDescriptions: [],
    statusWork: '',
    positionCheck: 'cirle-check',
    advanceBarra: 'container-flow-blank',
    copyAdvance: 'Empecemos por el título',
    styleBarraProgress: {width: '0%'},
    checkVerify: 'none',
    //modalArea open
    modalArea: 'none',
    isOpenModalArea: false,
    overlay: 'none',
    //modal de specialty
    isOpenModalSpecial: false,
    modalSpecial: 'none',
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
    if (this.state.formServices.titleService !== undefined && this.state.styleBarraProgress !== {width: '100%'}) {
      this.setState({
        disableArea: false,
        styleBarraProgress: {width: '10%'},
        copyAdvance: 'Genial, nos encanta esto',
      })
      if (!this.state.disableArea && this.state.formServices.areaService !== 'Selecciona el área' && this.state.styleBarraProgress !== {width: '100%'}) {
        this.setState({
          disableSpecialty: false,
          styleBarraProgress: {width: '20%'},
        })
        if (!this.state.disableSpecialty && this.state.formServices.specialty !== 'Selecciona una especialidad' && this.state.styleBarraProgress !== {width: '100%'}) {
          this.setState({
            disableModality: false,
            styleBarraProgress: {width: '30%'},
          })
          if (!this.state.disableModality && this.state.formServices.modalityJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
            this.setState({
              disableRate: false,
              styleBarraProgress: {width: '40%'},
            })
            if (!this.state.disableRate && this.state.formServices.rateJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
              this.setState({
                disableTimeService: false,
                styleBarraProgress: {width: '45%'},
              })
              if (!this.state.disableTimeService && this.state.formServices.timeService !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                this.setState({
                  disableLocation: false,
                  styleBarraProgress: {width: '50%'},
                })
                if (!this.state.disableLocation && this.state.formServices.locationJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                  this.setState({
                    disableTimeRate: false,
                    styleBarraProgress: {width: '55%'},
                  })
                  if (!this.state.disableTimeRate && this.state.formServices.timeRateJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                    this.setState({
                      disableDescription: false,
                      styleBarraProgress: {width: '60%'},
                    })
                    if (!this.state.disableDescription && this.state.formServices.descriptionService !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                      this.setState({
                        disableSkills: false,
                        styleBarraProgress: {width: '70%'},
                      })
                      if (!this.state.disableSkills && this.state.dataSkills !== [] && this.state.styleBarraProgress !== {width: '100%'}) {
                        this.setState({
                          disableCharacters: false,
                          disableTitleCharacters: false,
                          styleBarraProgress: {width: '80%'},
                          copyAdvance: 'Falta poco, agrega características a tu solicitud',
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
    }
  }

  onClickInput = ()=> {
    if (this.state.formServices.titleService !== undefined && this.state.styleBarraProgress !== {width: '100%'}) {
      this.setState({
        disableArea: false,
        styleBarraProgress: {width: '10%'},
        copyAdvance: 'Genial, nos encanta esto',
      })
      if (!this.state.disableArea && this.state.formServices.areaService !== 'Selecciona el área' && this.state.styleBarraProgress !== {width: '100%'}) {
        this.setState({
          disableSpecialty: false,
          styleBarraProgress: {width: '20%'},
        })
        if (!this.state.disableSpecialty && this.state.formServices.specialty !== 'Selecciona una especialidad' && this.state.styleBarraProgress !== {width: '100%'}) {
          this.setState({
            disableModality: false,
            styleBarraProgress: {width: '30%'},
          })
          if (!this.state.disableModality && this.state.formServices.modalityJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
            this.setState({
              disableRate: false,
              styleBarraProgress: {width: '40%'},
            })
            if (!this.state.disableRate && this.state.formServices.rateJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
              this.setState({
                disableTimeService: false,
                styleBarraProgress: {width: '45%'},
              })
              if (!this.state.disableTimeService && this.state.formServices.timeService !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                this.setState({
                  disableLocation: false,
                  styleBarraProgress: {width: '50%'},
                })
                if (!this.state.disableLocation && this.state.formServices.locationJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                  this.setState({
                    disableTimeRate: false,
                    styleBarraProgress: {width: '55%'},
                  })
                  if (!this.state.disableTimeRate && this.state.formServices.timeRateJob !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                    this.setState({
                      disableDescription: false,
                      styleBarraProgress: {width: '60%'},
                    })
                    if (!this.state.disableDescription && this.state.formServices.descriptionService !== '' && this.state.styleBarraProgress !== {width: '100%'}) {
                      this.setState({
                        disableSkills: false,
                        styleBarraProgress: {width: '70%'},
                      })
                      if (!this.state.disableSkills && this.state.dataSkills !== [] && this.state.styleBarraProgress !== {width: '100%'}) {
                        this.setState({
                          disableCharacters: false,
                          disableTitleCharacters: false,
                          styleBarraProgress: {width: '80%'},
                          copyAdvance: 'Falta poco, agrega características a tu solicitud',
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
    }
  }

  verifyWorking = ()=> {
    if (this.state.dataDescriptions >= Array(2)) {
      this.setState({
        checkVerify: 'cirle-check-publication',
        styleBarraProgress: {width: '100%'},
        copyAdvance: 'Perfecto, solicitud 100% recomendada',
      }) 
    }
    // else if (this.state.dataDescriptions <= Array(3)) {
    //   this.setState({
    //     checkVerify: 'none',
    //     styleBarraProgress: {width: '80%'},
    //     rankingWorks: 8,
    //     copyAdvance: 'Agrega características a tu solicitud',
    //   }) 
    // }
    // if (this.state.dataDescriptions >= Array(2)) {
    //   this.setState({
    //     formServices: {
    //       ...this.state.formServices,
    //       verify: true,
    //     },
    //   })
    // } else if (this.state.dataDescriptions <= Array(3)) {
    //   this.setState({
    //     formServices: {
    //       ...this.state.formServices,
    //       verify: false,
    //     }, 
    //   })
    // }
  }
  //click Modal Area 
  clickOpenModalArea = ()=> {
    if (!this.state.disableArea) {
      this.setState({
        disableSpecialty: false,
        styleBarraProgress: {width: '20%'},
      })
    }
    this.setState({
      modalArea: 'modal-options-area',
      isOpenModalArea: true,
      overlay: 'overlayActive'
    }) 
  }

  closeModalArea = ()=> {
    this.setState({
      modalArea: 'none',
      overlay: 'none'
    })
  }
  //metodos para abrir y cerrar modal de special
  clickOpenModalSpecial = ()=> {
    if (!this.state.disableSpecialty) {
      this.setState({
        disableModality: false,
        styleBarraProgress: {width: '30%'},
      })
    }
    this.setState ({
      modalSpecial: 'modal-options-area',
      isOpenModalSpecial: true,
      overlay: 'overlayActive'
    })
  }

  closeModalSpecial = ()=> {
    this.setState({
      modalSpecial: 'none',
      overlay: 'none'
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
          <div className='wrapper-border'>
            <div>
              <div className='flex-feed'>
                <div className='col-50'>
                  <div className='block-center-feed'>
                    <h2 className='title-form-service'>Publica un trabajo</h2>
                    <GamificationAdvance 
                    positionCheck={this.state.positionCheck} 
                    advanceBarra={this.state.advanceBarra} 
                    advanceBarrar={this.advanceBarrar}
                    styleBarraProgress={this.state.styleBarraProgress}
                    copyAdvance={this.state.copyAdvance} />
                    <FormService
                    // disabled
                    onClickInput= {this.onClickInput}
                    disableArea={this.state.disableArea}
                    disableSpecialty= {this.state.disableSpecialty}
                    disableModality= {this.state.disableModality}
                    disableRate= {this.state.disableRate}
                    disableTimeService= {this.state.disableTimeService}
                    disableLocation= {this.state.disableLocation}
                    disableTimeRate= {this.state.disableTimeRate}
                    disableDescription= {this.state.disableDescription}
                    disableSkills= {this.state.disableSkills}
                    disableTitleCharacters= {this.state.disableTitleCharacters}
                    disableCharacters= {this.state.disableCharacters}
                    // other states
                    user={this.state.user}
                    areaSelected={this.state.formServices.areaService}
                    clickOpenModalArea={this.clickOpenModalArea}
                    closeModalArea={this.closeModalArea}
                    modalArea={this.state.modalArea}
                    isOpenModalArea={this.state.isOpenModalArea}
                    overlay={this.state.overlay}
                    onChange={this.handleChange}
                    onSubmitForm={this.onSubmitWork}
                    formValues={this.state.formServices}
                    // specialty select 
                    specialty={this.state.formServices.specialty}
                    clickOpenModalSpecial={this.clickOpenModalSpecial}
                    modalSpecial={this.state.modalSpecial}
                    closeModalSpecial={this.closeModalSpecial}
                    isOpenModalSpecial={this.state.isOpenModalSpecial}
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
                </div>
                <div className='col-50'>
                  <div className='block-center-feed-details'>
                    <h2 className='view-vacant'>Visualiza tu solicitud</h2>
                    <MyVacant
                    checkVerify={this.state.checkVerify}
                    title={this.state.formServices.titleService || 'Marketing para productos industriales'}
                    area={this.state.formServices.areaService || 'Metalmecánica'}
                    specialty={this.state.formServices.specialty || 'Imagen corporativa'}
                    modality={this.state.formServices.modalityJob || 'Remoto'}
                    location={this.state.formServices.locationJob || 'Medellín'}
                    time={this.state.formServices.timeService || 'Menos de 1 mes'}
                    rate={this.state.formServices.rateJob || '40'}
                    timeRate={this.state.formServices.timeRateJob || 'Hora'}
                    titleDescription={this.state.formServices.titleDescription}
                    description={this.state.formServices.descriptionService || 'Se requiere a un profesional con la especialidad especificada, con experiencia mínimo de (x) mes(es) en el área y sector previamente mencionados. Debe cumplir con aquellas habilidades y requerimientos solicitados en el trabajo.'}
                    descriptions={this.state.dataDescriptions || []}
                    skills={this.state.dataSkills || []}
                    urgent={this.state.formServices.urgentJob || undefined} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  }
}

export default NewVacant