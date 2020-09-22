import React from 'react'

import loader from '../images/loader.gif';

function PageLoading() {
    return (
        <React.Fragment>
            <div>
              <div className="loader-flex">
                  <img alt="loader-skills" src={loader}/>
              </div>
            </div>
        </React.Fragment>
    )
}

export default PageLoading