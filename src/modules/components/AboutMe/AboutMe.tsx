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

  console.log(profile.video);

  return (
    <div className="skills">
      <div className="container skills__container">
        <Fade>
          <SectionTitle title={'About Me'} />
          <div className="skills__text">{profile.aboutme}</div>
          <div className="skills__video-wrapper">
            {/* <iframe
              width="620"
              height="420"
              src={profile.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}

            <ReactPlayer url="https://www.youtube.com/watch?v=CGJ8OLK2dao" />
          </div>
        </Fade>
      </div>
    </div>
  );
}
