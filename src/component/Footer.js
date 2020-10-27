import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import logo from '../flipkart.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        <img src={logo} alt="flipKart" className="navbar-brand" />
         Flipkart Fassion 
        </p>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Feshion</h2>
            <Link to='/'>Perfume</Link>
            <Link to='/'>jewellery</Link>
            <Link to='/'>Mobile</Link>
            <Link to='/'>laptops</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Men's wear</h2>
            <Link to='/'>Jeans and trouser</Link>
            <Link to='/'>shirts</Link>
            <Link to='/'>T-shirts</Link>
            <Link to='/'>shoes</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>women's wear</h2>
            <Link to='/'>Jeans and trouser</Link>
            <Link to='/'>Lehenga</Link>
            <Link to='/'>Shari</Link>
          </div>
          <div class='footer-link-items'>
            <h2>10 to 16 years</h2>
            <Link to='/'>Jeans</Link>
            <Link to='/'>shirts and T-shirts</Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Flipkart
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>FlipKart © 2020</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;