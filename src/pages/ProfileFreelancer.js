import React, { useState, Fragment, useEffect } from 'react'
import firebase from 'firebase'
import PageLoading from './pageLoading'
import { Link } from 'react-router-dom'

import { NavBar } from '../components/NavBar'
import { FormProfile } from '../components/formProfileFreelancer'
import { MyProfile } from '../components/myProfile'

import './styles/feedStyles.css'
import './styles/stylesProfileForm.css'

export const ProfileExpert = ()=> {
  const [dataP, setDataP] = useState({
    skillsProfesional: [],
    descriptionProfesional: '',
    areaService: 'Selecciona un área o categoria',
    specialty: 'Selecciona una especialidad',
    titleProfesional: '',
    avatar: 'blue',
    curriculum: '',
    rateFreelancer: '',
  })

  const [skillsProfesional, setSkills] = useState([])
  const [skillsUser, setSkillUser] = useState('')
  const [conteoSkills, setConteoSkills] = useState(0)
  const [user, setUser] = useState(null)
  const [loading, setLoading ] = useState(true)
  // state para modal areas
  const [isOpenModalArea, setOpenAreas] = useState(false)
  const [modalAreas, setModalAreas] = useState('none')
  const [overlay, setOverlay] = useState('none')
  // state para modal special
  const [isOpenModalSpecial, setOpenSpecial] = useState(false)
  const [modalSpecial, setModalSpecial] = useState('none')

  // metodo para autenticar el usuario en sesión
  useEffect (() => {
    var mounted = true
    firebase.auth().onAuthStateChanged(user => {
      if (mounted) {
        setUser(user)
        setLoading(false)
      }
    })
    return function cleanup() {
      mounted = false
    }
  }, [])
  
  // handle para la data profesional de user
  const handledata = (ev)=> {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setDataP({
      ...dataP,
      [name]: value,
    })
  }

  //metodos para agregar y borrar skills
  // handle para las skills del user
  const handleSkill = (ev)=> {
    setSkillUser(ev.target.value)
  }

  const onKeyPress = (e)=> {
    if(e.which === 13) {
      e.preventDefault()
      setConteoSkills(conteoSkills + 1)
      const dataContent = {
        skillsUser: skillsUser,
        conteoSkills: conteoSkills,
      }
      var newSkill = skillsProfesional.concat([dataContent])
      setSkills(newSkill)
      setDataP({
        ...dataP,
        skillsProfesional: newSkill
      })
    }
  }

  const agregarSkill = (e)=> {
    e.preventDefault()
    setConteoSkills(conteoSkills + 1)
    const dataContent = {
      skillsUser: skillsUser,
      conteoSkills: conteoSkills,
    }
    var newSkill = skillsProfesional.concat([dataContent])
    setSkills(newSkill)
    setDataP({
      ...dataP,
      skillsProfesional: newSkill
    })
  }

  const borrarSkill = (i)=> {
    var newSkill = skillsProfesional
    newSkill.splice(i, 1)
    setSkills(newSkill)
    setDataP({
      ...dataP,
      skillsProfesional: newSkill,
    })
  }

  //metodos para abrir y cerrar modal de areas
  const openModalAreas = ()=> {
    setOpenAreas(true)
    setModalAreas('modal-options-area')
    setOverlay('overlayActive')
  }

  const closeModalAreas = ()=> {
    setModalAreas('none')
    setOverlay('none')
  }

  //metodos para abrir y cerrar modal de special
  const openModalSpecial = ()=> {
    setOpenSpecial(true)
    setModalSpecial('modal-options-area')
    setOverlay('overlayActive')
  }

  const closeModalSpecial = ()=> {
    setModalSpecial('none')
    setOverlay('none')
  }
  
  return (
    <Fragment>
      {loading ? <PageLoading /> : 
        <div>
          <NavBar />
          {user ? <div className='wrapper-border'>
            <div className='flex-feed'>
              <div className='col-70'>
                <div className='block-center-form'>
                  <h2 className='title-freelancer-profile'>Completa tu perfil</h2>
                  <FormProfile 
                  titleProfesional={dataP.titleProfesional}
                  areaSelected={dataP.areaService}
                  specialty={dataP.specialty}
                  descriptionProfesional={dataP.descriptionProfesional}
                  avatar={dataP.avatar}
                  rateFreelancer={dataP.rateFreelancer}
                  negociableRate={dataP.negociableRate}
                  curriculum={dataP.curriculum}
                  /* props para modal area */
                  isOpenModalArea={isOpenModalArea}
                  overlay={overlay}
                  modalAreas={modalAreas}
                  clickOpenModalArea={openModalAreas}
                  closeModalArea={closeModalAreas}
                  onChange={handledata}
                  /* props para modal special */
                  isOpenModalSpecial={isOpenModalSpecial}
                  modalSpecial={modalSpecial}
                  clickOpenModalSpecial={openModalSpecial}
                  closeModalSpecial={closeModalSpecial}
                  /* props para agragar skills */
                  skillsProfesional={skillsProfesional}
                  conteoSkills={conteoSkills}
                  onKeyPress={onKeyPress}
                  onSkill={agregarSkill}
                  onChangeSkill={handleSkill}
                  onDelete={borrarSkill} />
                </div>
              </div>
              <div className='col-50-freelancer'>
                <div className='block-center-form'>
                  <h2 className='title-freelancer-profile'>{user.displayName}</h2>
                  <MyProfile 
                  titleP={dataP.titleProfesional || 'Diseñadora Industrial'}
                  descriptionP={dataP.descriptionProfesional || 'Soy una persona dinámica y creativa, habituada al trabajo bajo presión. Tengo experiencia en atención al usuario y muy buenas relaciones interpersonales, por lo cual se me facilita el trabajo en equipo, lo cual además disfruto. Actualmente me encuentro en la búsqueda de un empleo en el que pueda demostrar mis habilidades aportando valor agregado a la empresa y ayudando a la resolución de problemas al interior de ella.'}
                  specialtyP={dataP.specialty}
                  areaP={dataP.areaService || 'Community Mananger'}
                  skillsP={skillsProfesional }
                  avatar={dataP.avatar  || 'blue'}
                  rateFreelancer={dataP.rateFreelancer || 20}
                  negociableRate={dataP.negociableRate || false}
                  />
                </div>
              </div>
            </div>
          </div> : 
            <div>
              Por favor registrate <Link to ='/registro-joobbi'>aqui</Link>
            </div>
          }
        </div>
      }
    </Fragment>
  )
}

// class ProfileFreelancer extends React.Component {
//   state = {
//     user: null,
//     isLoading: true,
//     dataProfesional: {
//       skillsProfesional: [],
//       descriptionProfesional: undefined,
//       AreaProfesional: undefined,
//       specialtyProfesional: undefined,
//       TitleProfesional: undefined,
//       avatar: undefined,
//       cv: undefined,
//     },
//     skillsProfesional: [],
//     conteoSkill: 0,
//   }

//   componentDidMount () {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({
//         user,
//         isLoading: false,
//       })
//     })
//   }

//   handleChangeData = (ev) => {
//     this.setState({
//       dataProfesional: {
//         ...this.state.dataProfesional,
//         [ev.target.name]: ev.target.value,
//       }
//     })
//   }

//   handleChangeSkills = (ev) => {
//     this.setState({
//       [ev.target.name]: ev.target.value,
//     })
//   }

//   render() {
//     return (
//       <Fragment>
//         <div>
          
//         </div>
//       </Fragment>
//     )
//   }
// }

// export default ProfileFreelancer