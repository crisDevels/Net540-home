import React from 'react'
import firebase from 'firebase'
import api from '../api'

import NavBar from '../components/NavBar';
import Footer from '../components/footer.js'
import RegistroPage from '../components/registroPage';

import ListPublications from '../components/listPublications'
import WorkDetailsEdit from '../components/workDetailsEdit'
import ModalDelete from '../components/Modales/modalDelete';
import ModalDesactive from '../components/Modales/modalDesactive';
import PageLoading from '../pages/pageLoading'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

class FeedPublicationsDetails extends React.Component {
    
  state = {
    user: null,
    isLoading: true,
    LoadingUser: true,
    LoadingReData: false,
    blockWorkExtend: "block-active",
    modalAplication: "none",
    modalOverlay: "col-50-modal",
    overlayApplication: "none",
    dataWorks: [],
    dataWorksLarge: [],
    isOpenDelete: false,
    isOpenDesactive: false,
  }
   
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user,
        LoadingUser: false,
      })
    })
    this.readFetchData()
    this.fetchDataWorks()
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

  DeletePublication = async (e) => {
    this.setState ({ isLoading:true, error: null })
    try {
      this.setState ({ isLoading: false, error: null })
      await api.works.remove (
        this.props.match.params.workId
      )
      this.props.history.push('/my-publications')
    } catch(error) {
      this.setState({ isLoading: false, error: error })
    }
  }

  DeleteOpenModal = ()=> {
    if(!this.state.isOpenDelete) {
      this.setState({
        isOpenDelete: true,
        modalOverlay: "col-50-modal-Active",
        overlayApplication: "overlay-Active",
      })
    }else {
      this.setState({
        isOpenDelete: false,
        modalOverlay: "col-50-modal",
        overlayApplication: "none",
      })
    }
  }

  DesactiveOpenModal = ()=> {
    if(!this.state.isOpenDesactive) {
      this.setState({
        isOpenDesactive: true,
        modalOverlay: "col-50-modal-Active",
        overlayApplication: "overlay-Active",
      })
    }else {
      this.setState({
        isOpenDesactive: false,
        modalOverlay: "col-50-modal",
        overlayApplication: "none",
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
        {this.state.LoadingUser ? 
            <PageLoading /> :

            <div className="wrapper-border">
                <div>
                    <NavBar />
                </div>
                {this.state.user &&
                  <div>
                    <div className="flex-feed">
                      <div className="col-50">
                        <div className="container-worksList">
                          <ListPublications  handleClick={this.infoCarge}
                                             feed={this.state.dataWorks} />
                        </div>
                      </div>
                      <div className="container-modales-details">
                        <div className={this.state.overlayApplication}></div>
                        <div className={this.state.modalOverlay}>
                            <WorkDetailsEdit  DesactiveOpenModal={this.DesactiveOpenModal}
                                              DeleteOpenModal={this.DeleteOpenModal} 
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
                                              timeRate={this.state.dataWorksLarge.TimeRateJob}
                                              titleDescription={this.state.dataWorksLarge.titleDescription}
                                              description={this.state.dataWorksLarge.descriptionService}
                                              descriptions={this.state.dataWorksLarge.dataDescriptions}
                                              skills={this.state.dataWorksLarge.dataSkills}
                                              urgent={this.state.dataWorksLarge.urgentJob}
                                              verify={this.state.dataWorksLarge.verify} />
                        </div>
                        <ModalDelete isOpenDelete={this.state.isOpenDelete} 
                                     DeleteOpenModal={this.DeleteOpenModal}
                                     DeletePublication={this.DeletePublication} />
                        <ModalDesactive isOpenDesactive={this.state.isOpenDesactive} 
                                        DesactiveOpenModal={this.DesactiveOpenModal} />
                      </div>
                    </div>
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

export default FeedPublicationsDetails;