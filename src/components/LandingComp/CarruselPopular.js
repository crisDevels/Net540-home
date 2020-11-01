import React from 'react'
// import { link } from 'react-router-dom'

const BrandingImage = 'https://www.asdeideas.es/wp-content/uploads/2017/09/branding-corporativo-madrid.jpg'
const AppImage = 'https://www.designveloper.com/wp-content/uploads/2019/11/Pharmagy-Medical-App-Sketchapp.jpg'
const copyImage = 'https://miro.medium.com/max/12000/1*UYuLF_F5HEE_F-fypvQkKQ.jpeg'
const apiImage = 'https://cdn.joinnus.com/blog/wp-content/uploads/2019/04/02170313/develop.jpg'
const webImage = 'https://i0.wp.com/20htalent.es/wp-content/uploads/2018/07/Landing-pages-background.jpg?w=1300&ssl=1'
const tresDImage = 'https://www.3dnatives.com/en/wp-content/uploads/sites/2/2020/07/cover.jpg'


export const CarruselPopular = (props) => {
  return (
    <React.Fragment>
      <div className='block-carrusel-relative'>
        <div className='wrapper-most-popular'>
          <p className='title-carrusel'>Trabajos destacados en Joobbi</p>
          <div className='container-box-popular'>
            <div className='container-scroll-popular'>
              <ul className='list-pupular-most'>
                <li>
                  <div className="sector-item-popular">
                      <img src={BrandingImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Branding Corporativo</p>
                  </div>
                </li>
                <li>
                  <div className="sector-item-popular">
                      <img src={AppImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Diseño de app's</p>
                  </div>
                </li>
                <li>
                  <div className="sector-item-popular">
                      <img src={copyImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Copywriting para socialmedia</p>
                  </div>
                </li>
                <li>
                  <div className="sector-item-popular">
                      <img src={apiImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Desarrollo de APIs</p>
                  </div>
                </li>
                <li>
                  <div className="sector-item-popular">
                      <img src={webImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Desarrollo web</p>
                  </div>
                </li>
                <li>
                  <div className="sector-item-popular">
                      <img src={tresDImage} alt='imagen de sector' className='imagen-sector' />
                      <p className='text-sector-popular'>Modelado 3d</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}