import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import api from '../api'

import { NavBar } from '../components/NavBar';

import ListWorks from '../components/listWorks'
import SearchFeed from '../components/searchFeed'

import PageLoading from '../pages/pageLoading'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

const  FeedVacant = ()=> {
  const [ user, setUser ] = useState(null)
  const [ isLoading, setLoading ] = useState(true)
  const [ dataWorks, setDataWorks ] = useState([])
  const [ areaService, setAreaService ] = useState('Selecciona un área')
  const [ modalArea, setModalArea ] = useState('none')
  const [ isOpenModalArea, setisOpenModalArea ] = useState(false)
  const [ overlay, setOverlay ] = useState('none')
  const [ specialty, setSpecialty ] = useState('Selecciona una especialidad')
  const [ isOpenModalSpecial, setIsOpenModalSpecial ] = useState(false)
  const [ modalSpecial, setModalSpecial ] = useState('none')
  const [ error, setError ] = useState(null)
  
  useEffect (() => {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if (mounted) {
        setUser(user)
        setLoading(false)
      }
    })
    return function cleanup() {
      mounted = false
    }
  }, [])

  useEffect (() => {
    fetchDataWorks()
  }, [])

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

  //click Modal Area 
  const clickOpenModalArea = ()=> {
    setModalArea('modal-options-area')
    setisOpenModalArea(true)
    setOverlay('overlayActive')
  }

  const closeModalArea = ()=> {
    setModalArea('none')
    setOverlay('none')
  }

  //metodos para abrir y cerrar modal de special
  const openModalSpecial = ()=> {
    setModalSpecial('modal-options-area')
    setIsOpenModalSpecial(true)
    setOverlay('overlayActive')
  }

  const closeModalSpecial = ()=> {
    setModalSpecial('none')
    setOverlay('none')
  }

  return <React.Fragment>
    {isLoading ? <PageLoading /> :
      <div>
        <NavBar />
        <div className="wrapper-border">
          <div>
            <div className="flex-feed">
              <div className="col-50">
                <div className='block-center-feed'>
                  <ListWorks feed={dataWorks} />
                </div>
              </div>
              <div className="col-50-search">
                <div className='block-center-feed'>
                  <div className='col-50-modal'>
                    <SearchFeed
                    areaSelected={areaService}
                    modalArea={modalArea}
                    overlay={overlay}
                    isOpenModalArea={isOpenModalArea}
                    onChangeArea={(ev) => {setAreaService(ev.target.value)}}
                    clickOpenModalArea={clickOpenModalArea}
                    closeModalArea={closeModalArea}
                    /* props para modal special */
                    specialty = {specialty}
                    onChangeSpecialty={(ev) => {setSpecialty(ev.target.value)}}
                    isOpenModalSpecial={isOpenModalSpecial}
                    modalSpecial={modalSpecial}
                    clickOpenModalSpecial={openModalSpecial}
                    closeModalSpecial={closeModalSpecial} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </React.Fragment>
}

export default FeedVacant;