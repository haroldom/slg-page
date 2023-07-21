import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'stylesheets/AreasTecnicas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AreasTecnicas = () => {
    const areasTecnicas = [
        {
            image: 'https://blog.hubspot.es/hubfs/media/lenguajesprogramacion.jpeg',
            name: "Tecnologia e Informatica",
            description: "La tecnología e informática son clave para el futuro. Sumérgete en el mundo de la tecnologia y descubre la programacion."
        },
        {
            image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/trabajador-servicio-coche-musculoso-reparando-vehiculo_146671-19605-1611903989.webp',
            name: "Mecanica Automotriz",
            description: "La mecanica automotriz es fundamental para el futuro de la movilidad. Sumérgete en el apasionante mundo de la mecanica de vehículos y descubre cómo mantener y reparar automóviles con destreza y precisión."
        },
        {
            image: 'https://www.senati.edu.pe/sites/default/files/2017/carrera/09/mecanica-de-produccion-1800-x-1190.jpg',
            name: "Mecanica de Produccion",
            description: "Adéntrate en este emocionante campo y descubre cómo optimizar y mantener los procesos de producción, contribuyendo al desarrollo y crecimiento de las empresas."
        },
        {
            image: 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-profesional-acabado-carpinteria-mueble_l_primaria_1.jpg',
            name: "Carpinteria",
            description: "La carpintería es un arte atemporal con un futuro lleno de posibilidades. Sumérgete en el mundo de la madera y descubre la creatividad y habilidad necesarias para diseñar y construir muebles y estructuras únicas."
        },
        {
            image: 'https://images.unsplash.com/photo-1648343615199-03567050abbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            name: 'Zapatería y Calzado',
            description: 'Adéntrate en el emocionante proceso de diseño y fabricación de calzado, utilizando técnicas y materiales innovadores para crear modelos únicos.'
        },
        {
            name: 'Administración y Comercio',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
            description: 'Explora el mundo del marketing y las estrategias de ventas utilizadas para promover productos y servicios en el mercado competitivo actual.'
        },
        {
            image: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            name: 'Electricidad',
            description: ' Aprende sobre electrónica, medidas de seguridad y solución de problemas eléctricos comunes. La electricidad es esencial en nuestra sociedad moderna y te permitirá comprender tecnologías avanzadas.'
        }
    ]
    return (
        <div className="areasTecnicas-slide-container" id='areastec'>
            <div className="slide-content">
                <Swiper
                    grabCursor={true}
                    style={{
                        "--swiper-pagination-color": "#000",
                    }}
                    className='card-wrapper mySwiper'
                    spaceBetween={25}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        620: {
                            slidesPerView: 2,
                        },
                        950: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {areasTecnicas.map(area => (
                        <SwiperSlide className="card" key={area.name}>
                            <div className="image-content">
                                <img className='card-img' src={area.image} alt="" />
                            </div>
                            <div className="card-content">
                                <div className='card-info'>
                                    <h2 className="name">{area.name}</h2>
                                    <p>{area.description}</p>
                                </div>
                                <div className='card-content-button'>
                                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                                    <p>Ver más sobre {area.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>
    )
}

export default AreasTecnicas