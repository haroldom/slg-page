import React from 'react'
import logo from 'img/SlgLogo.png'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    const handleOpenMenu = () => {
        const menu = document.querySelector('.menu-main-container')
        const body = document.querySelector('body')
        menu.classList.add('open')
        body.style.overflow = 'hidden'
    }

    let lastScrollTop = 0;

    function handleScroll() {
        const scrollTop = window.scrollYOffset || document.documentElement.scropllTop;
        if (scrollTop > lastScrollTop) {
            console.log("Esconder")
        } else {
            console.log("mostrar")
        }
        lastScrollTop = scrollTop
    }
    window.addEventListener('scroll', handleScroll);

    return (
        <header className='header'>
            <nav>
                <img className='header-logo' src={logo} alt='logoSlg' />
                <div className="nav-desktop">
                    <div className="li-container" >
                        <AiOutlineSearch className='header-icon' />
                        <p>Menu</p>
                    </div>
                    <div className="li-container" onClick={handleOpenMenu}>
                        <AiOutlineMenu className='header-icon' />
                        <p>Buscar</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Header }