import React, { useState } from 'react'

import './styles/profileStyles.css'
import './styles/PublicationStyle.css'

import avatarBLUE from '../images/Avatar-blue.png'
import avatarCIAN from '../images/Avatar-cian.png'
import avatarGREEN from '../images/Avatar-green.png'
import avatarYELLOW from '../images/Avatar-yellow.png'

import { BsFillCollectionFill } from 'react-icons/bs'
import { VscLightbulbAutofix } from 'react-icons/vsc'

var styleIcon = {
  color: '#1DAEFF'
}

const ConfettiBlue = (props)=> {
  return (
    <div className='confetti-blue' style={props.style}></div>
  )
}

export const MyProfile = (props) => {
  const [blurInformation, setBlur] = useState('contanier-blur-block')
  const [celebration, setCelebration] = useState(false)

  const desactiveBlur = () => {
    setBlur('contanier-active-information-block')
    setCelebration(true)
  }

  const confettiMulti = ()=> {
    const confetti = new Array(100).fill({})
    return (
      confetti.map((e, index) => {
        const style = {
          left: Math.floor(Math.random() * (350 - 0)) + 'px',
          animationDelay: Math.floor(Math.random() * (10 - 0)) + 's',
          backgroundColor: "#" + ((1<<24) * Math.random()|0).toString(16),
          transform: "rotateZ(" + Math.floor(Math.random() * (0 - 180))  + "deg)"
        }
        return (
          <ConfettiBlue key={index} style={style} />
        )
      })
    )
  }

  return (
    <div className='flex-my-profile'>
      <div className='block-center-my-profile'>
        <div className='container-title-profile'>
          <p className='title-profile'>{props.titleP}</p>
        </div>
        <div className='container-info-block'>
          { props.avatar === 'blue' && <img className='image-avatar-profile' src={avatarBLUE} alt='avatar de perfil profesional' /> }
          { props.avatar === 'cian' && <img className='image-avatar-profile' src={avatarCIAN} alt='avatar de perfil profesional' /> }
          { props.avatar === 'green' && <img className='image-avatar-profile' src={avatarGREEN} alt='avatar de perfil profesional' /> }
          { props.avatar === 'yellow' && <img className='image-avatar-profile' src={avatarYELLOW} alt='avatar de perfil profesional' /> }
          <div className='container-flex-rate-freelancer'>
            <div className='container-box-rate'>
              <p className='rate-p'>$ {props.rateFreelancer}</p>
              {props.negociableRate === true && <p className='negociable-p'>Negociables</p>}
            </div>
          </div>
          <div className='description-profile'>
            <p className='description-text-profile'>
              {props.descriptionP}
            </p>
          </div>
          <div className="flex-items-profile">
            <div className='container-item-service-100'>
              <div className='container-border-icon'>
                <BsFillCollectionFill style={styleIcon} size='25px'/>
              </div>
              <div className='container-feactures'>
                <p className='p-item-service-strong'>Categoría</p>
                <p className='p-item-service'>{props.areaP}</p>
              </div>
            </div>
            <div className='container-item-service-100'>
              <div className='container-border-icon'>
                <VscLightbulbAutofix style={styleIcon} size='25px'/>
              </div>
              <div className='container-feactures'>
                <p className='p-item-service-strong'>Especialidad</p>
                <p className='p-item-service'>{props.specialtyP}</p>
              </div>
            </div>
          </div>
          <div className='flex-center-profile-skills'>
            <div className='block-skills-profile'>
              <h3 className="title-skill">Habilidades profesionales</h3>
              <div className="list-skills">
                <div>
                  <ul className="container-list-skills">
                    {props.skillsP.map((skill, i)=>{
                      return (
                        <li key={skill.conteoSkills} className="containerSkills-publication">
                          {skill.skillsUser}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-curriculum-flex'>
          <div className={blurInformation}>
            <p className='name-p'>Pepito Perez</p>
            <p className='number-p'>+57 314 2661371</p>
            <p className='email-p'>pepitoperez1999@joobbi.com</p>
          </div>
          {celebration && 
            confettiMulti()
          }
        </div>
        <div className='button-absulute-center'>
          <button onClick={desactiveBlur} type='button' className='button-joobbi-white'>Descrubre este talento</button>
        </div>
      </div>
    </div>
  )
} 