import React from 'react';

import facebookLogo from '../assets/facebookLogo.svg';
import userIcon from '../assets/userIcon.png';

function Header() {
  return (
    <header id="header">
      <img src={facebookLogo} alt="Fcebook Logo" id="logo" />
      <div id="my_profile">
        <p>Meu perfil</p>
        <img src={userIcon} alt="User icon" />
      </div>
    </header>
  );
}

export default Header;
