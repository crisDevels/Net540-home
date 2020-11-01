import React from 'react'

const imageB = 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/EyvF0jkPg/videoblocks-young-european-businessman-dancing-in-circle-with-colleagues-at-office-party-celebrating-career-promotion-slow-motion_rdzssrivb7_thumbnail-1080_01.png'

var ImageBack = {
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('+ imageB +')',
    backgroundAttachment: 'fixed'
}
export const HeroLanding = () => (
  <div style={ImageBack} className='container-block-hero'></div> 
)