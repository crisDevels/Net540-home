import React, { useState } from 'react'

import { RiUser6Fill } from 'react-icons/ri'
import { BiCheck } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

import './styles/candidateListStyles.css'

var styleIconBlue = {
  color: '#1daeff'
}

var styleIconWhite = {
  color: 'white'
}

export const CandidateBadge = (props) => {

  const [deny, setDeny] = useState(false)
  const [check, setCheck] = useState(false)

  const denyCandidate = ()=> {
    setDeny(true)
    setCheck(false)
  }

  const checkCandidate = ()=> {
    setDeny(false)
    setCheck(true)
  }

  const ButtonCheck = !check ? <button onClick={checkCandidate} className='border-button-check'><BiCheck style={styleIconWhite} size="30px" /></button> : null
  const Buttondeny = !deny ? <button onClick={denyCandidate} className='border-button-deny'><CgClose style={styleIconWhite} size="30px" /></button> : null

  return (
    <div className='flex-center-badge'>
      <div className='container-block-badge'>
        <div className='profile-div-flex'>
          <div className='container-profile-icon'>
            <RiUser6Fill style={styleIconBlue} size="50px" />
          </div>
          <div className='profile-titles'>
            <p className='title-name-candidate'>{props.name}</p>
            <p className='subtitle-candidate'>{props.title}</p>
          </div>
          {ButtonCheck}
          {Buttondeny}
        </div>
        <hr className='candidate-line'></hr>
        <p className='p-description-candidate'>{props.description}</p>
        <h4 className='title-skills-candidate'>Habilidades profesionales</h4>
        <ul className='list-skills-candidate'>
          {
          props.skills.map(skill => (
            <li key={skill.id}>
              <div className='container-skill-candidate'>
                <p className='p-skill'>{skill.skillRef}</p>
              </div>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}
  