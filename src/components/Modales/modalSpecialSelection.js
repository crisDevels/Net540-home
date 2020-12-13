import React from 'react'

import '../../components/styles/FormServiceStyles.css'

/* import { areas } from '../../../api/db.json'
import { AreasLabelModal } from '../areasLabelModal' */

export const ModalSpecialSelection = (props) => {
  if (!props.isOpenModalSpecial) {
    return null
  }
  return (
    <div className={props.modalSpecial}>
      <p className='title-area-select'>Selecciona la especialidad que corresponda</p>
      <div className='flex-area-select'>
        {/* <ul>
          {
            areas.map((area)=> <li key={area.id}><AreasLabelModal {...area} /></li>)
          }
        </ul> */}
        <label className='selected-label'>
          <input onChange={props.onChange} value='Desarrollo web' className='selected-area' type='radio' name='specialty'/>
          Desarrollo web
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño UI/UX' className='selected-area' type='radio' name='specialty'/>
          Diseño UI/UX
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='E-Commerce' className='selected-area' type='radio' name='specialty'/>
          E-commerce
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Wordpress' className='selected-area' type='radio' name='specialty'/>
          Wordpress 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Programación de aplicaciones móviles' className='selected-area' type='radio' name='specialty'/>
          Programación de aplicaciones móviles 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Data Science' className='selected-area' type='radio' name='specialty'/>
          Data Science 
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Aplicaciones de escritorio' className='selected-area' type='radio' name='specialty'/>
          Aplicaciones de escritorio
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño de logo' className='selected-area' type='radio' name='specialty'/>
          Diseño de logo
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Banners' className='selected-area' type='radio' name='specialty'/>
          Banners
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Ilustración' className='selected-area' type='radio' name='specialty'/>
          Ilustración
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Edición de video' className='selected-area' type='radio' name='specialty'/>
          Edición de video
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Infografías' className='selected-area' type='radio' name='specialty'/>
          Infografías
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Imagenes para social media' className='selected-area' type='radio' name='specialty'/>
          Imagenes para social media
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Imagen corporativa' className='selected-area' type='radio' name='specialty'/>
          Imagen corporativa
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Modelado 3d' className='selected-area' type='radio' name='specialty'/>
          Modelado 3d
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Animación' className='selected-area' type='radio' name='specialty'/>
          Animación
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Landing page' className='selected-area' type='radio' name='specialty'/>
          Landing page
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño de modas' className='selected-area' type='radio' name='specialty'/>
          Diseño de modas
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Redacción de artículos' className='selected-area' type='radio' name='specialty'/>
          Redacción de artículos
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Redacción para sitios web' className='selected-area' type='radio' name='specialty'/>
          Redacción para sitios web
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Revisión de textos' className='selected-area' type='radio' name='specialty'/>
          Revisión de textos
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Publicación para social media' className='selected-area' type='radio' name='specialty'/>
          Publicación para social media
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Traducción' className='selected-area' type='radio' name='specialty'/>
          Traducción
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Subtitulado' className='selected-area' type='radio' name='specialty'/>
          Subtitulado
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='SEO' className='selected-area' type='radio' name='specialty'/>
          SEO
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Community management' className='selected-area' type='radio' name='specialty'/>
          Community management
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Publicidad en Google y/o Facebook' className='selected-area' type='radio' name='specialty'/>
          Publicidad en Google y/o Facebook
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Email Marketing' className='selected-area' type='radio' name='specialty'/>
          Email Marketing
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Data analytics' className='selected-area' type='radio' name='specialty'/>
          Data analytics
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Asesoría comercial y ventas' className='selected-area' type='radio' name='specialty'/>
          Asesoría comercial y ventas
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Atención al cliente' className='selected-area' type='radio' name='specialty'/>
          Atención al cliente
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Investigación de mercado' className='selected-area' type='radio' name='specialty'/>
          Investigación de mercado
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Televentas' className='selected-area' type='radio' name='specialty'/>
          Televentas
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Asistencia virtual' className='selected-area' type='radio' name='specialty'/>
          Asistencia virtual
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Asesoría legal' className='selected-area' type='radio' name='specialty'/>
          Asesoría legal
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Relevamiento de datos' className='selected-area' type='radio' name='specialty'/>
          Relevamiento de datos
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Gestión de proyectos' className='selected-area' type='radio' name='specialty'/>
          Gestión de proyectos
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Planeación estratégica' className='selected-area' type='radio' name='specialty'/>
          Planeación estratégica
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Tareas de contabilidad' className='selected-area' type='radio' name='specialty'/>
          Tareas de contabilidad
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Reclutamiento' className='selected-area' type='radio' name='specialty'/>
          Reclutamiento
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño Industrial' className='selected-area' type='radio' name='specialty'/>
          Diseño Industrial
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Dibujo CAD' className='selected-area' type='radio' name='specialty'/>
          Dibujo CAD
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño arquitectónico' className='selected-area' type='radio' name='specialty'/>
          Diseño arquitectónico
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Diseño de interior' className='selected-area' type='radio' name='specialty'/>
          Diseño de interior
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Conducción' className='selected-area' type='radio' name='specialty'/>
          Conducción
        </label>
        <label className='selected-label'>
          <input onChange={props.onChange} value='Oficios varios' className='selected-area' type='radio' name='specialty'/>
          Oficios varios
        </label>
      </div>
      <div className='container-area-button'>
        <button onClick={props.closeModalSpecial} className='button-joobbi'>Continuar</button>
      </div>
    </div>
  )
}