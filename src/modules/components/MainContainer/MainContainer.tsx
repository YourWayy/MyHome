import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Shop from '../Projects/Shop';

export const MainContainer = () => (
  <>
    <Header />
    <Main />
    <AboutMe />
    <Contacts />
    <Footer />
  </>
);
