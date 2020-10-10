import React from 'react'
import firebase from 'firebase'
import api from '../api'

import NavBar from '../components/NavBar';

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
    query: ""
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

  changeQuery = (e)=> {
    this.setState ({
      query: e.target.value
    })
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
                        <ListWorks feed={this.state.dataWorks} />
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
            </div>
        }
    </React.Fragment>

  }
}

export default FeedVacant;