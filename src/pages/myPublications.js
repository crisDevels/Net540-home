import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import api from '../api'

import { NavBar } from '../components/NavBar';

import ListPublications from '../components/listPublications'
import { NewRegistry } from './newRegistry';

import PageLoading from '../pages/pageLoading'

import ILUpublication from '../images/iluPublications.svg'

import LoaderSkeletonPublicationList from '../components/loaderPublicationList'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'

const MyPublications = () => {
  const [ user, setUser ] = useState(null)
  const [ isLoading, setLoading ] = useState(true)
  const [ isLoadingUser, setLoadingUser ] = useState(true)
  const [ dataWorks, setDataWorks ] = useState([])
  const [ error, setError ] = useState(null)
  
  useEffect (() => {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if(mounted) {
        setUser(user)
        setLoadingUser(false)
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

  return <React.Fragment>
    {
    isLoadingUser ? <PageLoading /> : <div>
      <NavBar />
      <div className="wrapper-border">       
        {
        user &&
          <div>
            <div className="flex-feed">
              <div className="col-50">
                <div className='block-center-feed'>
                  { isLoading ? <LoaderSkeletonPublicationList /> : 
                    <ListPublications feed={dataWorks} />
                  }
                </div>
              </div>
              <div className="container-ILU-hero-public">
                <div className='block-center-feed'>
                  <h2 className="title-publication-ilu">Selecciona una de tus publicaciones</h2>
                  <img alt="ilustración del feed" src={ILUpublication}/>
                </div>
              </div>
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

export default MyPublications;