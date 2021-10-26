import React, { useEffect } from 'react';
import './Shop.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import Header from '../Header/Header';
import { adressType } from '../../../api/api';
import { ShopItem } from './ShopItem';
import { getShopTC, ShopType } from '../../../store/shop-reducers';
import { useLocation } from 'react-router-dom';
import { getFooterTC } from '../../../store/footer-reduser';

export default function Shop() {
  const contact = useSelector<AppRootStateType, adressType>(state => state.footer);
  const shop = useSelector<AppRootStateType, Array<ShopType>>(state => state.shop.shop);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getShopTC());
    dispatch(getFooterTC());
    window.scrollTo(0, 0);
  }, [dispatch, pathname]);

  return (
    <>
      <Header type={'shop'} />
      <div className="projects">
        <div className="container projects__container">
          <SectionTitle title={'Shop'} />
          <ul className="projects__list plan__elements__list ">
            {shop.map(shop => (
              <ShopItem key={shop.id} shop={shop} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
