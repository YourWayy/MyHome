import React from 'react';
import './AboutMe.scss';
import '../../common/styles/Container.scss';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import Fade from 'react-reveal/Fade';
import { ProfileType } from '../../../store/profile-reducers';
import ReactPlayer from 'react-player';

export default function AboutMe() {
  const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile);

  return (
    <div className="skills">
      <div className="container skills__container">
        <Fade>
          <SectionTitle title={'About Me'} />
          <div className="skills__text">{profile.aboutme}</div>
          {!profile.video ? (
            ''
          ) : (
            <div className="skills__video-wrapper">
              <ReactPlayer url={profile.video} />
            </div>
          )}
        </Fade>
      </div>
    </div>
  );
}
