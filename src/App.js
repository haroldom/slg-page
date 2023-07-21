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
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/360177020_651700130321785_8316414069273177547_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGEUYE7lzwHkci0L3f51fMw0ANTAKT5dWjQA1MApPl1aMjlBgjUrSdhgrqePJFu1zaoQv4j1HDVu2M-BBCIWMSI&_nc_ohc=gai0RnWZSJcAX9Mq-Nw&_nc_ht=scontent.flim13-1.fna&oh=00_AfDpC16CpqgljtRIB0MzUAOOb5plCp9dg5l0EvdO1dsC-w&oe=64BD4A00',
      title: 'Ceremonia de izamiento del Pabellón nacional',
      content: 'Dra. Millie Edith Alvaro Lopez, participó en la ceremonia de izamiento del Pabellón nacional en nuestra Plaza de Armas de Ica, al haber sido nuestro Colegio distinguido con un Gallardete por ser ganador del desfile por el aniversario de Ica.'
    },
    {
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/360096991_650577590434039_3471953666740226307_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHquuGhkxaiRWItVjBe5TMX01JvFjKkYD3TUm8WMqRgPZjo0gG2ouTZuIv1uIHueR2Vw036PAoI2EWyJVOA4wFL&_nc_ohc=fYURKP3foTMAX-WtvBx&_nc_ht=scontent.flim13-1.fna&oh=00_AfDRXUZm5StWTQig_GjMcjhBnXHFF86SyNwmW6yXxLTLQw&oe=64BD4DE4',
      title: 'Premiación y entrega del Trofeo a la Selección de Futbol Sanluisana',
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
      title: 'Premiación a los estudiantes ganadores',
      content: 'Premiación a los estudiantes ganadores del concurso de canto Cantándole a mi Perú',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/359815220_649508407207624_3964247974108908154_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPyOvxwXug8Laj64m4-fWnvml41ITN9Pa-aXjUhM309oJOYzj0n_azwwdxXLrR1XIMceRl_0tbD3CfWBsmalrC&_nc_ohc=-CGuA2p5NhcAX_nNk-v&_nc_ht=scontent.flim13-1.fna&oh=00_AfBWlf4hEdCmiKhUJ87Lv2c15W4tvHTHJWAtP_r-2RvB6w&oe=64BB99A6',
      category: 'institucion'
    },
    {
      title: 'Iniciando las Actividades por la Semana Patria',
      content: 'Se dio inició las actividades programadas por semana patria en el Colegio Bicentenario San Luis Gonzaga',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/362231806_652725486885916_7986456468346896990_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEYe7bWO1UDT9fNW2GUek836W56w9HvIHnpbnrD0e8geW_DMLEbrnfx9juvA_gT6S42JvCjmzN0nKUAGTLYwmVH&_nc_ohc=IJI241mU450AX9ZAwlL&_nc_ht=scontent.flim13-1.fna&oh=00_AfDmzZwrIOFof8UB3ktjeyIUi0TXHof6fBeshOnEIf9ejA&oe=64BBAD1B',
      category: 'institucion'
    },
    {
      title: 'Premiación y entrega del Trofeo a la Selección de Futbol Sanluisana',
      content: 'Los jovenes que conforman la selección de Futbol San Luisana, resultaron campeones en el campeonato de fútbol categoría C',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/360090566_650577147100750_5143447796267340660_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGUC5B2_t15w4CMifKhaqbCbl04SzsC799uXThLOwLv37OwwXo2fPHScYNYd8VP82xI7gOCB0H5k2JbnNVe3IAO&_nc_ohc=4BrWAI0FW4AAX8ko4cO&_nc_ht=scontent.flim13-1.fna&oh=00_AfDU8A2llPnJ1qSFvQBZo--4IOFLQFdFIGCza8yKImlrzQ&oe=64BCF980',
      category: 'academico'
    },
    {
      title: 'Aprovechamiento Sostenible de las Propiedades del Noni',
      content: 'Exposición de los diversos trabajos e investigaciones del Noni con la finalidad de compartir e informar sobre su importancia',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/358542454_647077140784084_2111564357345312570_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGqjHcobnpQ9LfraIemvgOMfm68O0U4PPl-brw7RTg8-anUSsIu6dphrCe-lKLjbgrq5GiMlHKowvJZ-6l0Rki3&_nc_ohc=nx7DFPjGISkAX9KAAHw&_nc_ht=scontent.flim13-1.fna&oh=00_AfAarszROylQ912LWfKMhhv5K7AhpHEHIBp5hI31YjOAuw&oe=64BBD2C1',
      category: 'institucion'
    },
    {
      title: 'Charla de la Facultad de Odontología',
      content: 'Charla y Encuesta a cargo de los Docentes y Estudiantes de la Facultad de Odontología de la Universidad Nacional San Luis Gonzaga de Ica',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/358969816_646559470835851_5543121963636903176_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH6wvgmPbaWIZ2fWByS4glSUdh6KQanp7tR2HopBqenuy2fEsyKVqmvtn-anK2oZsEFwOiM47qfYqnyCAMEbdV7&_nc_ohc=fE6_DK6ch3QAX9qxN8h&_nc_ht=scontent.flim13-1.fna&oh=00_AfDiI0hs3HbHh4WxVQPeN2LzNi14HG9JTr_sMkqpTzsR3g&oe=64BD05DF',
      category: 'institucion'
    },
    {
      title: 'Agasajo por el día del maestro',
      content: 'La Directora de nuestra Institución Educativa "San Luis Gonzaga" de Ica Dra. Millie Edit Alvaro López y el Equipo Directivo, agasajan al Maestro Sanluisano en su Día',
      img: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/358090464_645832640908534_2979919106148858135_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHtipqhdNFJE4p9GFgxhTjVQZEFSb3SzNxBkQVJvdLM3Iug7CrU1po9nEOE4AQ0-h0HNWpsCYO3XTL8G0Erg_5J&_nc_ohc=eLE3IZEIVB8AX_MjRYR&_nc_ht=scontent.flim13-1.fna&oh=00_AfCfOiKTbszCWs0SOTCQprFLxn39MjQGvLWseZXMSBXwpA&oe=64BC58CD',
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
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={index*100} className="new-highlight-container" key={newH.title}>
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
                  <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={index*100} className="event-container" key={event.title}>
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
