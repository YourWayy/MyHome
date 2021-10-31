import React, { useEffect } from 'react';
import './Footer.scss';
import Fade from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { FooterItem } from './FooterItem.tsx/FooterItem';
import { getFooterTC } from '../../../store/footer-reduser';
import { adressType } from '../../../api/api';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/Routes';

export default function Footer() {
  const adrees = useSelector<AppRootStateType, adressType>(state => state.footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooterTC());
  }, [dispatch]);
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Fade>
          <div className="footer__title">© {new Date().getFullYear()} All Rights Reserved</div>
        </Fade>
      </div>
    </footer>
  );
}
