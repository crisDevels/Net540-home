import React from 'react'
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

class LandingHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
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
      </React.Fragment>
    )
  }
}

export default LandingHome