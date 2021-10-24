import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Shop from '../Shop/Shop';

export const MainContainer = () => (
  <>
    <Header type="main" />
    <Main />
    <AboutMe />
    <Footer />
  </>
);
