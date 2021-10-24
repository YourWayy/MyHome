import React from 'react';
import { Link } from 'react-router-dom';

import { PATH } from '../../../routes/Routes';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav">
      <Link to={PATH.MAIN} className="nav__link">
        Irma Tjandra
      </Link>
      <Link to={PATH.SHOP} className="nav__link">
        Shop
      </Link>
    </div>
  );
}
