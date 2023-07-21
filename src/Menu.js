import React from 'react'
import 'stylesheets/Menu.css'
import slgBN from 'img/SLGBN.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const handleCloseMenu = () => {
        const menu = document.querySelector('.menu-main-container')
        const body = document.querySelector('body')
        body.style.overflow = 'auto'    
        menu.classList.remove('open')
        menu.classList.add('close')

    }
    return (
        <div className='menu-main-container'>
            <div className="menu-header">
                <img src={slgBN} alt="" />
                <div className="icon" onClick={handleCloseMenu}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
            <ul className='nav-list-desktop'>
                <li onClick={handleCloseMenu}><a href='#noticias'>Noticias</a></li>
                <li onClick={handleCloseMenu}><a href='#directivos'>Directivos</a></li>
                <li onClick={handleCloseMenu}><a href='#eventos'>Eventos</a></li>
                <li onClick={handleCloseMenu}><a href='#areastec'>Areas Técnicas</a></li>
                <li onClick={handleCloseMenu}><a href='#contacto'>Contacto</a></li>
            </ul>
        </div>
    )
}

export { Menu }