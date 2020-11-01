import React, { Fragment } from 'react'
import { ListArticleBlog } from './ListArticleBlog'

class BlockLandingBlog extends React.Component {
  state = {
    dataBlog: [
      {
        id: 1,
        title: 'Nueva de trabajos para el 2021',
        description: 'Tras la llegada del Covid19 nuevos trabajos han surgido, descrubre cuales son.',
        date: '15 Oct',
        cover: 'https://www.ecestaticos.com/image/clipping/654/954a653380318de544daa729c4aef68c/imagen-sin-titulo.jpg',
      },
      {
        id: 2,
        title: 'Planeación estratégica (5 metodologias practicas)',
        description: 'Administra mejor tus recursos, sabias que puedes mejorar un 70% tu velocidad.',
        date: '12 Oct',
        cover: 'https://www.ecestaticos.com/imagestatic/clipping/441/297/441297f57bb345646ab51b866479ba50/chateas-con-amigos-en-la-oficina-como-usar-tu-pc-en-el-trabajo-de-forma-segura.jpg?mtime=1579565836',
      },
      {
        id: 3,
        title: '5 librerias 3D para tus diseños',
        description: 'Accede ahora mismo y descrubre cientos de recursos gratuitos.',
        date: '07 Oct',
        cover: 'https://latinoamerica.autodesk.com/content/dam/autodesk/www/products/autodesk-3dsmax/fy20/features/images/improved-viewport-quality-large-1920x1004.jpg',
      },
      {
        id: 4,
        title: 'Descubre como puedes convertir ilustracion',
        description: 'Una excelente herramienta crea y comparte contenido para impulsar tu empresa.',
        date: '05 Oct',
        cover: 'https://einatec.com/wp-content/uploads/2019/02/diseno-grafico-publicitario-1000x570.jpg',
      },
      {
        id: 5,
        title: 'Descubre como puedes convertir ilustracion',
        description: 'Una excelente herramienta crea y comparte contenido para impulsar tu empresa.',
        date: '05 Oct',
        cover: 'https://einatec.com/wp-content/uploads/2019/02/diseno-grafico-publicitario-1000x570.jpg',
      },
    ]
  }
  render() {
    return (
      <Fragment>
        <div className='block-blog'>
          <div className='wrapper-landing'>
            <h3 className='title-landing-joobbi'>Contenido Joobbi</h3>
            <div className='block-list-blog'>
              <div className='scroll-blog'>
                <ul className='list-ul-blog-landing'>
                  {
                    this.state.dataBlog.map(article => <li className='list-item' key={article.id}><ListArticleBlog  {...article} /></li>)
                  }   
                </ul>
              </div>
              <div className='block-button-blog'>
                <button className='button-joobbi'>Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BlockLandingBlog