import React from 'react'
import firebase from 'firebase'

import NavBar from '../components/NavBar';
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';

import loader from '../images/loader.gif';

class FeedProfesional extends React.Component {
    
    state = {
        user: null,
        loading: true,
        dataProfesional: [],
    }

    componentDidMount () {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
                loading: false,
            })
        })

        const dbRef = firebase.database().ref('dataProfesional');
        dbRef.on("child_added", snapshot => {
            this.setState({
                dataProfesional: this.state.dataProfesional.concat(snapshot.val())
            })
        })
    }

    render () {
        return <React.Fragment>
            {this.state.loading ?
            <div className="wrapper-home">
                <div className="loader-flex">
                    <img alt="loader-skills" src={loader}/>
                </div>
            </div> :

            <div className="wrapper-border">
                {this.state.user &&
                    <div>
                        <NavBar />
                        
                        {
                            this.state.dataProfesional.map((dataUser) => {
                                return <React.Fragment>
                                    <div>
                                        <div className="col-50">
                                        <p>Sector: {dataUser.profesionUser}</p>
                                            <h2>{dataUser.specialtyUser}</h2>
                                            <p>Costo del servicio: {dataUser.rateUser} por {dataUser.TimeRateUser}</p>
                                            
                                                {dataUser.dataSkills.map((skill)=>{
                                                    return (
                                                        <li key={skill.conteoSkills} className="containerSkills">
                                                            {skill.skillsUser} 
                                                        </li>
                                                    )
                                                })}
                                            
                                        </div>
                                    </div>
                                </React.Fragment>
                            })
                        }
                
                    </div>
                }

                {!this.state.user &&
                  
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

export default FeedProfesional;