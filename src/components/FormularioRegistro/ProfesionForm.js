import React from 'react';
import firebase from 'firebase';

import NavBar from '../NavBar';
import Footer from '../../components/footer.js'
import RegistroPage from '../../components/registroPage';
import PageLoading from '../../pages/pageLoading'

import plusImage from './images/plus.svg'
import equis from './images/cerrar.svg'

import './stylesForm/formStyles.css'

class ProfesionForm extends React.Component {

  state = {
    user: null,
    loading: true,
    dataProfesional: [],
    conteoSkills: 0,
    dataSkills: [],
  }

  // Autentificación del usuario en formulario empresas
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ 
        user,
        loading: false,
      })
    })
        
    firebase.database().ref("dataProfesional").on("child_added", snapshot => {
      this.setState({
        dataProfesional: this.state.dataProfesional.concat(snapshot.val()),
      })
    })
  }

  handleInputChange = (event) => {
    // const nextSkill = this.state.dataSkills
    // nextSkill[event.target.name] = event.target.value;
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  handleChangeData = (event) => {
    const nextSkill = this.state.dataProfesional
    nextSkill[event.target.name] = event.target.value;
    this.setState({
      dataProfesional : nextSkill,
    });
  } 

  //agregar y borrar skills de state
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
      skillsUser: this.state.skillsUser,
    })
    console.log(this.state)
  }

  borrar = (i) => {
    var newSkill = this.state.dataSkills;
    newSkill.splice(i, 1)
    this.setState ({
      dataSkills: newSkill,
    })
  }

  // submit de datos a firebase
  submitPersonalProfesional = (e)=> {
    e.preventDefault();
    const record = {
      profesionUser: this.state.dataProfesional.profesionUser,
      specialtyUser: this.state.dataProfesional.specialtyUser,
      dataSkills: this.state.dataSkills,
      rateUser: this.state.dataProfesional.rateUser,
      TimeRateUser: this.state.dataProfesional.TimeRateUser,
    }
    const dbRef = firebase.database().ref('dataProfesional');
    const newPage = dbRef.push();
    newPage.set(record);
  }
    
  render () {
    return <React.Fragment>
      {
      this.state.loading ? <PageLoading /> : <div>
        <NavBar />
          <div className="wrapper-border">
            {
            this.state.user &&
              <div className="wrapper-form">
                <h2 className="title-form-profesional">{this.state.user.displayName}, queremos conocer algunas cosas de ti</h2>
                <div>
                  <form onSubmit={this.submitPersonalProfesional}>
                    <div className="formBlock-profesional">
                      <div className="flex-form">
                        <span className="block-input">
                          <label>¿Cuál es tu campo de acción?</label><br/>
                          <input
                          onChange={this.handleChangeData} 
                          className="formInput" 
                          type="text"
                          name="profesionUser"
                          placeholder="Escribe el area que consideres"
                          list="areaProfesional" />
                          <datalist id="areaProfesional">
                            <select>
                              <option>Diseño</option>
                              <option>Construcción</option>
                              <option>Software/IT</option>
                              <option>Legal</option>
                            </select>
                          </datalist>
                        </span>
                        <span className="block-input">
                          <label>¿Cúal es tu especialidad?</label><br/>
                          <input
                          onChange={this.handleChangeData} 
                          className="formInput" 
                          type="text"
                          name="specialtyUser"
                          placeholder="Escribe tu campo de acción"
                          list="cargoProfesional" />
                          <datalist id="cargoProfesional">
                            <select>
                              <option>Arquitectura</option>
                              <option>Ingenieria Civil</option>
                              <option>Administración</option>
                              <option>Diseñador</option>
                              <option>Asesoria Legal</option>
                              <option>Ilustración</option>
                            </select>
                          </datalist>
                        </span>
                      </div>
                      <div className="flex-form">
                        <span className="block-input">
                          <label>¿Cuales son tus mejores habilidades?</label><br/>
                          <div className="flex-skills">
                            <input
                            onChange={this.handleInputChange} 
                            className="formInput" 
                            type="text"
                            name={"skillsUser"}
                            placeholder="Comparte tus habilidades"
                            // value={this.state.skillsUser}
                            list="skillsProfesional" />
                            <datalist id="skillsProfesional">
                              <select>
                                <option>Puntualidad</option>
                                <option>Disciplina</option>
                                <option>Adaptabilidad</option>
                                <option>Proactividad</option>
                                <option>Organización</option>
                                <option>Autenticidad</option>
                              </select>
                            </datalist>
                            <button type="button" onClick={this.agregarSkill} className="button-agregar"><img alt="plus-Add" src={plusImage} width="15px"/></button>
                          </div>
                          <div className="list-skills">
                            <div>
                              <ul className="container-list-skills">
                                {
                                this.state.dataSkills.map((skill, i)=>{
                                  return (
                                    <li key={skill.conteoSkills} className="containerSkills">
                                      {skill.skillsUser}
                                      <div className="button-remove" onClick={this.borrar.bind(this, i)}><img alt="button-remove-skill" src={equis} width="9px"/></div> 
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </span>
                        <span className="block-input">
                          <label>¿Cúal es el valor de tu servicio?</label><br/>
                          <div className="flex-skills">
                            <div className="formInput-salario">
                              <select 
                              className="input-no-styles-selection-salario"
                              onChange={this.handleChangeData} 
                              type="text"
                              name={"rateUser"}>
                                <option>Menos de 1'760.000</option>
                                <option>1'760.000 - 2'630.000</option>
                                <option>2'630.000 - 3'500.000</option>
                                <option>3'500.000 - 5'300.000</option>
                                <option>5'300.000 o más</option>
                              </select>
                            </div>
                            <div className="formInput-tiempo">
                              <select 
                              className="input-no-styles-selection-time"
                              onChange={this.handleChangeData} 
                              type="text"
                              name={"TimeRateUser"}>
                                <option>Quincena</option>
                                <option>Mes</option>
                                <option>Proyecto</option>
                                <option>Asesoria</option>
                              </select>
                            </div>
                          </div>
                        </span>   
                      </div>
                    </div>
                    <div className="buttons-flex">
                      <div>
                        <button className="button-siguiente">Continuar</button>
                      </div>       
                    </div>
                  </form>
                </div>
              </div>
            }
            {
            !this.state.user && <div className="containerRegistre">
              <div className="wrapper-registre">
                <RegistroPage />
              </div>
              <Footer />
            </div>
            }
          </div>
        </div>
      }
    </React.Fragment>
  }
}

export default ProfesionForm;