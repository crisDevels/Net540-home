import React from 'react';
import firebase from 'firebase';

import NavBar from '../components/NavBar';
import FormService from '../components/FormularioRegistro/formService'
import MyVacant from '../components/FormularioRegistro/FormulariosComponents/myVacant'
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';
import PageLoading from './pageLoading'

import '../components/FormularioRegistro/stylesForm/formStyles.css'
import './styles/feedStyles.css'

class NewVacant extends React.Component {
    state = {
        user: null,
        loading: true,
        formServices: [],
        conteoSkills: 0,
        dataSkills: [],
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
        const nextForm = this.state.formServices
        nextForm[ev.target.name] = ev.target.value
        this.setState ({
            formServices: nextForm,
        })
    }

    // handle en skillsUser
    handleSkillChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    //agregar skills a data de firebase
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
            dataSkills: newSkill,
        })
        console.log(this.state)
    }

    //borrar skills
    borrar = (i) => {
        var newSkill = this.state.dataSkills;
        newSkill.splice(i, 1)
        this.setState ({
            dataSkills: newSkill,
        })
    }

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
                        <div className="flex-feed">
                            <div className="col-50">
                                <FormService
                                    onChange={this.handleChange}
                                    onChangeSkill={this.handleSkillChange}
                                    onSkill={this.agregarSkill}
                                    onDelete={this.borrar}
                                    dataSkills={this.state.dataSkills}
                                    conteoSkills={this.state.conteoSkills}
                                    formValues={this.state.formServices}/>
                            </div>
                            <div className="col-50-">
                                < MyVacant
                                    title={this.state.formServices.titleService || "Ingeniero Mecatrónico"}
                                    area={this.state.formServices.areaService || "Metalmecánica"}
                                    modality={this.state.formServices.modalityJob || "Remoto"}
                                    specialty={this.state.formServices.specialtyService || "Planimetria de producto"}
                                    location={this.state.formServices.locationJob || "Medellín"}
                                    time={this.state.formServices.timeService || "Menos de 1 mes"}
                                    rate={this.state.formServices.rateJob || "$3'500.000 - $5'300.000"}
                                    timeRate={this.state.formServices.TimeRateJob || "Quincenal"}
                                    description={this.state.formServices.descriptionService || "Realiza una breve descripción del servicio que necesitas."}
                                    skills={this.state.dataSkills || ["Innovación", "liderazgo", "Manejo del tiempo"]}
                                    urgent={this.state.formServices.urgentJob || undefined} />
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

export default NewVacant