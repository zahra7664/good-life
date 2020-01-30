import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <>
      <header id="header">
        <div className="inner">
          <Link to="/" className="logo">
            <img src={require('../images/logo.png')} alt="زندگی خوب" />
          </Link>
          <nav id="nav">
            <Link to='/'>صفحه اصلی</Link>
            <Link to='/categories'>دسته‌بندی‌ها</Link>
            <Link to='/about'>درباره</Link>
          </nav>
        </div>
      </header>
      <a href="#menu" className="navPanelToggle">
        <FontAwesomeIcon icon={faBars} />
      </a>
    </>
  )
}

export default Header;
