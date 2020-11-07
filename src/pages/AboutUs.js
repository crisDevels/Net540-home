import React from "react";
import Footer from "../components/footer";
import NavLanding from "../components/LandingComp/NavLanding";

import './styles/aboutUs.css'

class AboutUs extends React.Component {
  render () {
    return <React.Fragment>
      <NavLanding />
      <div>
        <div className='container-block-hero'></div>
        <div className="block-content-hero">
          <div className='wrapper-hero-landing'>
            <div className='container-logo-hero'>
              <div className='div-logo-texto'>
                <img width='500px' src='http://joobbi.com/wp-content/uploads/2020/10/logo-Joobbi.svg' alt='LOGO png Joobbi sin fondo' className='styles-logo-hero' />
                <h1 className='hero-text'>En Joobbi nos movita el <strong className='strong-hero'>talento humano</strong>, por ello generamos una <strong className='strong-hero'>comunidad</strong> de personas que quieren mejorar su <strong className='strong-hero'>calidad de vida</strong>.</h1>
                <h4 className='hero-text-h4'>¿Tú que estás esperando? </h4>
              </div>
            </div>
          </div>
        </div>
        <div className='block-valores'>
          <div className='wrapper-valores'>
            <div className='container-valor'>
              <div className='container-flex-text'>
                <h2 className='title-valor'>Calidad de vida</h2>
                  <div className='conianer-text-valores'>
                  <p className='p-valor'>Queremos transformar el estilo y calidad de vida para las personas, el futuro del trabajo está aquí.</p>
                </div>
              </div>
              <div className='container-images-valores'>
                <img className='image-valores' src='http://joobbi.com/wp-content/uploads/2020/10/hombre-celebrando-joobbi.png' alt='persona emocionada por su trabajo' />
              </div>
              <div className='container-adorno-back'>
                <img src='http://joobbi.com/wp-content/uploads/2020/10/puntos-adornos.svg' alt='adornos del menu en joobbi' className='adornos-puntos' />
                <div className='square-gray'></div>
              </div>
            </div>
            <div className='container-valor'>
              <div className='container-images-valores-start'>
                <img className='image-valores' src='http://joobbi.com/wp-content/uploads/2020/10/otra-mujer-tierna-feliz.png' alt='persona emocionada por su trabajo' />
              </div>
              <div className='container-adorno-back-start'>
                <img src='http://joobbi.com/wp-content/uploads/2020/10/puntos-adornos.svg' alt='adornos del menu en joobbi' className='adornos-puntos' />
                <div className='square-gray-start'></div>
              </div>
              <div className='container-flex-text-left'>
                <div className='container-justify-text'>
                  <h2 className='title-valor-rigth'>Comunidad</h2>
                    <div className='conianer-text-valores-rigth'>
                    <p className='p-valor-rigth'>Una red articulada de personas honestas y trabajadoras que buscan transformar el mundo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='container-valor'>
              <div className='container-flex-text'>
                <h2 className='title-valor'>Talento</h2>
                  <div className='conianer-text-valores'>
                  <p className='p-valor'>Joobbi une el talento global a los que lo requieren. Más que una plataforma somos un estilo de vida.</p>
                </div>
              </div>
              <div className='container-images-valores'>
                <img className='image-valores' src='http://joobbi.com/wp-content/uploads/2020/10/otra-mujer-emocionada.png' alt='persona emocionada por su trabajo' />
              </div>
              <div className='container-adorno-back'>
                <img src='http://joobbi.com/wp-content/uploads/2020/10/puntos-adornos.svg' alt='adornos del menu en joobbi' className='adornos-puntos' />
                <div className='square-gray'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-areas-title'>
          <div className="block-items">
            <div className='wrapper-areas'>
              <h3 className='title-gran-areas'>Crecer, construir, conectar</h3>
              <div className='container-vision'>
                <div className='container-50-text'>
                  <p className='text-p-vision'>Queremos conectar a Freelancers con una red global de clientes, para desarrollar nuevos proyectos que aporten al crecimiento de la comunidad. El contacto y la autenticidad es la clave. </p>
                </div>
                <div className='container-50-text'>
                  <p className='text-p-vision'>Transformar el trabajo <strong>freelancer</strong> en un estilo de vida, un hobby y una pasión. Joobbi gestiona e impulsa el crecimiento personal y económico, otorgando la posibilidad de trabajar diferentes proyectos en paralelo. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block-blog-joobbi'>
          <div className='wrapper-white'>
            <div className='container-history-joobbi'>
              <div className='block-justify-history'>
                <div className='container-text-call'>
                  <h2 className='title-blog'>Nuestra Historia</h2>
                  <p className='p-styles-blog'>
                    Joobbi surge en Abril del año 2020 en respuesta a una gran crisis económica presente en el mismo año de su creación. Joobbi se constituye con varios socios con el fin de hacer frente a la tasa de desempleo en Colombia y proximamente a nivel Latinoamérica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block-blog-joobbi'>
          <div className='wrapper-white'>
            <div className='flex-container-blog-joobbi'>
              <div className='block-text-blog'>
                <div className='container-text-call'>
                  <h2 className='title-blog'>Conoce nuestro blog</h2>
                  <p className='p-styles-blog'>
                    Poseemos amplia información relevante para las carreras de hoy en día, nuestro objetivo es compartir nuestro conocimiento y trasmitirlo a la comunidad. 
                  </p>
                </div>
              </div>
              <div className='background-container-blog'>
                <div className='position-button-blog'>
                  <a href='/blog'>
                    <button className='button-joobbi'>Ir al blog</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper-call-to'>
          <div className='container-valor'>
            <div className='container-images-valores-start'>
              <img className='image-valores' src='http://joobbi.com/wp-content/uploads/2020/10/otro-CONOCENOS.png' alt='persona emocionada por su trabajo' />
            </div>
            <div className='container-adorno-back-start'>
              <img src='http://joobbi.com/wp-content/uploads/2020/10/puntos-adornos.svg' alt='adornos del menu en joobbi' className='adornos-puntos' />
              <div className='square-gray-start'></div>
            </div>
            <div className='container-flex-text-left'>
              <div className='container-justify-text'>
                <div className='container-text-call-rigth'>
                  <p className='p-valor'>En Joobbi encuentras el talento ideal para hacer desarrollar tu idea o negocio.</p>
                </div>
                <div className='button-flex-call-to'>
                  <div className='buttons-50'>
                    <a href='https://joobbi.com/soy-freelancer/'><button className='button-line'>Ofrece tus servicios <hr className='border-button-botom-line'></hr></button></a>
                  </div>
                  <div className='buttons-50'>
                    <a href='https://joobbi.com/solicitud-servicios/'><button className='button-joobbi'>Contacta un freelancer </button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  }
}

export default AboutUs;