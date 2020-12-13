import React, { Fragment } from 'react'
import { CandidateBadge } from './candidateBadge'

import './styles/candidateListStyles.css'

export const ListCandidates = (props)=> {
  return (
    <Fragment>
      <ul className='list-container-candidates'>
        {
          props.candidates.map(candidate => {
            return (<li className='list-candidate-item' key={candidate.id}><CandidateBadge {...candidate}/></li>)
          })
        }
      </ul>
    </Fragment>
  )
}