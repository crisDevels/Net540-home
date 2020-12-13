import React from 'react';
import firebase from 'firebase';

import api from '../api'

import { NavBar } from '../components/NavBar';
import FormService from '../components/editForm'
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';
import PageLoading from './pageLoading'

import '../components/FormularioRegistro/stylesForm/formStyles.css'
import './styles/editPublications.css'

class EditPublication extends React.Component {
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
        dataSkills: [],
        dataDescriptions: [],
        conteoSkills: 0,
        conteoDescriptions: 0,
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
        this.fetchData()
    }

    fetchData = async ()=> {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.works.read (
                this.props.match.params.workId
            )
            this.setState({ 
                loading: false,
                formServices: {
                    ...data
                } 
            })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }

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
        if (this.state.formServices.titleService !== null && this.state.rankingWorks !== 10) {
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
                if (this.state.formServices.timeService !== null ) {
                    this.setState({
                        rankingWorks: 3,
                        styleBarraProgress: {width: '30%'},
                    })
                    if (this.state.formServices.modalityJob !== null ) {
                        this.setState({
                            rankingWorks: 4,
                            styleBarraProgress: {width: '40%'},
                        })
                        if (this.state.formServices.locationJob !== null ) {
                            this.setState({
                                rankingWorks: 5,
                                styleBarraProgress: {width: '50%'},
                            })
                            if (this.state.formServices.rateJob !== null ) {
                                this.setState({
                                    rankingWorks: 6,
                                    styleBarraProgress: {width: '60%'},
                                })
                                if (this.state.formServices.TimeRateJob !== null ) {
                                    this.setState({
                                        rankingWorks: 7,
                                        styleBarraProgress: {width: '70%'},
                                    })
                                    if (this.state.formServices.descriptionService !== null ) {
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

    // verifyWorking = ()=> {
    //     if (this.state.formServices.dataDescriptions >= Array(2) && this.state.rankingWorks === 8) {
    //             this.setState({
    //               checkVerify: "cirle-check-publication",
    //               styleBarraProgress: {width: '100%'},
    //               rankingWorks: 10,
    //               copyAdvance: "Perfecto, solicitud 100% recomendada",
    //             }) 
    //     } else if (this.state.formServices.dataDescriptions <= Array(3) && this.state.rankingWorks === 10) {
    //             this.setState({
    //               checkVerify: "none",
    //               styleBarraProgress: {width: '80%'},
    //               rankingWorks: 8,
    //               copyAdvance: "Agrega características a tu solicitud",
    //             }) 
    //     }

    //     if (this.state.formServices.dataDescriptions >= Array(2)) {
    //         this.setState({
    //             formServices: {
    //                 ...this.state.formServices,
    //                 verify: true,
    //             },
    //         })
    //     } else if (this.state.formServices.dataDescriptions <= Array(3)) {
    //         this.setState({
    //             formServices: {
    //                 ...this.state.formServices,
    //                 verify: false,
    //             }, 
    //         })
    //     }
    // }

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
            this.props.history.push('/my-publications')
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
        var newDataSkills = {
            ...this.state.formServices,
            dataSkills: newSkill,
        }
        newSkill.splice(i, 1)
        this.setState ({
            formServices : newDataSkills,
        })
    }

    // metodos para agregar y borrar descriptions

    // handle en DescriptionsUser
    handleDescriptionsChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

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
    }

    // metodo para renderizar en el formulario page works
    render () {
        return <React.Fragment>
            {this.state.loading ? 
            < PageLoading /> :

            <div className="wrapper-border">
                <div>
                    <NavBar />
                </div>
                {
                    this.state.user &&
                    <div>
                        <div className="flex-center">
                            <div className="wrapper-edit">
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
                                dataSkills={this.state.formServices.dataSkills}
                                conteoSkills={this.state.conteoSkills}
                                // agrega descriptions
                                onChangeDescriptions={this.handleDescriptionsChange}
                                onDescriptions={this.agregarDescriptions}
                                onKeyPressDescriptions={this.onKeyPressDescriptions}
                                onDeleteDescriptions={this.borrarDescriptions}
                                dataDescriptions={this.state.formServices.dataDescriptions}
                                conteoDescriptions={this.state.conteoDescriptions}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.state.user &&
                    <div className="containerRegistre">
                        <div className="wrapper-registre">
                          <RegistroPage />
                        </div>
                        <Footer />
                    </div>
                }
            </div>

            }
        </React.Fragment>
    }
}

export default EditPublication