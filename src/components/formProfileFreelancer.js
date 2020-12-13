import React from 'react'
import ReactDOM from 'react-dom'
import { ModalAreaSelection } from './Modales/modalAreaSelection'
import { ModalSpecialSelection } from './Modales/modalSpecialSelection'

import { MdClose } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'

import { RiUser6Fill } from 'react-icons/ri'
import { GoBriefcase } from 'react-icons/go'
import { RiEditCircleFill } from 'react-icons/ri'
import { BsFillCollectionFill } from 'react-icons/bs'
import { BsAwardFill } from 'react-icons/bs'
import { VscLightbulbAutofix } from 'react-icons/vsc'
import { BsFilePost } from 'react-icons/bs'
import { FaUpload } from 'react-icons/fa'

import avatarBLUE from '../images/Avatar-blue.png'
import avatarCIAN from '../images/Avatar-cian.png'
import avatarGREEN from '../images/Avatar-green.png'
import avatarYELLOW from '../images/Avatar-yellow.png'

export const FormProfile = (props)=> {
  return (
    <div>
      <form>
        <div className='flex-form-inset'>
          <div className='block-avatar'>
            <div>
              <div className='flex-titles-labels'>
                <RiUser6Fill />
                <p className='titles-labels'>Elige tu avatar</p>
              </div>
              <div className='flex-select-avatar'>
                { props.avatar === 'blue' && <img className='image-avatar-select' src={avatarBLUE} alt='avatar de perfil profesional' /> }
                { props.avatar === 'cian' && <img className='image-avatar-select' src={avatarCIAN} alt='avatar de perfil profesional' /> }
                { props.avatar === 'green' && <img className='image-avatar-select' src={avatarGREEN} alt='avatar de perfil profesional' /> }
                { props.avatar === 'yellow' && <img className='image-avatar-select' src={avatarYELLOW} alt='avatar de perfil profesional' /> }
                <div className='flex-avatar-options'>
                  <div className='background-select-avatar'>
                    <label className='label-select-avatar'>
                      <input onChange={props.onChange} type='radio' className='selected-radio' value='blue' name='avatar'/>
                      <img className='image-avatar-choice' src={avatarBLUE} alt='avatar de perfil profesional' />
                    </label>
                  </div>
                  <div className='background-select-avatar'>
                    <label className='label-select-avatar'>
                      <input onChange={props.onChange} type='radio' className='selected-radio' value='cian' name='avatar'/>
                      <img className='image-avatar-choice' src={avatarCIAN} alt='avatar de perfil profesional' />
                    </label>
                  </div>
                  <div className='background-select-avatar'>
                    <label className='label-select-avatar'>
                      <input onChange={props.onChange} type='radio' className='selected-radio' value='green' name='avatar'/>
                      <img className='image-avatar-choice' src={avatarGREEN} alt='avatar de perfil profesional' />
                    </label>
                  </div>
                  <div className='background-select-avatar'>
                    <label className='label-select-avatar'>
                      <input onChange={props.onChange} type='radio' className='selected-radio' value='yellow' name='avatar'/>
                      <img className='image-avatar-choice' src={avatarYELLOW} alt='avatar de perfil profesional' />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex-titles-labels'>
                <GoBriefcase />
                <label className='titles-labels'>Título</label><br/>
              </div>
              <input 
              name='titleProfesional'
              className='space-form-input'
              value={props.titleProfesional}
              type='text'
              placeholder='Ej: Diseñadora Industrial, Contador, Influencer...'
              onChange={props.onChange} required autoFocus/>
            </div>
            <div>
              <div className='flex-titles-labels'>
                <RiEditCircleFill />
                <label className='titles-labels'>Descripción profesional</label><br/>
              </div>
              <textarea 
              className='textarea-description-work'
              type='text'
              onChange={props.onChange}
              value={props.descriptionProfesional}
              placeholder='Realiza una breve descripción del servicio que necesitas.'
              name='descriptionProfesional'
              required />
            </div>
            <div>
              <div className='flex-titles-labels'>
                <BsFilePost />
                <p className='titles-labels'>Tu curriculum vitae</p>
              </div>
              <div className='box-flex-curriculum'>
                <div className='flex-input-upload'>
                  <FaUpload />
                  <label htmlFor='fileCV' className='titles-labels'>Sube tu archivo (.pdf ó .word)</label>
                  <input
                  onChange={props.onChange}
                  type='file'
                  name='curriculum'
                  className='styles-file-input'
                  id='fileCV' />
                </div>
              </div>
            </div>
          </div>
          <div className='block-info-profile'>
            <div className='block-input-service'>
              <div className='flex-titles-labels'>
                <BsFillCollectionFill />
                <label className='titles-labels'>Área Profesional</label><br/>
              </div>
              <div className='relative-options-area'>
                <button type='button' onClick={props.clickOpenModalArea} className='selected-area-input'>{props.areaSelected}</button>
                <div onClick={props.closeModalArea} className={props.overlay}></div>
                {ReactDOM.createPortal(
                  <ModalAreaSelection
                  modalArea={props.modalAreas}
                  onChange={props.onChange}
                  closeModalArea={props.closeModalArea}
                  isOpenModalArea={props.isOpenModalArea} />,
                document.getElementById('modalAreaSelection'))
                }
              </div>
            </div>
            <div className='block-input-service'>
              <div className='flex-titles-labels'>
                <VscLightbulbAutofix />
                <label className='titles-labels'>Especialidad Profesional</label><br/>
              </div>
              <div className='relative-options-area'>
                <button type='button' onClick={props.clickOpenModalSpecial} className='selected-area-input'>{props.specialty}</button>
                <div onClick={props.closeModalSpecial} className={props.overlay}></div>
                {ReactDOM.createPortal(
                  <ModalSpecialSelection
                  modalSpecial={props.modalSpecial}
                  onChange={props.onChange}
                  closeModalSpecial={props.closeModalSpecial}
                  isOpenModalSpecial={props.isOpenModalSpecial} />,
                document.getElementById('modalSpecialSelection'))
                }
              </div>
            </div>
            <div className='block-habilidades-laborales'>
              <div className='block-input-service'>
                <div className='flex-titles-labels'>
                  <BsAwardFill />
                  <label className='titles-labels'>Habilidades laborales</label><br/>
                </div>
                <div className='flex-skills-service'>
                  <input
                  onKeyPress={props.onKeyPress}
                  onChange={props.onChangeSkill} 
                  className='space-form-input' 
                  type='text'
                  name='skillsUser'
                  placeholder='Ej: Puntualidad, Innovación, Excel, Photoshop' />
                </div>
                <div className='center-buttons-skills'>
                  <button type='button' onClick={props.onSkill} className='button-agregar'>
                    <BsPlus />
                  </button>
                  <p className='press-enter'>o presiona ENTER</p>
                </div>
                <div className='list-skills'>
                  <div>
                    <ul className='container-list-skills'>
                      {props.skillsProfesional.map((skill, i)=>{
                        return (
                          <li key={skill.conteoSkills} className='containerSkills'>
                            {skill.skillsUser}
                            <div className='button-remove' onClick={props.onDelete.bind(this, i)}>
                              <MdClose />
                            </div> 
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className='linea-form-service'></hr>
            <div>
              <div className='flex-titles-labels'>
                <GoBriefcase />
                <label className='titles-labels'>Costos servicios</label><br/>
              </div>
              <input 
              name='rateFreelancer'
              className='space-form-input'
              value={props.rateFreelancer}
              type='number'
              placeholder='Ej: $40'
              onChange={props.onChange} required/>
            </div>
            <div>
              <div className='flex-checkbox-urgent'>
                <p>¿Este precio es negociable?</p>
                <label className='switch'>
                  <input
                  onChange={props.onChange}
                  type='checkbox'
                  id='rateNegociable'
                  name='negociableRate'
                  value='Negociable'/>
                  <div className='slider-round'></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}