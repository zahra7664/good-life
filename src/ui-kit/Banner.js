import React from 'react';
import './Banner.css'

function Banner({ title, subtitle, cover }) {
  return (
    <div id="banner">
      <img
        src={cover}
        alt=""
        className="hero"
      />
      <div className="inner">
        <header>
          <h1>{title}</h1>
          <p>
            {subtitle}
          </p>
        </header>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  title: 'زندگی خوب',
  subtitle: 'بی‌نقص بودن دشمن خوب بودن است',
  cover: require('../images/hero.jpg')
};

export default Banner;
