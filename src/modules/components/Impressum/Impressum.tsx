import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adressType } from '../../../api/api';
import { getFooterTC } from '../../../store/footer-reduser';
import { AppRootStateType } from '../../../store/store';
import Header from '../Header/Header';
import './Impressum.scss';

export const Impressum = () => {
  const contact = useSelector<AppRootStateType, adressType>(state => state.footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooterTC());
  }, [dispatch]);

  return (
    <>
      <Header type={'impressum'} />
      <div className="skills">
        <div className="container skills__container">
          <h1 className="impressum__title">Impressum</h1>

          <span className="impressum__name">{contact.name}</span>
          <span className="impressum__info">{contact.street}</span>
          <span className="impressum__info">{contact.city}</span>

          <a className="impressum__email" href={`Tel: ${contact.mobile}`}>
            Tel: <span className="impressum__email_adress">{contact.mobile}</span>
          </a>
          <a className="impressum__email" href={`mailto:${contact.email}`}>
            E-Mail: <span className="impressum__email_adress">{contact.email}</span>
          </a>
        </div>
      </div>
    </>
  );
};
