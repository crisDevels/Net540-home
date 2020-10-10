import React from 'react'

import Skeleton from 'react-loading-skeleton'

function LoaderSkeletonWorkList() {
    return (
        <React.Fragment>
            <ul className="list-unstyled-feed">
                    <div className="title-works">
                        <h2>Trabajos que pueden ser de tu interés</h2>
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
                                    <div className="blockSubs">
                                        <p className="subtitleVacant">
                                            < Skeleton height={15} width={250} />
                                        </p>
                                        <p className="subtitleVacant">
                                            < Skeleton height={15} width={250} />
                                        </p>
                                    </div>
                                    <div>
                                        {/* <div className="block-white"></div> */}
                                        <div className="description">
                                            <div className="description-loader">
                                                <p className="description-loader" style={{ lineHeight: 2 }}>< Skeleton height={15} count={3} /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="linea-feed-service"></hr>
                                </div>
                            </li>
                        ))
                    }
                </ul>
        </React.Fragment>
    )
}

export default LoaderSkeletonWorkList