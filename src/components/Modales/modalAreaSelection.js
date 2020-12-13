import React from 'react'

import '../../components/styles/FormServiceStyles.css'

/* import { areas } from '../../../api/db.json'
import { AreasLabelModal } from '../areasLabelModal' */

export const ModalAreaSelection = (props) => {
  if (!props.isOpenModalArea) {
    return null
  }
  return (
    <div className={props.modalArea}>
      <p className='title-area-select'>Selecciona el área que corresponda</p>
      <div className='flex-area-select'>
        {/* <ul>
          {
            areas.map((area)=> <li key={area.id}><AreasLabelModal {...area} /></li>)
          }
        </ul> */}
        <label className='selected-label'>
          <input onChange={props.onChange} value='Redacción de contenidos' className='selected-area' type='radio' name='areaService'/>
          Redacción y traducción
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Desarrollo web' className='selected-area' type='radio' name='areaService'/>
          Programación e IT
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño, arquitectura y audiovisual' className='selected-area' type='radio' name='areaService'/>
          Diseño, arquitectura y audiovisual
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Administración y manejo de datos' className='selected-area' type='radio' name='areaService'/>
          Administración y manejo de datos
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Ingeniería y ciencia' className='selected-area' type='radio' name='areaService'/>
          Ingeniería y ciencia 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Producción y manufactura' className='selected-area' type='radio' name='areaService'/>
          Producción y manufactura 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Logística y transporte' className='selected-area' type='radio' name='areaService'/>
          Logística y transporte 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Marketing y ventas' className='selected-area' type='radio' name='areaService'/>
          Marketing y ventas 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Finanzas, RRHH y legal' className='selected-area' type='radio' name='areaService'/>
          Finanzas, RRHH y legal
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Servicios y oficios generales' className='selected-area' type='radio' name='areaService'/>
          Servicios y oficios generales
        </label>
      </div>
      <div className='container-area-button'>
        <button onClick={props.closeModalArea} className='button-joobbi'>Continuar</button>
      </div>
    </div>
  )
}