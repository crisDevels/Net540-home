import React from 'react'

import Skeleton from 'react-loading-skeleton'

function LoaderSkeletonWorkDetails() {
  return (
    <React.Fragment>
      <div className="block-active">
        <div className='container-publication-large'>
          <div className="publication">
            <div className='cabecera-publication-large'>
              <p style={{ lineHeight: 2 }}>< Skeleton height={15} count={2} /></p>
            </div>
            <div className='flex-info-service'>
              <div className='info-service'>
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
                <div className="blockSubs">
                  <p className="subtitleVacant">
                    < Skeleton height={15} width={250} />
                  </p>
                  <p className="subtitleVacant">
                    < Skeleton height={15} width={250} />
                  </p>
                </div>
                <hr></hr>
                <div className="description-vacant">
                  <div className="description-loader">
                    <p style={{ lineHeight: 2 }}>< Skeleton height={15} count={5} /></p>
                  </div>
                </div>
                <div>
                  <div className="flex-items">
                    <div className="col-1">
                      <p className="subtitleVacant">
                        < Skeleton height={15} width={150} />
                      </p>
                      <p className="subtitleVacant">
                        < Skeleton height={15} width={150} />
                      </p>
                    </div>
                    <div className="col-1">
                      <p className="subtitleVacant">
                        < Skeleton height={15} width={150} />
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="linea-form-service"></hr>
                <div>
                  <h3 className="title-skill">< Skeleton height={15} width={100} /></h3>
                  <div className="list-skills">
                    <div>
                      <ul className="container-list-skills">
                        <li className="containerSkills-publication">
                          < Skeleton height={15} width={100} />
                        </li>
                        <li className="containerSkills-publication">
                          < Skeleton height={15} width={100} />
                        </li>
                        <li className="containerSkills-publication">
                          < Skeleton height={15} width={100} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="linea-form-service"></hr>
                <div className="centerButton-block">
                   < Skeleton height={25} width={100} />
                </div>
                <div className="image-center">
                   < Skeleton height={300} />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoaderSkeletonWorkDetails