import React from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles/PublicationStyle.css'
import './FormularioRegistro/stylesForm/formStyles.css'
import '../components/styles/modales.css'

import typeCompanyImage from './FormularioRegistro/images/factoryTypeCompany.svg'
import descriptionIcon from '../images/iconDescriptions.svg'
import checkIcon from '../images/check.svg'

import { RiUser6Fill } from 'react-icons/ri'
import { AiOutlineLink } from 'react-icons/ai'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { BiBlock } from 'react-icons/bi'

import imageDEFAULT from '../images/ILUSTRACIONESSECTORESdesign.png'

import LoaderSkeletonWorkDetails from './loaderWorkDetails'

import { MdPlace } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { SiCashapp } from 'react-icons/si'

var styleIcon = {
  color: '#1DAEFF'
}


class WorkDetailsEdit extends React.Component {
  state = {
    modalStyle: "none",
    option: false,
    buttonGuardar: "button-guardar",
    save: true,
    copied: false,
  }
  openOptions = () => {
    if(!this.state.option) {
      this.setState({
        modalStyle: "modal-options",
        option: true,
      })
    } else {
      this.setState({
        modalStyle: "none",
        option: false,
      })
    }
  }

  render() {
    if(this.props.dataNull.length === 0 || this.props.reLoading) {
      return(
        <LoaderSkeletonWorkDetails />
      )
    }
    return (
      <React.Fragment>
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
                      <img alt="modelo ilutración compañias" className="icon-sector-style" src={typeCompanyImage} width="35px"/>
                      {
                      this.props.verify &&
                        <div className="cirle-check-publication">
                          <img alt="solo es un check" src={checkIcon} className="check-icon-publication" />
                        </div>
                      }
                    </div>
                    <div className="title-vacant-general">
                      <p className="titleVacant">
                        {this.props.area}  
                        <strong> {this.props.urgent && "URGENTE"}</strong>
                      </p>
                      <p className="subtitleVacant-fecha">
                        Trabajo {this.props.modality}
                      </p>
                    </div>
                    <div className='container-rate'>
                      <p className='p-rate-service'> $ {this.props.rate}</p>
                    </div>
                  </div>
                  <div className="flex-buttons-large">
                    <button onClick={this.saveWork} save={this.state.saveWorks} type="button" className="buttonEdit">    
                      <RiUser6Fill style={styleIcon} size='15px'/>
                      <Link to={`/my-candidates/${this.props.id}/candidates`}>
                        Ver candidatos
                      </Link>
                    </button>
                    <CopyToClipboard text={`http://localhost:3000/works/${this.props.id}`} onCopy={()=> this.setState({ copied: true })}>
                      <button className="buttonEdit">
                        <AiOutlineLink style={styleIcon} size='15px'/>
                        Copiar URL
                      </button>
                    </CopyToClipboard>
                    <button onClick={this.props.DesactiveOpenModal} type="button" className="buttonEdit">
                      <BiBlock style={styleIcon} size='15px'/>
                      Desactivar
                    </button>
                    <button onClick={this.props.DeleteOpenModal} type="button" className="buttonEdit">
                      <IoMdRemoveCircleOutline style={styleIcon} size='15px'/>
                      Borrar
                    </button>
                  </div>
                  <hr></hr>
                  <div className="description-vacant">
                    <div>
                      <p>{this.props.description}</p>
                      <p className="title-decriptions-feed">{this.props.titleDescription}</p>
                      <div className="block-items-descriptions">
                        <div>
                          <ul className="list-descriptions">
                            {
                            this.props.descriptions.map((descriptions, i)=>{
                              return (
                                <li key={descriptions.conteoDescriptions} className="container-descriptions-publication">
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
                          {
                          this.props.skills.map((skill, i)=>{
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
    )
  }
}

export default WorkDetailsEdit 