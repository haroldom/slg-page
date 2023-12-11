import 'stylesheets/App.css';
import banner from 'img/banner.png'
import slgBN from 'img/SLGBN.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Slider from 'Slider';
import AreasTecnicas from 'AreasTecnicas';
import { useEffect, useState } from 'react';
import { Menu } from 'Menu'
import { Header } from 'Header';
import Contactanos from 'Contactanos';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  const newsHighlights = [
    {
      img: 'https://i.ibb.co/9w6FS5f/image.png"',
      title: 'Desfile Cívico  por los 277° Aniversario de Fundación',
      content: 'Dra. Millie Edith Alvaro Lopez, participó en la ceremonia de izamiento del Pabellón nacional en nuestra Plaza de Armas de Ica, al haber sido nuestro Colegio distinguido con un Gallardete por ser ganador del desfile por el aniversario de Ica.'
    },
    {
      img: 'https://i.ibb.co/qkNpYp4/image.png',
      title: 'Juego, aprendo y me siento saludable, Junto a San Luis',
      content: 'Premiación y entrega del Trofeo a la Selección de Futbol Sanluisana Campeón indiscutible de la Categoría C. La Directora Dra Millie Edith Álvaro López y su Equipo Directivo apoyando incondicionalmente a nuestro equipo.'
    }
  ]

  const schoolMode = {
    img: 'https://diarioviral.pe/uploads/07bf87971fa7_web%20mypes.png',
    mode: 'ModoFiestasPatrias',
    text: 'Vivamos juntos la alegría por los 202 años de Independencia del Perú'
  }

  const schoolNews = [
    {
      title: 'Elecciones Municipales',
      content: 'Elecciones Municipales Escolares para elegir al Alcalde Escolar Sanluisanos',
      img: 'https://i.ibb.co/xSzG0f6/image.png',
      category: 'institucion'
    },
    {
      title: 'VIDA ACTIVA, CREATIVA Y SALUDABLE',
      content: 'Actividades y Juegos Recreativos "VIDA ACTIVA, CREATIVA Y SALUDABLE" a cargo de los Docentes de Educación Física, con la presencia de nuestra Directora y Equipo Directivo.',
      img: 'https://i.ibb.co/LNGjMnh/image.png',
      category: 'institucion'
    },
    {
      title: 'Despedida a dos grandes maestros',
      content: 'Ceremonia de Homenaje, Reconocimiento y despedida a dos grandes maestros de nuestra institución educativa; La Prof. Alicia Quispe Segovia y el Prof. José Pisconte Huarcaya.',
      img: 'https://i.ibb.co/kDk825L/image.png',
      category: 'academico'
    },
    {
      title: 'Participación DEVFEST ICA',
      content: 'Estudiantes Sanluisanos del Taller de Informática participando en el Evento DEVFEST organizado por la Facultad de Ingeniería de Sistemas de la UNICA con el patrocinio de Google con los mejores ponente de Latinoamérica',
      img: 'https://i.ibb.co/yVph4QM/image.png',
      category: 'institucion'
    },
    {
      title: 'Campeones ONEM 2023',
      content: 'Premiación a nuestros Campeones Nacionales del Concurso de Matemática ONEM 2023 por parte de la Dirección Regional de Educación Ica',
      img: 'https://i.ibb.co/MhgKbhc/image.png',
      category: 'institucion'
    },
    {
      title: 'Bicampeones del Concurso de Villancicos 2023',
      content: 'La maravillosa sección L del 5to año de secundaria se consagró por segunda vez consecutiva, campeón absoluto de la categoría C',
      img: 'https://i.ibb.co/m8P9TYR/image.png',
      category: 'institucion'
    }
  ]

  const upcomingEvents = [
    {
      month: 'JUL',
      day: '25',
      category: 'Institucion',
      title: 'Día del Logro San Luisano',
      time: '8:00am',
      description: 'Ven y comparte con nosotros momentos gratificantes en donde compartiremos nuestros logros obtenidos en estos dos bimestres'
    },
    {
      month: 'JUL',
      day: '26',
      category: 'Tutoría',
      title: 'Resolvamos un Asunto Publico',
      time: '11:00am',
      description: 'Los estudiantes san luisanos compartirán su análisis y las soluciones propuestas ante un asunto público'
    },
    {
      month: 'JUL',
      day: '27',
      category: 'Institucion',
      title: 'Actuación por Fiestas Patrias',
      time: '8:00am',
      description: 'Evento especial conmemorando los 202 años de independencia.'
    },
  ]

  const [newsFilter, setnewsFilter] = useState(schoolNews);
  const [selectValue, setSelectValue] = useState('todas')

  useEffect(() => {
    Aos.init()
  }, [])

  useEffect(() => {
    if (selectValue === 'todas') {
      setnewsFilter(schoolNews)
    } else {
      setnewsFilter(schoolNews.filter(schoolnew => schoolnew.category === selectValue))
    }
  }, [selectValue])

  const handleInputFilter = () => {
    const dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('active')
  }


  return (
    <div className="App" >
      <Menu />
      <Header />
      <section>
        <div className="banner-main-container">
          <div className="img-container">
            <img src={banner} alt="banner" />
          </div>
          <div className="banner-info" data-aos="fade-up" data-aos-duration="1200">
            <h2>Bienvenidos</h2>
            <p>La Emblematica Institución Educativa "San Luis Gonzaga, alma mater de la ciudad de Ica, le da la bienvenida, líder en calidad educativa y reconocido oficialmente como colegio Bicentenario del Perú.</p>
            <div className='banner-info-btn'>
              <FontAwesomeIcon className='icon' icon={faArrowRight} />
              <p>Conoce nuestra Historia</p>
            </div>
          </div>
        </div>
        <div className="page-main-container">
          <div className="news-highlights-main-container">
            {newsHighlights.map((newH, index) => (
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100} className="new-highlight-container" key={newH.title}>
                <div className="img-container">
                  <img src={newH.img} alt="" />
                </div>
                <div className='new-highlight-info'>
                  <h2>{newH.title}</h2>
                  <p className='content'>
                    {newH.content}
                  </p>
                  <div className='new-info-btn'>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                    <p>Ver noticia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="parent-container" >
            <div className="current-mode-main-container">
              <div className="img-container">
                <img src={schoolMode.img} alt="" />
              </div>
              <div className="current-mode-info" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                <h2>#{schoolMode.mode}</h2>
                <p>{schoolMode.text}</p>
                <div className='current-mode-info-btn'>
                  <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  <p>Ver noticia</p>
                </div>
              </div>
            </div>

          </div>
          <div className='new-main-container' id='noticias'>
            <div className="new-header" data-aos="fade-right" data-aos-duration="500">
              <h1>Noticias del Colegio</h1>
              <div className="select-main-container">
                <div className="select-container dropdown">
                  <input onClick={handleInputFilter} type="text" className='textBox' readOnly={true} value={'Filtrar por: ' + selectValue.charAt(0).toUpperCase() + selectValue.slice(1)} />
                  <div className="option">
                    <div onClick={() => { setSelectValue('todas') }} className="">Todas</div>
                    <div onClick={() => { setSelectValue('academico') }} className="">Academicos</div>
                    <div onClick={() => { setSelectValue('institucion') }} className="">Institucion</div>
                    <div onClick={() => { setSelectValue('matricula') }} className="">Matricula</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-container">
              {
                newsFilter.map(schoolnew => (
                  <div data-aos="fade-up" data-aos-duration="1200" className="new-container" key={schoolnew.title}>
                    <div className="new-img-container">
                      <img src={schoolnew.img} alt="" />
                      <span></span>
                    </div>
                    <div className='new-info'>
                      <h3>{schoolnew.title}</h3>
                      <p>{schoolnew.content}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
          <div className="managers-container" id='directivos'>
            <h1 data-aos="fade-down" data-aos-duration="800">Nuestro Equipo Directivo</h1>
            <div className="slider-main-container" data-aos="fade-up" data-aos-duration="1200">
              <span className="background-line"></span>
              <Slider />
            </div>
          </div>
          <div className="upcoming-events-main-container" id='eventos'>
            <h2>Eventos Próximos</h2>
            <div className="button-container">
              <button className='events-button'>VER TODOS</button>
            </div>
            <div className="events-container">
              {
                upcomingEvents.map((event, index) => (
                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100} className="event-container" key={event.title}>
                    <div className="date">
                      <p>{event.month}</p>
                      <p>{event.day}</p>
                    </div>
                    <div className="content">
                      <div className="category">{event.category}</div>
                      <h3><a href="#">{event.title}</a></h3>
                      <p className='time'>{event.time}</p>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>


          </div>
          <div className="areas-tecnicas-main-container">
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">Áreas Técnicas</h2>
            <AreasTecnicas />
          </div>
          <div className="contact-main-container" id='contacto'>
            <Contactanos />
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-links">
          <div className="footer-section" >
            <ul>
              <li><a href='#'>Contáctanos</a></li>
              <li><a href='#'>Información</a></li>
              <li><a href='#'>Redes</a></li>
              <li><a href='#'>Página Web</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li><a href='#'>Ubicación</a></li>
              <li><a href='#'>Infraestructura</a></li>
              <li><a href='#'>Deportes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <span></span>
            <ul>
              <li><a href='#'>Librería</a></li>
              <li><a href='#'>Eventos</a></li>
              <li><a href='#'>Redes</a></li>
              <li><a href='#'>Periodico San Luisano</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <span></span>
            <ul>
              <li><a href='#'><FontAwesomeIcon className='icon' icon={faFacebook} />Facebook</a></li>
              <li><a href='#'><FontAwesomeIcon className='icon' icon={faInstagram} />Instagram</a></li>
              <li><a href='#'><FontAwesomeIcon className='icon' icon={faEnvelope} />Correo</a></li>
              <li><a href='#'><FontAwesomeIcon className='icon' icon={faPhone} />Teléfono</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img src={slgBN} alt="" />
          <p>© 2023 El Director y miembros de la I.E San Luis Gonzaga</p>
        </div>
      </footer>
    </div >
  );
}

export default App;
