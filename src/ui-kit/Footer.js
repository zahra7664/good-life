import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <h2>زندگی خوب</h2>
        <p>یه سری توضیحات اینجا گذاشته بشه</p>

        <ul className="icons">
          <li>
            <a href="mailto:jzahra408@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faCodeBranch} />
            </a>
          </li>
        </ul>
        <p className="copyright">&copy; 2020 Zahra Jokar </p>
      </div>
    </footer>
  )
}

export default Footer;
