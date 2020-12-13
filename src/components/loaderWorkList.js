import React from 'react'

import Skeleton from 'react-loading-skeleton'

import './styles/PublicationStyle.css'

function LoaderSkeletonWorkList() {
  return (
    <div className='publication-list'>
      <ul className="list-unstyled-feed">
        <div className="title-works">
          <h2 className='title-list-works-feed'>Trabajos que pueden ser de tu interés</h2>
        </div>
        {
        Array(8).fill().map((item, index) => (
          <li key={index}>
            <div className="publication">
              <div className="flex-title-vacant">
                <div style={{margin: "0 10px 0 0"}}>
                  < Skeleton circle={true} height={70} width={70} />
                </div>
                <div className="title-vacant-general">
                  <p className="titleVacant">
                    < Skeleton height={15} width={150} />
                  </p>
                  <p className="subtitleVacant-fecha">
                    < Skeleton height={15} width={100} />
                  </p>
                </div>
              </div>
              <div style={{margin: "10px 0 20px 0"}} className='flex-items'>
                < Skeleton style={{margin: '5px 0'}} height={80} width={260} />
                < Skeleton style={{margin: '5px 0'}} height={80} width={260} />
              </div>
              <div>
                <div className="description">
                  <div className="description-loader">
                    <p className="description-loader" style={{ lineHeight: 2 }}>< Skeleton height={15} count={3} /></p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default LoaderSkeletonWorkList