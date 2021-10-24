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
          <div className="footer__social">
            <div>
              <span className="footer__info">{adrees.name}</span>
              <span className="footer__info">{adrees.street}</span>
              <span className="footer__info">{adrees.city}</span>
              <Link className="footer__info-impressum" to={PATH.IMPRESSUM}>
                Impressum
              </Link>
            </div>
          </div>

          <div className="footer__title">© 2021 All Rights Reserved</div>
        </Fade>
      </div>
    </footer>
  );
}
