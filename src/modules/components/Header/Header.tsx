import React from 'react';
import Nav from './Nav/Nav';
import './Header.scss';

export default function Header(prosp: HeaderPropsType) {
  return (
    <div className="header">
      <div className="container header__wrapper">
        <Nav type={prosp.type} />
      </div>
    </div>
  );
}

type HeaderPropsType = {
  type: string;
};
