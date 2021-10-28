import { v1 } from 'uuid';
import { adressType, getAdress } from '../api/api';
import { Dispatch } from 'redux';
import { appChangeStatus } from './app-reducers';

export const footerReducer = (
  footer: adressType = initialState,
  action: ActionType
): adressType => {
  switch (action.type) {
    case 'FOOTER/GET-FOOTER':
      return {
        ...footer,
        name: action.name,
        street: action.street,
        city: action.city,
        mobile: action.mobile,
        email: action.email,
        paypalme: action.paypalme,
      };
    default:
      return footer;
  }
};

export const getFooterAC = (
  name: string,
  street: string,
  city: string,
  mobile: string,
  email: string,
  paypalme: string
) => {
  return { type: 'FOOTER/GET-FOOTER', name, street, city, mobile, email, paypalme } as const;
};

export const getFooterTC = () => (dispatch: Dispatch) => {
  getAdress.adress().then(res => {
    const adress = res.data[0];
    dispatch(
      getFooterAC(
        adress.name,
        adress.street,
        adress.city,
        adress.mobile,
        adress.email,
        adress.paypalme
      )
    );
    dispatch(appChangeStatus('done'));
  });
};

export type ActionType = ReturnType<typeof getFooterAC>;

const initialState: adressType = {
  createdAt: '',
  name: '',
  street: '',
  city: '',
  id: '',
  mobile: '',
  email: '',
  paypalme: '',
};
