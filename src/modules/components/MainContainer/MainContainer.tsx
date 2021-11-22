import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { StatusType } from '../../../store/app-reducers';
import { AppRootStateType } from '../../../store/store';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';
import Main from '../Main/Main';

export const MainContainer = () => {
  const { pathname } = useLocation();
  const loader = useSelector<AppRootStateType, StatusType>(state => state.app.status);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header type="main" />
      {loader === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Main />
          <AboutMe />
        </>
      )}
    </>
  );
};
