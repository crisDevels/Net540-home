import React, { Fragment, useEffect, useState } from 'react'
import firebase from 'firebase';
import { CarruselPopular } from '../components/LandingComp/CarruselPopular'
import { HeroContent } from '../components/LandingComp/HeroContent'
import { BlockAreaLanding } from '../components/LandingComp/BlockAreaLanding'
import BlockLandingBlog from '../components/LandingComp/BlockBlogLanding'

import { NavLanding } from '../components/LandingComp/NavLanding'
import Footer from '../components/footer'
import BlockFunciona from '../components/LandingComp/BlockFunciona'
import { BlockCallToAction } from '../components/LandingComp/BlockCallToAction'
import PageLoading from './pageLoading'
import { HeroILU } from '../components/LandingComp/ILUanimation/BlockILUHero';
import { ServicesPopular } from '../components/LandingComp/ServicesPopular/blockServicesPopular';
import { WhyJoobbiILU } from '../components/LandingComp/whyILUS/blockILUSWhy';

export const LandingHome = () => {
  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect (()=> {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if(mounted) {
        setUser(user)
        setLoading(false)       
      }
    })
    return function cleanup () {
       mounted = false
    }
  }, [])

  return (
    <Fragment>
      {
        loading ? <PageLoading /> : <Fragment>
          {user ? <Fragment> {window.location.href= '/works'} </Fragment> : 
            <Fragment>
              <NavLanding />
              <HeroILU />
              <HeroContent />
              <ServicesPopular />
              <WhyJoobbiILU />
              <BlockAreaLanding />
              <BlockFunciona />
              <BlockLandingBlog />
              <BlockCallToAction />
              <Footer />
            </Fragment>
          }
      </Fragment>
      }
    </Fragment>
  )
}