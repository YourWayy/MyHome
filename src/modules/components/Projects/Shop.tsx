import React from 'react';
import './Shop.scss';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { ProjectsInitialStateType } from '../../../store/projects-reducers';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { PayPalButton } from 'react-paypal-button-v2';

export default function Shop() {
  let projects = useSelector<AppRootStateType, ProjectsInitialStateType>(state => state.projects);
  return (
    <div className="projects">
      <div className="container projects__container">
        <SectionTitle title={'Shop'} />
        <ul className="plan__elements__list projects__list">
          <li className="plan__elements">
            <div className="plan__extra">
              <div className="plan__header">
                <div className="plan__elements__title">Free Trail</div>
                <div className="plan__price" data-currency="$" data-period="per month">
                  00
                </div>
              </div>

              <ul className="plan__info">
                <li className="plan__list">30 Free Trail</li>
                <li className="plan__list">5 Free Projects</li>
                <li className="plan__list">PHP 5 Enabled</li>
                <li className="plan__list">24/7 Suports</li>
              </ul>
              <button className="paypal-button">
                <span className="paypal-button-title">Buy now with</span>
                <span className="paypal-logo">
                  <i>Pay</i>
                  <i>Pal</i>
                </span>
              </button>
            </div>
          </li>

          <li className="plan__elements">
            <div className="plan__extra">
              <div className="plan__header">
                <div className="plan__elements__title">Basic</div>
                <div className="plan__price" data-currency="$" data-period="per month">
                  50
                </div>
              </div>

              <ul className="plan__info">
                <li className="plan__list">30 Free Trail</li>
                <li className="plan__list">5 Free Projects</li>
                <li className="plan__list">PHP 5 Enabled</li>
                <li className="plan__list">24/7 Suports</li>
              </ul>
              <button className="paypal-button">
                <span className="paypal-button-title">Buy now with</span>
                <span className="paypal-logo">
                  <i>Pay</i>
                  <i>Pal</i>
                </span>
              </button>
            </div>
          </li>

          <li className="plan__elements">
            <div className="plan__extra">
              <div className="plan__header">
                <div className="plan__elements__title">Ultimates</div>
                <div className="plan__price" data-currency="$" data-period="per month">
                  99
                </div>
              </div>

              <ul className="plan__info">
                <li className="plan__list">30 Free Trail</li>
                <li className="plan__list">5 Free Projects</li>
                <li className="plan__list">PHP 5 Enabled</li>
                <li className="plan__list">24/7 Suports</li>
              </ul>
              <div>
                <button className="paypal-button">
                  <span className="paypal-button-title">Buy now with</span>
                  <span className="paypal-logo">
                    <i>Pay</i>
                    <i>Pal</i>
                  </span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
