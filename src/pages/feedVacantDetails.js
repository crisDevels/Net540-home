import React from 'react'
import firebase from 'firebase'
import api from '../api'
import ReactDOM from 'react-dom'

import { NavBar } from '../components/NavBar';

import ListWorks from '../components/listWorks'
import WorkLarge from '../components/workLarge'
import ModalAplication from '../components/Modales/modalAplication'
import PageLoading from '../pages/pageLoading'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

var mounted = false

class FeedVacantDetails extends React.Component { 
  state = {
    user: null,
    isLoading: true,
    LoadingUser: true,
    LoadingReData: false,
    blockWorkExtend: "block-active",
    overlay: 'none',
    modalAplication: "none",
    modalOverlay: "col-50-modal",
    overlayApplication: "none",
    dataWorks: [],
    dataWorksLarge: [],
    isOpenAplication: false,
  }
   
  componentDidMount () {
    mounted = true
    if (mounted) {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({
          user: user,
          LoadingUser: false,
        })
      })
      this.readFetchData()
      this.fetchDataWorks()
    }
  }
  
  componentWillUnmount () {
    mounted = false
  }

  readFetchData = async () => {
    this.setState({ isLoading: true, error: null })
    try {
      const data = await api.works.read(this.props.match.params.workId)
      this.setState({
        isLoading: false,
        dataWorksLarge: data,
      })
    }catch(error) {
      this.setState({ isLoading: false, error: error})
    }

    if(this.state.LoadingReData) {
      try {
        const reDatas = await api.works.read(this.props.match.params.workId)
        this.setState({ LoadingReData: false, dataWorksLarge: reDatas })
      }catch(error) {
        this.setState({ LoadingReData: false, error })
      }
    }
  }

  fetchDataWorks =  async () => {
    this.setState({isLoading: true, error: null})
    try {
      const dataWorks = await api.works.list();
      this.setState({ isLoading: false, dataWorks: dataWorks })
    } catch(error) {
      this.setState({ isLoading: false, error: error})
    }
  }

  AplicationCup = ()=> {
    if(this.state.overlay === "none") {
      this.setState({
        isOpenAplication: true,
        overlay: 'overlayActive',
        modalAplication: "modal-aplication",
      })
    }else {
      this.setState({
        isOpenAplication: false,
        overlay: 'none',
        modalAplication: "none",
      })
    }
  }

  infoCarge = ()=> {
    this.setState({
      LoadingReData: true,
      dataWorksLarge: [],
      error: null,
    })
    this.readFetchData()
  }

  render () {
    return <React.Fragment>
      {this.state.LoadingUser ? <PageLoading /> : <div>
        <NavBar />
        <div onClick={this.AplicationCup} className={this.state.overlay}></div>
        <div className="wrapper-border">
          <div>
            <div className="flex-feed">
              <div className="col-50">
                <div className='block-center-feed'>
                  <div className="container-worksList">
                    <ListWorks 
                    handleClick={this.infoCarge}
                    feed={this.state.dataWorks} />
                  </div>
                </div>
              </div>
              <div className="col-50-">
                <div className='block-center-feed-details'>
                  <WorkLarge
                  user={this.state.user}
                  onAplication={this.AplicationCup} 
                  block={this.state.blockWorkExtend}
                  dataNull = {this.state.dataWorksLarge}
                  reLoading = {this.state.LoadingReData}
                  id={this.state.dataWorksLarge.id}
                  title={this.state.dataWorksLarge.titleService}
                  area={this.state.dataWorksLarge.areaService}
                  modality={this.state.dataWorksLarge.modalityJob}
                  specialty={this.state.dataWorksLarge.specialtyService}
                  location={this.state.dataWorksLarge.locationJob}
                  time={this.state.dataWorksLarge.timeService}
                  rate={this.state.dataWorksLarge.rateJob}
                  timeRate={this.state.dataWorksLarge.timeRateJob}
                  titleDescription={this.state.dataWorksLarge.titleDescription}
                  description={this.state.dataWorksLarge.descriptionService}
                  descriptions={this.state.dataWorksLarge.dataDescriptions}
                  skills={this.state.dataWorksLarge.dataSkills}
                  urgent={this.state.dataWorksLarge.urgentJob}
                  verify={this.state.dataWorksLarge.verify} />
                </div>
              </div>
              {ReactDOM.createPortal(
                <ModalAplication 
                onAplication={this.AplicationCup} 
                isOpenAplication={this.state.isOpenAplication} 
                modal={this.state.modalAplication} />,
                document.getElementById('modalAplication')
              )}
            </div>
          </div>
        </div>
      </div>
      }
    </React.Fragment>
  }
}

export default FeedVacantDetails;