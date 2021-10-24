import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://61746ce908834f0017c7098a.mockapi.io/myHome',
});

export const getProfile = {
  profile() {
    return instance.get<Array<profileType>>('/profil');
  },
};

export const getAdress = {
  adress() {
    return instance.get<Array<adressType>>('/adress');
  },
};

export type profileType = {
  createdAt: string;
  image: string;
  irma: string;
  name: string;
  profession: string;
  surname: string;
};

export type adressType = {
  createdAt: string;
  name: string;
  street: string;
  city: string;
  id: string;
  mobile: string;
  email: string;
};
