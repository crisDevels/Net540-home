import React from 'react'

import Skeleton from 'react-loading-skeleton'

function LoaderSkeletonPublicationList() {
    return (
        <React.Fragment>
            <ul className="list-unstyled-feed">
                    {
                        Array(8).fill().map((item, index) => (
                            <li key={index}>
                                <div className="my-publication">
                                    <div className="flex-title-vacant">
                                        <div className="title-vacant-general">
                                            <p className="titleVacant">
                                                < Skeleton height={15} width={150} />
                                            </p>
                                            <p className="subtitleVacant-fecha">
                                                < Skeleton height={15} width={100} />
                                            </p>
                                        </div>
                                        <div className="flex-description-candidates">
                                            < Skeleton height={25} width={100} />
                                        </div>
                                    </div>
                                    <div className="flex-description-candidates">
                                        <div className="blockSubs-candidates">
                                            <p className="subtitleVacant">
                                                < Skeleton height={15} width={150} />
                                            </p>
                                            <p className="subtitleVacant">
                                                < Skeleton height={15} width={150} />
                                            </p>
                                        </div>
                                        <div className="border-candidate">
                                            <p className="titleVacant">
                                                < Skeleton height={15} width={150} />
                                            </p>
                                            <p className="subtitleVacant-fecha">
                                                < Skeleton height={15} width={100} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
        </React.Fragment>
    )
}

export default LoaderSkeletonPublicationList