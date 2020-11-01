import React, { Fragment } from 'react'

const imageCall = 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2015/12/09112429/work-life-balance-working-from-home.jpg'

var backgroundCall = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('+ imageCall +')',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

export const BlockCallToAction = () => (
  <Fragment>
    <div className='wrapper-landing'>
      <div style={backgroundCall} className='block-call-to'>
        <div className='flex-container-call-to'>
            <div className='block-text-button-call'>
                <div className='container-text-call'>
                    <p className='p-styles-call'>
                    En Joobbi encuentras el talento ideal para hacer crecer
                    tu idea o negocio.
                    </p>
                </div>
                <button className='button-joobbi'>Regístrate ahora</button>
            </div>
        </div>
      </div>
    </div>
  </Fragment>
)