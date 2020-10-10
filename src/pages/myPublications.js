import React from 'react'
import firebase from 'firebase'
import api from '../api'

import NavBar from '../components/NavBar';

import ListPublications from '../components/listPublications'
import SearchFeed from '../components/searchFeed'

import PageLoading from '../pages/pageLoading'

import ILUpublication from '../images/iluPublications.svg'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

class MyPublications extends React.Component {
    
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
    this.fetchDataWorks()
  }

  fetchDataWorks =  async () => {
    this.setState({isLoading: true, error: null})
    try {
      const dataWorks = await api.works.list();
      this.setState({ loading: false, dataWorks: dataWorks })
    } catch(error) {
      this.setState({ loading: false, error: error})
    }
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
                        < ListPublications feed={this.state.dataWorks} />
                      </div>
                      <div className="container-ILU-hero-public">
                        <div>
                          <h2 className="title-publication-ilu">Selecciona una de tus publicaciones</h2>
                          <img alt="ilustración del feed" src={ILUpublication}/>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                
                {
                  !this.state.user &&
                  
                  <div>
                  <div className="flex-feed">
                    <div className="col-50">
                      <ListPublications  handleClick={this.infoComplete}
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
            </div>
        }
    </React.Fragment>

  }
}

export default MyPublications;