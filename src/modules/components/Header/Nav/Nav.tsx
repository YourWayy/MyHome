import React from 'react';
import { Link } from 'react-router-dom';

import { PATH } from '../../../routes/Routes';
import './Nav.scss';

export default function Nav(props: HeaderPropsType) {
  return (
    <div className="nav">
      <Link to={PATH.MAIN} className={props.type === 'main' ? 'nav__link active' : 'nav__link'}>
        Irma Tjandra
      </Link>
      <Link to={PATH.BLOG} className={props.type === 'blog' ? 'nav__link active' : 'nav__link'}>
        Blog
      </Link>
      <Link to={PATH.SHOP} className={props.type === 'shop' ? 'nav__link active' : 'nav__link'}>
        Shop
      </Link>
      <Link
        to={PATH.IMPRESSUM}
        className={props.type === 'impressum' ? 'nav__link active' : 'nav__link'}
      >
        Contact
      </Link>
    </div>
  );
}

type HeaderPropsType = {
  type: string;
};
