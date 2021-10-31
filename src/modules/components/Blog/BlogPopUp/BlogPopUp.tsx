import React from 'react';
import './BlogPopUp.scss';

export const BlogPopUp = (props: BlogPopUpType) => {
  return (
    <div className="blogPopUp">
      <div className="blogPopUp__item ">
        <img alt="popup" className="blogPopUp__image" src={props.img} />
      </div>
      <div className="blogPopUp__subtitle">{props.title}</div>
      <div className="blogPopUp__text">{props.text}</div>
      <button className="blogPopUp__button" onClick={props.onButtonHandler}>
        Close
      </button>
    </div>
  );
};

type BlogPopUpType = {
  title: string;
  text: string;
  img: string;
  onButtonHandler: () => void;
};
