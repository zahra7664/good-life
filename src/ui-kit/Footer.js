import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <h2>زندگی خوب</h2>
        <p>
        زندگی مسیری است که همهِ ما در آن پاگذاشته ایم و مانند یک کوهنوردی است و قطعاً اگر در این مسیرِ کوهنوردی، ما با یک راهنما برویم خیلی راحت تر و بهتر می توانیم به نوک قله برسیم و کمتر اشتباه می کنیم و به بی راهه می رویم.حال این راهنما در زندگیِ ما، همین بزرگان هستند و سخنان آنها می تواند در زندگیِ ما بسیار تاثیر گذار باشد و از خطاهای ما در این مسیر به شدت بکاهد و مسیر ما را در زندگی به سمت پیشرفت و موفقیت سوق دهد. بزرگان به دلیل این که در مسیر زندگی موفق شده اند و این راه را زودتر از ما رفته اند حالا با کوله باری از تجربه می توانند به ما سرنخ هایی را بدهند تا ما نیز در این مسیر به موفقیت برسیم.


        </p>

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
