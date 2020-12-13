import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './styles/stylesListWork.css'
import './styles/PublicationStyle.css'
import './styles/modales.css'

import LoaderSkeletonWorkList from './loaderWorkList'

import { ComponentWork } from './componentWorks'

function ListWorks(props) {
  const feed = props.feed
  if(feed.length === 0) {
    return (
      <LoaderSkeletonWorkList />
    )
  }

  return (
    <Fragment>
      <div className="title-works">
        <h2 className='title-list-works-feed'>Trabajos que pueden ser de tu interés</h2>
      </div>  
      <ul className="list-unstyled-feed">
      {
        feed.map((dataWork) => {
          return (
            <li onClick={props.handleClick} key={dataWork.id}>
              <Link to={`/works/${dataWork.id}`}>
                <ComponentWork dataWork={dataWork} />
              </Link>
            </li>
          );}).reverse()
        }
      </ul>
    </Fragment>
    )
}

export default ListWorks;