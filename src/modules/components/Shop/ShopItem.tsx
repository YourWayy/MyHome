import React from 'react';
import { useSelector } from 'react-redux';
import { adressType, ShopType } from '../../../api/api';
import { AppRootStateType } from '../../../store/store';

export const ShopItem = (props: ShopItemType) => {
  const contact = useSelector<AppRootStateType, adressType>(state => state.footer);

  return (
    <li className="plan__elements">
      <div className="plan__extra">
        <div className="plan__header">
          <div className="plan__elements__title">{props.shop.title}</div>
          <div className="plan__price" data-currency="€" data-period="per tasse">
            {props.shop.price}
          </div>
        </div>

        <ul className="plan__info">
          <img className="plan__list_image" src={props.shop.image} />
          <li className="plan__list">{props.shop.subtitle}</li>
          <li className="plan__list">
            Click Buy {'>'} Pay {'>'} and Send Me Email:
            <a className="impressum__email" href={`mailto:${contact.email}`}>
              <span className="impressum__email_yellow">{contact.email}</span>
            </a>
          </li>
        </ul>
        <div>
          <a href="https://www.paypal.com/de/home/" target="_blank">
            <button className="paypal-button">
              <span className="paypal-button-title">Buy now with</span>
              <span className="paypal-logo">
                <i>Pay</i>
                <i>Pal</i>
              </span>
            </button>
          </a>
        </div>
      </div>
    </li>
  );
};

type ShopItemType = {
  shop: ShopType;
};
