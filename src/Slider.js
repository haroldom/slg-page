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
            image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t1.6435-9/35671743_10211628116807170_2009136923125219328_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGc8QKzp9C_TM-K3fXJV41GU_sB96H2x_ZT-wH3ofbH9lDrzZ9AxgFTIwpMzD1Npp3kZJWEFyKch28MfAvpGhY-&_nc_ohc=1HX2SaV2OBgAX8aMJRc&_nc_ht=scontent.flim13-1.fna&oh=00_AfAnHL7XleUIR30v0g0TrF8qcCeC__WMeMfk_K0A_6UYGA&oe=64DED225',
            name: "Millie Alvaro Lopez",
            rol: 'Directora',
            frase: '¡Los san luisanos llevamos en nuestras venas el espíritu del progreso y la pasión por nuestro país!'
        },
        {
            image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t1.6435-9/72891088_10215091472472818_7277487294666244096_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbe8YioglpbBjXP3jVGaX-BqQvjKyfoMYGpC-MrJ-gxm7ML5fJ9er8wGekpFPgZh7zjvsnW01Ph_Njqp18owOJ&_nc_ohc=fK6IVtEZzXgAX8Wls-h&_nc_ht=scontent.flim13-1.fna&oh=00_AfDiFBovxlmHCztpFZZ1HjgR-y-SooQAlrnLDy595M7BHw&oe=64DEE175',
            name: "Carmela Carrasco Reynaldo",
            rol: 'Subdirectora',
            frase: 'La dedicación y el compromiso de los san luisanos son el motor que impulsa el desarrollo de nuestra región y de nuestra nación.'
        },
        {
            image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/358090464_645832640908534_2979919106148858135_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHtipqhdNFJE4p9GFgxhTjVQZEFSb3SzNxBkQVJvdLM3Iug7CrU1po9nEOE4AQ0-h0HNWpsCYO3XTL8G0Erg_5J&_nc_ohc=eLE3IZEIVB8AX_MjRYR&_nc_ht=scontent.flim13-1.fna&oh=00_AfDkZI2EIhmatHCBXhZxBD3j9VVKNLVf2bSA2Ed0rH_G7g&oe=64BC58CD',
            name: "Pedro Falcón Guerra",
            rol: 'Subdirector',
            frase: 'Los san luisanos forjamos nuestro destino con determinación y valentía, construyendo un futuro lleno de oportunidades para las próximas generaciones.'
        },
        {
            image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t1.6435-9/73015427_1248101775361933_7046177445778554880_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHeHAMJXiS5GIaYem9xRsNrPDyTMRGtFio8PJMxEa0WKtsBGwpUtDsMIGpjYbYW1-8qMG1Uv6svjTE7GPUT-yWm&_nc_ohc=5Wd6dCA9Nv4AX8wcV_J&_nc_ht=scontent.flim13-1.fna&oh=00_AfAybjgAlE3fmvJ-vZCjyArT2k8DrHkR0mdpfqioOmJseQ&oe=64DED8D9',
            name: "Angel Cañedo Cortez",
            rol: 'Coordinador de OBE - Turno Mañana',
            frase: 'La pasión y el amor por nuestra tierra nos identifican como san luisanos, y con orgullo llevamos en alto nuestra bandera.'
        },
        {
            image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/356677094_6281099311985814_2728616558826383648_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGcKt7J3APZW2UzBSDPsLUhFazk29hUeusVrOTb2FR66-pdmuXRQ59A4NVm9YNBEgOgt2anG5rsEtiCtTmiqi90&_nc_ohc=SpaPNWivrPwAX_A1FBG&_nc_ht=scontent.flim13-1.fna&oh=00_AfBg_LBKI_TabuE4_NQ4KqExukC-kKEy-f21jv9IoMV5Iw&oe=64BD48DB',
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