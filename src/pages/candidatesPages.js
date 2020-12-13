import React from 'react'
import firebase from 'firebase'
import api from '../api'

import { NavBar } from '../components/NavBar'
import PageLoading from '../pages/pageLoading'
import ListPublications from '../components/listPublications'
import { NewRegistry } from './newRegistry';
import { ListCandidates } from '../components/listCandidates'

import '../components/styles/popRegistro.css'
import './styles/feedStyles.css'
import { PanelCandidates } from '../components/panelCandidates'

import LoaderSkeletonPublicationList from '../components/loaderPublicationList'

// import { candidates } from '../../api/db.json'

class CandidatesPage extends React.Component {
  state = {
    candidates : [
      {
        id: "1D348",
        name: "Daniel Pachón",
        deny: false,
        check: false,
        title: 'Marketing Manager and Social Media',
        description: 'Soy una persona emprendedora, con la capacidad de generar nuevas estratégias para la fidelización de clientes de una marca.',
        skills: [
          {
            id: 1,
            skillRef: 'Hubspot',
          },
          {
            id: 2,
            skillRef: 'Emprendedora',
          },
          {
            id: 3,
            skillRef: 'Liderazgo',
          },
          {
            id: 4,
            skillRef: 'Facebook Ads',
          },
        ]
      },
      {
        id: "1D3e3",
        name: "Daniela Zambrano",
        deny: false,
        check: false,
        title: 'Community Mananger',
        description: 'Soy una persona emprendedora, con la capacidad de generar nuevas estratégias para la fidelización de clientes de una marca.',
        skills: [
          {
            id: 1,
            skillRef: 'Hubspot',
          },
          {
            id: 2,
            skillRef: 'Emprendedora',
          },
          {
            id: 3,
            skillRef: 'Liderazgo',
          },
          {
            id: 4,
            skillRef: 'Facebook Ads',
          },
        ]
      },
      {
        id: "1D343",
        name: "Paula Jimenez",
        deny: false,
        check: false,
        title: 'Creadora Visual',
        description: 'Soy una persona emprendedora, con la capacidad de generar nuevas estratégias para la fidelización de clientes de una marca.',
        skills: [
          {
            id: 1,
            skillRef: 'Hubspot',
          },
          {
            id: 2,
            skillRef: 'Emprendedora',
          },
          {
            id: 3,
            skillRef: 'Liderazgo',
          },
          {
            id: 4,
            skillRef: 'Facebook Ads',
          },
        ]
      },
    ],
    dataWorks: [],
    user: null,
    isLoading: true,
    modalOverlay: "col-50-modal",
    blockBuscar: "flex-search",
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

  render() {
    return (
      <React.Fragment>
        {
        this.state.isLoading ? <PageLoading /> : <div>
          <NavBar />
          <div className="wrapper-border">       
          {
          this.state.user &&
            <div>
              <div className="flex-feed">
                <div className="col-50-list-publications">
                  <div className='block-center-feed'>
                    { this.state.isLoading ? <LoaderSkeletonPublicationList /> : 
                    <ListPublications feed={this.state.dataWorks} />
                    }
                  </div>
                </div>
                <div className='col-50-list-candidates'>
                  <div className='block-center-feed'>
                    <PanelCandidates />
                    <ListCandidates candidates={this.state.candidates} />
                  </div>
                </div>
              </div>
            </div>
          }
          {
          !this.state.user &&
            <NewRegistry />
          }
          </div>
        </div>
        }
      </React.Fragment>
    )
  }
}

export default CandidatesPage