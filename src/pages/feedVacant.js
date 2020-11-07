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
    query: "",
    //modal de areas estados
    areaService: 'Selecciona un área',
    modalArea: "none",
    isOpenModalArea: false,
    overlay: 'none'
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
  //metodo change para el formulario de buscar
  handleChange = (e)=> {
    const { value, name } = e.target;    
    this.setState({
      [name]: value 
    })
  }
  //click Modal Area 
  clickOpenModalArea = ()=> {
    this.setState({
      modalArea: "modal-options-area",
      isOpenModalArea: true,
      overlay: 'overlayActive'
    }) 
  }

  closeModalArea = ()=> {
    this.setState({
      modalArea: "none",
      overlay: 'none'
    })
  }
  render () {
    return <React.Fragment>
      {this.state.isLoading ? <PageLoading /> :
        <div>
          <NavBar />
          <div className="wrapper-border">
            {this.state.user &&
              <div>
                <div className="flex-feed">
                  <div className="col-50">
                    <ListWorks feed={this.state.dataWorks} />
                  </div>
                  <div className="col-50-">
                    <div className={this.state.modalOverlay}>
                      <SearchFeed
                      areaSelected={this.state.areaService}
                      blockSearch={this.state.blockBuscar}
                      modalArea={this.state.modalArea}
                      overlay={this.state.overlay}
                      isOpenModalArea={this.state.isOpenModalArea}
                      onChange={this.handleChange}
                      clickOpenModalArea={this.clickOpenModalArea}
                      closeModalArea={this.closeModalArea} />
                    </div>
                  </div>
                </div>
              </div>
            }
            {!this.state.user &&
              <div>
                <div className="flex-feed">
                  <div className="col-50">
                    <ListWorks 
                    handleClick={this.infoComplete}         
                    feed={this.state.dataWorks} />
                  </div>
                  <div className="col-50-">
                    <div className={this.state.modalOverlay}>
                      <SearchFeed 
                      areaSelected={this.state.areaService}
                      blockSearch={this.state.blockBuscar}
                      modalArea={this.state.modalArea}
                      overlay={this.state.overlay}
                      isOpenModalArea={this.isOpenModalArea}
                      onChange={this.handleChange}
                      clickOpenModalArea={this.clickOpenModalArea}
                      closeModalArea={this.closeModalArea}
                       />
                    </div>
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

export default FeedVacant;