import React from 'react'
import { Link } from 'react-router-dom'

import './stylesServicesPopular.css'

export const ServicesPopular = () => {
  return (
    <div className='block-nuestros-servicios'>
    <div className='wrapper-services'>
      <h2 className='title-joobbi'>Servicios populares</h2>
      <div className='flex-services-joobbi'>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-1'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/resume-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>Resume Design</h3>
                <p className='subtitle-services-home'>Desarrolla un <strong>Curriculum</strong> más llamativo para los clientes.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>13,25</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-2'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/branding-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>Branding corporativo</h3>
                <p className='subtitle-services-home'>Muestra tu marca con nuestro diseño de <strong>Branding Corporativo</strong>.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>130</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-3'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/android-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>Desarrollo apps android</h3>
                <p className='subtitle-services-home'>Implementa <strong>Aplicaciones android</strong> para que conozcan tu negocio.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>120</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-4'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/copywriting-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>Copywriting</h3>
                <p className='subtitle-services-home'>Posiciona tu negocio con<strong>Copywriting</strong>, textos redactados por expertos.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>140</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-5'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/model3d-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>Modelado 3D</h3>
                <p className='subtitle-services-home'>Construye un <strong>Modelado 3D</strong> para presentar tus productos.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>120</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className='link-services' to='/works/'>
          <div className='container-service-item-6'>
            <div className='cover-color-blue'></div>
            <div className='container-image-ilu'>
              <div className='block-image-relative'>
                <div className='circle-blue'></div>
                <img alt='ilu-resume-design' className='position-image-services' src='https://joobbi.com/wp-content/uploads/2020/11/e-commerce-short.png' />
              </div>
            </div>
            <div className='flex-description-services'>
              <div className='container-description-service'>
                <h3 className='title-services-home'>eCommerce</h3>
                <p className='subtitle-services-home'>Un <strong>eCommerce</strong> o tienda online es una elemento indispensable para las empresas.</p>
                <p className='rate-service-home'>Desde <strong>$</strong>90</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}