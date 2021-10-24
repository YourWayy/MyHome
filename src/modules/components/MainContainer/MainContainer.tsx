import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

export const MainContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header type="main" />
      <Main />
      <AboutMe />
      <Footer />
    </>
  );
};
