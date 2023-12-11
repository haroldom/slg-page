import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'stylesheets/Slider.css'

const Slider = () => {
    const directivos = [
        {
            image: 'https://i.ibb.co/2PF6cJ0/image.png',
            name: "Millie Alvaro Lopez",
            rol: 'Directora',
            frase: '¡Los san luisanos llevamos en nuestras venas el espíritu del progreso y la pasión por nuestro país!'
        },
        {
            image: 'https://i.ibb.co/74T33Lg/image.png',
            name: "Carmela Carrasco Reynaldo",
            rol: 'Subdirectora',
            frase: 'La dedicación y el compromiso de los san luisanos son el motor que impulsa el desarrollo de nuestra región y de nuestra nación.'
        },
        {
            image: 'https://i.ibb.co/tpgNMdX/image.png',
            name: "Pedro Falcón Guerra",
            rol: 'Subdirector',
            frase: 'Los san luisanos forjamos nuestro destino con determinación y valentía, construyendo un futuro lleno de oportunidades para las próximas generaciones.'
        },
        {
            image: 'https://i.ibb.co/0CPX29M/image.png',
            name: "Angel Cañedo Cortez",
            rol: 'Coordinador de OBE - Turno Mañana',
            frase: 'La pasión y el amor por nuestra tierra nos identifican como san luisanos, y con orgullo llevamos en alto nuestra bandera.'
        },
        {
            image: 'https://i.ibb.co/rQ4sk53/image.png',
            name: "Victor Siguas Sam",
            rol: 'Coordinador de OBE - Turno Tarde',
            frase: 'Desde San Luis, levantamos nuestras voces y trabajamos unidos para construir un futuro brillante y lleno de oportunidades para todos.'
        },

    ]
    return (
        <div className="slide-container">
            <div className="slide-content">
                <Swiper
                    loop={false}
                    grabCursor={true}
                    style={{
                        "--swiper-pagination-color": "#bc4354",
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
                    {directivos.map(directivo => (
                        <SwiperSlide className="card" key={directivo.name}>
                            <div className="image-content">
                                <img className='card-img' src={directivo.image} alt="" />
                            </div>
                            <div className="card-content">
                                <h2 className="name">{directivo.name}</h2>
                                <p className='rol'>{directivo.rol}</p>
                                <p>{directivo.frase}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>
    )
}

export default Slider