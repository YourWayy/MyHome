import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Blog } from '../components/Blog/Blog';
import { Impressum } from '../components/Impressum/Impressum';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { PageNotFound } from '../components/PageNotFound/PageNotFound';
import Shop from '../components/Shop/Shop';

export enum PATH {
  MAIN = '/Irma_Tjandra',
  IMPRESSUM = '/impressum',
  SHOP = '/shop',
  BLOG = '/blog',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={PATH.MAIN} />} />
      <Route path={PATH.MAIN} component={MainContainer} />
      <Route exact path={PATH.IMPRESSUM} component={Impressum} />
      <Route exact path={PATH.SHOP} component={Shop} />
      <Route exact path={PATH.BLOG} component={Blog} />
      <Route exact path={'*'} component={PageNotFound} />
    </Switch>
  );
};
