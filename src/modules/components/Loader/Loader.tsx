import React from 'react';
import './Loader.scss';

export const Loader = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="plasma-2__wrapper">
        <svg width="0" height="0">
          <filter id="gooey-plasma-2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
              result="goo"
            />
          </filter>
        </svg>
        <div className="plasma-2">
          <ul className="gooey-container">
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
          </ul>
        </div>
      </div>
    </>
  );
};
