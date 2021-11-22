import React from 'react';
import './BlogPopUp.scss';
import space from '../../../common/image/space2.jpg';

export const BlogPopUp = (props: BlogPopUpType) => {
  return (
    <div className="blogPopUp">
      <div className="blogPopUp__item ">
        {props.img ? (
          <img alt="popup" className="blogPopUp__image" src={props.img} />
        ) : (
          <img alt="popup" className="blogPopUp__image" src={space} />
        )}
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
