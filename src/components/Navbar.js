import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
// This uses Font Awesome CDN it helps you automate accessibility support more easily so your icons work for the most people possible
// https://fontawesome.com/v5/docs/web/use-with/wordpress/install-manually

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
             <div className='navbar-container'>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='https://github.com/Christopher-Mata' 
                        target='_blank'
                        rel='noreferrer'
                        className='nav-links' 
                        onClick={closeMobileMenu}> 
                            // Projects
                        </a>
                    </li>
                </ul>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Christopher Mata
            </Link>
           
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <a 
                        href='https://linktr.ee/christophermata' 
                        target='_blank'
                        rel='noreferrer'
                        className='nav-links' 
                        onClick={closeMobileMenu}> 
                            // Contact!
                        </a>
                    </li>
                </ul>
             </div>
        </nav>
    </>
  )
}

export default Navbar