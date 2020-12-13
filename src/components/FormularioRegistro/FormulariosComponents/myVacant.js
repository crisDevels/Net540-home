import React from 'react'

import '../stylesForm/PublicationStyle.css'
import '../stylesForm/formStyles.css'

import typeCompanyImage from '../images/factoryTypeCompany.svg'
import descriptionIcon from '../images/iconDescriptions.svg'
import checkIcon from '../../../images/check.svg'

import { MdPlace } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { SiCashapp } from 'react-icons/si'

import imageDEFAULT from '../../../images/ILUSTRACIONESSECTORESdesign.png'

var styleIcon = {
  color: '#1DAEFF'
}

class MyVacant extends React.Component {
  render() {
    return <React.Fragment>
      <div className='container-publication-large'>
        <div className="publication">
          <div className='cabecera-publication-large'>
            <div className='image-position-context'>
              <img src={imageDEFAULT} alt='imagen de contexto areas' />
            </div>
            <h2 className='title-service-context'>{this.props.title}</h2>
          </div>
          <div className='flex-info-service'>
            <div className='info-service'>
              <div className="flex-title-vacant">
                <div className="div-TypeCompany">
                  <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage}/>
                  <div className={this.props.checkVerify}>
                    <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                  </div>
                </div>
                <div className="title-vacant-general">
                  <p className="titleVacant">
                    {this.props.specialty}
                    <strong> {this.props.urgent && "URGENTE"}</strong>
                  </p>
                  <p className="subtitleVacant-fecha">
                    {this.props.area} 
                  </p>
                  <p className="subtitleVacant-fecha">
                    Trabajo {this.props.modality}
                  </p>
                </div>
                <div className='container-rate'>
                  <p className='p-rate-service'>$ {this.props.rate}</p>
                </div>
              </div>
              <hr className="linea-form-service"></hr>
              <div className="description-vacant">
                <div>
                  <p>{this.props.description}</p>
                  <p className="title-decriptions-feed">{this.props.titleDescription}</p>
                  <div className="block-items-descriptions">
                    <div>
                      <ul className="list-descriptions">
                        {this.props.descriptions.map((descriptions, i)=>{
                          return (
                            <li key={descriptions.conteoDescriptions} className="containerDescriptions">
                              <div className="descriptions-p">
                                <img alt="icon-items-descriptions" className="icon-items" src={descriptionIcon} width="12px"/>
                                {descriptions.descriptionsService}
                              </div> 
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-items">
                <div className='container-item-service'>
                  <div className='container-border-icon'>
                    <MdPlace style={styleIcon} size='25px'/>
                  </div>
                  <div className='container-feactures'>
                    <p className='p-item-service-strong'>Ubicación</p>
                    <p className='p-item-service'>{this.props.location}</p>
                  </div>
                </div>
                <div className='container-item-service'>
                  <div className='container-border-icon'>
                    <BiTimeFive style={styleIcon} size='25px'/>
                  </div>
                  <div className='container-feactures'>
                    <p className='p-item-service-strong'>Tiempo</p>
                    <p className='p-item-service'>{this.props.time}</p>
                  </div>
                </div>
                <div className='container-item-service'>
                  <div className='container-border-icon'>
                    <SiCashapp style={styleIcon} size='22px'/>
                  </div>
                  <div className='container-feactures'>
                    <p className='p-item-service-strong'>Pago por</p>
                    <p className='p-item-service'>{this.props.timeRate}</p>
                  </div>
                </div>
              </div>
              <hr className="linea-form-service"></hr>
              <div>
                <h3 className="title-skill">Habilidades recomendadas</h3>
                <div className="list-skills">
                  <div>
                    <ul className="container-list-skills">
                      {this.props.skills.map((skill, i)=>{
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
        </div>
      </div>
    </React.Fragment>
  }
}

export default MyVacant;