import React, { Fragment } from 'react'

export const ListArticleBlog = (props) => (
  <Fragment>
    <div className='block-list-blog'>
      <img alt='imagen blog joobbi png' src={props.cover} className="image-blog-landing" />
      <div className='container-date-blog'>
        <p className='styles-p-date-landing-blog'>{props.date}</p>
      </div>
      <div className='container-title-description-blog'>
        <p className='title-blog-landing'>{props.title}</p>
        <p className='description-blog-landing'>{props.description}</p>
      </div>
    </div>
  </Fragment>
)