import React, { useEffect, useState, Fragment } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'

import loader from '../images/loader.gif';
import { NavBar } from '../components/NavBar';

export const FeedProfesional = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
  })

  return (
    <Fragment>
      {loading ?
        <div className="wrapper-home">
          <div className="loader-flex">
            <img alt="loader-skills" src={loader}/>
          </div>
        </div> : 
        <div>
          <NavBar />
          <div className="wrapper-border">
            {user &&
              <div> 
                hola {user.displayName} 
              </div>
            }
            {!user && <div className="containerRegistre">
              Por favor Regístrate <Link to='registro-freelancer'>aquí</Link>
            </div> 
            }
          </div>
        </div>
      }
    </Fragment>
  )
}