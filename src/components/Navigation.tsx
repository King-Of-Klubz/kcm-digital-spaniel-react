import React, { useState } from 'react';
import '../css/components/Navigation.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

export const Navigation = (props: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!props.hidden && <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div >
                    <img src={Logo} alt='digital-spaniel' className="nav-logo" />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`} />
                    <div className={`bar ${isOpen ? 'open' : ''}`} />
                    <div className={`bar ${isOpen ? 'open' : ''}`} />
                </div>
                <ul className="nav-links">
                    <li>
                        <Link activeClass="active" to="services" spy={true} smooth={true} duration={500}>Services</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>Work</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </nav>}
        </>
    );
}

