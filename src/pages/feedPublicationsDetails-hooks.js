import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import api from '../api'
import ReactDOM from 'react-dom'

import { NavBar } from '../components/NavBar';

import ListPublications from '../components/listPublications'
import WorkDetailsEdit from '../components/workDetailsEdit'
import ModalDelete from '../components/Modales/modalDelete';
import ModalDesactive from '../components/Modales/modalDesactive';
import PageLoading from './pageLoading'
import LoaderSkeletonPublicationList from '../components/loaderPublicationList'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'
import { NewRegistry } from './newRegistry';

const FeedPublicationsDetails = (props) => {
  const [ user, setUser ] = useState(null)
  const [ isLoading, setLoading ] = useState(true)
  const [ LoadingUser, setLoadingUser ] = useState(true)
  const [ LoadingReData, setReLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ blockWorkExtend, setBlockBlockExtend ] = useState('block-active')
  const [ modalAplication, setModalAplication ] = useState('none')
  const [ modalOverlay, setModalOverlay ] = useState('col-50-modal')
  const [ overlayApplication, setOverlayAplication ] = useState('none')
  const [ dataWorks, setDataWorks ] = useState([])
  const [ dataWorksLarge, setDataWorksLarge ] = useState([])
  const [ isOpenDelete, setIsOpenDelete ] = useState(false)
  const [ isOpenDesactive, setIsOpenDesactive ] = useState(false)
  const [ overlay, setOverlay ] = useState('none')

  useEffect(() => {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if (mounted) {
        setUser(user)
        setLoadingUser(false)
      }
    })
    return function cleanup () {
      mounted = false
    }
  }, [])

  useEffect(() => {
    const fetchDataWorks =  async () => {
      setLoading(true)
      setError(null)
      try {
        const dataWorks = await api.works.list();
        setLoading(false)
        setDataWorks(dataWorks)
      } catch(error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchDataWorks()
  }, [])

  useEffect(() => {
    const readFetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await api.works.read(props.match.params.workId)
        setLoading(false)
        setDataWorksLarge(data)
      }catch(error) {
        setLoading(false)
        setError(error)
      }
    }
    readFetchData()
  }, [])

  const DeletePublication = async (e) => {
    setLoading(true)
    setError(null)
    try {
      setLoading(false)
      setError(null)
      await api.works.remove (
        props.match.params.workId
      )
      props.history.push('/my-publications')
    } catch(error) {
      setLoading(false)
      setError(error)
    }
  }

   const DeleteOpenModal = ()=> {
    if(!isOpenDelete) {
      setOverlay('overlayActive')
      setIsOpenDelete(true)
      setModalOverlay('col-50-modal-Active')
      setOverlayAplication('overlay-Active')
    }else {
      setOverlay('none')
      setIsOpenDelete(false)
      setModalOverlay('col-50-modal')
      setOverlayAplication('none')
    }
  }

  const DesactiveOpenModal = ()=> {
    if(!isOpenDesactive) {
      setOverlay('overlayActive')
      setIsOpenDesactive(true)
      setModalOverlay('col-50-modal-Active')
      setOverlayAplication('overlay-Active')
    }else {
      setOverlay('none')
      setIsOpenDesactive(false)
      setModalOverlay('col-50-modal')
      setOverlayAplication('none')
    }
  }

  const infoCarge = async ()=> {
    setDataWorksLarge([])
    setReLoading(true)
    setError(null)
    if(LoadingReData) {
      try {
        const reDatas = await api.works.read(props.match.params.workId)
        setReLoading(false)
        setDataWorksLarge(reDatas)
      }catch(error) {
        setReLoading(false)
        setError(error)
      }
    }
  }

  return <React.Fragment>
      {
      LoadingUser ? <PageLoading /> : <div>
        <NavBar />
        <div onClick={DesactiveOpenModal} className={overlay}></div>
        <div className="wrapper-border">
          {
          user &&
            <div>
              <div className="flex-feed">
                <div className="col-50">
                  <div className='block-center-feed'>
                    <div className="container-worksList">
                      { isLoading ? <LoaderSkeletonPublicationList /> : 
                        <ListPublications 
                        handleClick={infoCarge}
                        feed={dataWorks} />
                      }
                    </div>
                  </div>
                </div>
              <div className="col-50-">
                <div className='block-center-feed-details'>
                  <WorkDetailsEdit 
                  DesactiveOpenModal={DesactiveOpenModal}
                  DeleteOpenModal={DeleteOpenModal} 
                  block={blockWorkExtend}
                  dataNull = {dataWorksLarge}
                  reLoading = {LoadingReData}
                  id={dataWorksLarge.id}
                  title={dataWorksLarge.titleService}
                  area={dataWorksLarge.areaService}
                  modality={dataWorksLarge.modalityJob}
                  specialty={dataWorksLarge.specialtyService}
                  location={dataWorksLarge.locationJob}
                  time={dataWorksLarge.timeService}
                  rate={dataWorksLarge.rateJob}
                  timeRate={dataWorksLarge.TimeRateJob}
                  titleDescription={dataWorksLarge.titleDescription}
                  description={dataWorksLarge.descriptionService}
                  descriptions={dataWorksLarge.dataDescriptions}
                  skills={dataWorksLarge.dataSkills}
                  urgent={dataWorksLarge.urgentJob}
                  verify={dataWorksLarge.verify} />
                </div>
              </div>
              {ReactDOM.createPortal(
                <ModalDelete 
                isOpenDelete={isOpenDelete} 
                DeleteOpenModal={DeleteOpenModal}
                DeletePublication={DeletePublication} />,
                document.getElementById('modalDelete')
              )}
              {ReactDOM.createPortal(
                <ModalDesactive 
                isOpenDesactive={isOpenDesactive} 
                DesactiveOpenModal={DesactiveOpenModal} />,
                document.getElementById('modalDesactive')
              )}
              </div>
            </div>
          }
          {
          !user &&
            <NewRegistry />
          }
          </div>
        </div>
      }
    </React.Fragment>
}

export default FeedPublicationsDetails;