import React from 'react';
import "./Header.css";
import logo from '../../assets/images/logo.png';

const Header = ({aboutScroll, homeScroll} ) => {
  return (
    <div className='header'>
      <nav className='nav'>
        <button onClick={homeScroll} className='logoButt'><img  src={logo} alt="Logo" /></button>
        <div className='butt'>
          <button className='butt-item' onClick={aboutScroll}>Դասընթացներ</button>
          <button className='butt-item'>Առավելություններ</button>
          <button className='butt-item'>Թրեյներներ</button>
          <button className='butt-item'>Մեր մասին</button>
        </div>
        <button className='button_i'>Սկսե՛լ ուսումը</button>
      </nav>
    </div>
  );
};

export default Header;
