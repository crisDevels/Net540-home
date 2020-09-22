import React from 'react'
import firebase from 'firebase'

import NavBar from '../components/NavBar';
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';

import ListWorks from '../components/listWorks'
import SearchFeed from '../components/searchFeed'

import PageLoading from '../pages/pageLoading'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

class FeedVacant extends React.Component {
    
  state = {
    user: null,
    isLoading: true,
    modalOverlay: "col-50-modal",
    blockBuscar: "flex-search",
    dataWorks: [],
  }
   
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user,
        isLoading: false,
      })
    })

    setTimeout(() => {
      this.setState({
        dataWorks: [
          {
              id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
              titleService: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              areaService: 'Metalmecánico',
              modalityJob: 'Remoto',
              specialtyService: 'Planimetria de producto',
              locationJob: 'Medellín',
              timeService: 'Menos de 1 mes',
              rateJob: "$3'500.000 - $5'300.000",
              TimeRateJob: "Quincenal",
              descriptionService: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum. Fusce dignissim libero in erat luctus sollicitudin. Ut nulla tellus, scelerisque et finibus vel, congue id turpis. Duis metus orci, faucibus id lacinia quis, maximus non nisl. Vivamus tempor hendrerit leo ut ultrices. Sed convallis vulputate ex, sed molestie risus commodo eu. Vestibulum eget nisl et nisi iaculis euismod. Suspendisse facilisis venenatis mi eget tincidunt. Aenean sed urna lorem. Fusce sodales sagittis condimentum.",
              shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum...",
              dataSkills: [
                {
                  skillsUser: "Amor",
                  conteoSkills: "0", 
                },
                {
                  skillsUser: "Innovación",
                  conteoSkills: "1", 
                },
                {
                  skillsUser: "Proactividad",
                  conteoSkills: "2", 
                },
                {
                  skillsUser: "Respeto",
                  conteoSkills: "3", 
                },
              ],
              urgentJob: "URGENTE",
          },
          {
            id: '2de30c42-9deb-40th-a41f-05e62b5939a7',
            titleService: 'Ingeniero Mecatrónico',
            areaService: 'Metalmecánico',
            modalityJob: 'Remoto',
            specialtyService: 'Planimetria de producto',
            locationJob: 'Medellín',
            timeService: 'Menos de 1 mes',
            rateJob: "$3'500.000 - $5'300.000",
            TimeRateJob: "Quincenal",
            descriptionService: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum. Fusce dignissim libero in erat luctus sollicitudin. Ut nulla tellus, scelerisque et finibus vel, congue id turpis. Duis metus orci, faucibus id lacinia quis, maximus non nisl. Vivamus tempor hendrerit leo ut ultrices. Sed convallis vulputate ex, sed molestie risus commodo eu. Vestibulum eget nisl et nisi iaculis euismod. Suspendisse facilisis venenatis mi eget tincidunt. Aenean sed urna lorem. Fusce sodales sagittis condimentum.",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum...",
            dataSkills: [
                {
                  skillsUser: "Amor",
                  conteoSkills: "0", 
                },
                {
                  skillsUser: "Innovación",
                  conteoSkills: "1", 
                },
                {
                  skillsUser: "Proactividad",
                  conteoSkills: "2", 
                },
                {
                  skillsUser: "Respeto",
                  conteoSkills: "3", 
                },
              ],
              urgentJob: "",
          },
          {
            id: '2de30c42-9frb-40th-a41f-05e62b5939a7',
            titleService: 'Ingeniero Mecatrónico',
            areaService: 'Metalmecánico',
            modalityJob: 'Remoto',
            specialtyService: 'Planimetria de producto',
            locationJob: 'Medellín',
            timeService: 'Menos de 1 mes',
            rateJob: "$3'500.000 - $5'300.000",
            TimeRateJob: "Quincenal",
            descriptionService: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum. Fusce dignissim libero in erat luctus sollicitudin. Ut nulla tellus, scelerisque et finibus vel, congue id turpis. Duis metus orci, faucibus id lacinia quis, maximus non nisl. Vivamus tempor hendrerit leo ut ultrices. Sed convallis vulputate ex, sed molestie risus commodo eu. Vestibulum eget nisl et nisi iaculis euismod. Suspendisse facilisis venenatis mi eget tincidunt. Aenean sed urna lorem. Fusce sodales sagittis condimentum.",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin elit ligula, a sollicitudin nulla luctus non. Morbi volutpat fringilla ipsum nec interdum...",
            dataSkills: [
                {
                  skillsUser: "Amor",
                  conteoSkills: "0", 
                },
                {
                  skillsUser: "Innovación",
                  conteoSkills: "1", 
                },
                {
                  skillsUser: "Proactividad",
                  conteoSkills: "2", 
                },
                {
                  skillsUser: "Respeto",
                  conteoSkills: "3", 
                },
              ],
              urgentJob: "URGENTE",
          },
        ]
      })
    }, 3000)
  }

  render () {
    return <React.Fragment>
        {this.state.isLoading ? 
            <PageLoading /> :

            <div className="wrapper-border">
                <div>
                    <NavBar />
                </div>
                {
                  this.state.user &&
    
                  <div>
                    <div className="flex-feed">
                      <div className="col-50">
                        <ListWorks  handleClick={this.infoComplete}
                                    feed={this.state.dataWorks} />
                      </div>
                      <div className="container-modales">
                        <div className={this.state.modalOverlay}>
                          <SearchFeed blockSearch={this.state.blockBuscar} />
                        </div>
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

export default FeedVacant;