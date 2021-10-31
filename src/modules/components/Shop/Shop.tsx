import React, { useEffect } from 'react';
import './Shop.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import Header from '../Header/Header';
import { ShopItem } from './ShopItem';
import { getShopTC, ShopType } from '../../../store/shop-reducers';
import { useLocation } from 'react-router-dom';
import { getFooterTC } from '../../../store/footer-reduser';
import { StatusType } from '../../../store/app-reducers';
import { Loader } from '../Loader/Loader';

export default function Shop() {
  const loader = useSelector<AppRootStateType, StatusType>(state => state.app.status);
  const shop = useSelector<AppRootStateType, Array<ShopType>>(state => state.shop.shop);
  const paypalMe = useSelector<AppRootStateType, string>(state => state.footer.paypalme);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getShopTC());
    dispatch(getFooterTC());
    window.scrollTo(0, 0);
  }, [dispatch, pathname]);

  return (
    <>
      {loader === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Header type={'shop'} />
          <div className="projects">
            <div className="container projects__container">
              <SectionTitle title={'Shop'} />
              <ul className=" plan__elements__list ">
                {shop.map(shop => (
                  <ShopItem key={shop.id} shop={shop} paypalMe={paypalMe} />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
