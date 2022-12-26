import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Christopher Mata
            </Link>
          </div>
          <small class='website-rights'>Christopher Mata © 2020</small>
          <div class='social-icons'>
            <a 
                class='social-icon-link github'
                href="https://github.com/Christopher-Mata"
                target='_blank'
                rel="noreferrer"
                aria-label='Github'>
               <i class='fab fa-github' />
            </a>
            <a 
                class='social-icon-link youtube'
                href="https://www.instagram.com/christophermataa/"
                target='_blank'
                rel="noreferrer"
                aria-label='Instagram'>
               <i class='fab fa-instagram' />
            </a>
            <a 
                class='social-icon-link youtube'
                href="https://www.youtube.com/@christophermata/featured"
                target='_blank'
                rel="noreferrer"
                aria-label='Youtube'>
               <i class='fab fa-youtube' />
            </a>
            <a 
                class='social-icon-link twitter'
                href="https://twitter.com/christ0phermata"
                target='_blank'
                rel="noreferrer"
                aria-label='Twitter'>
               <i class='fab fa-twitter' />
            </a>
            <a 
                class='social-icon-link twitter'
                href="https://www.linkedin.com/in/christopher-mata1/"
                target='_blank'
                rel="noreferrer"
                aria-label='LinkedIn'>
                <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
