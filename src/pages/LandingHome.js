import React from 'react'
import firebase from 'firebase';
import { CarruselPopular } from '../components/LandingComp/CarruselPopular'
import { HeroContent } from '../components/LandingComp/HeroContent'
import { HeroLanding } from '../components/LandingComp/HeroLanding'
import { WhyJooby } from '../components/LandingComp/BlockWhyJoobbi'
import { BlockAreaLanding } from '../components/LandingComp/BlockAreaLanding'
import BlockLandingBlog from '../components/LandingComp/BlockBlogLanding'

import NavLanding from '../components/LandingComp/NavLanding'
import Footer from '../components/footer'
import BlockFunciona from '../components/LandingComp/BlockFunciona'
import { BlockCallToAction } from '../components/LandingComp/BlockCallToAction'
import PageLoading from './pageLoading'

class LandingHome extends React.Component {
  state = {
    user: null,
    loading: true,
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.user ? <div> <PageLoading /> {window.location.href= '/works'} </div> : <div>
          <NavLanding />
          <HeroLanding />
          <HeroContent />
          <CarruselPopular />
          <WhyJooby />
          <BlockAreaLanding />
          <BlockFunciona />
          <BlockLandingBlog />
          <BlockCallToAction />
          <Footer />
        </div>
        }
      </React.Fragment>
    )
  }
}

export default LandingHome