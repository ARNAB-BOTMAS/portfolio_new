import '../sass/Header.scss';
import Typed from 'typed.js';
import React, { useEffect } from 'react';

const Header = ({ profileImg, socialMe, profileName }) => {
  useEffect(() => {
    const element = document.querySelector('.autoTyped');
    const options = {
      strings: ['Web Development', 'Android Development', 'Python Development'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(element, options);
    return () => typed.destroy();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header" id="home">
      <div className="innerHeader">
        <div className="innerImg">
          {profileImg && <img src={profileImg} alt="Profile" />}
        </div>
        {profileName && (
          <div className="innerText">
            <span className="innerHeaderFirst">Hi there,</span>
            <span className="innerHeaderSecond">I'm {profileName}</span>
            <span className="innerHeaderThrid">
              I'm into <span className="autoTyped innerinnerHeaderThrid"></span>
            </span>

            <button onClick={scrollToAbout}>About Me</button>

            <div className="profileLink">
              {socialMe.map((item, index) => (
                <a
                  href={item.media_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={item.name}
                >
                  <ion-icon name={item.media_logo}></ion-icon>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
