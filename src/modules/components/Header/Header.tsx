import React, { useState } from 'react';
import Nav from './Nav/Nav';
import './Header.scss';

export default function Header(prosp: HeaderPropsType) {
  const [header, setHeader] = useState<boolean>(false);

  const changeBackgroundHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundHeader);

  return (
    <div className={header ? 'header__active' : 'header'}>
      <div className="container header__wrapper">
        <Nav type={prosp.type} />
      </div>
    </div>
  );
}

type HeaderPropsType = {
  type: string;
};
