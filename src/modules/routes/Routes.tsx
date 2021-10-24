import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import { Impressum } from '../components/Impressum/Impressum';
import { MainContainer } from '../components/MainContainer/MainContainer';
import Shop from '../components/Projects/Shop';

export enum PATH {
  MAIN = '/main',
  IMPRESSUM = '/impressum',
  SHOP = '/shop',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={PATH.MAIN} />} />
      <Route path={PATH.MAIN} component={MainContainer} />
      <Route exact path={PATH.IMPRESSUM} component={Impressum} />
      <Route exact path={PATH.SHOP} component={Shop} />
    </Switch>
  );
};
