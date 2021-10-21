import React from 'react';
import './Main.scss';
import '../../common/styles/Container.scss';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { ProfileType } from '../../../store/profile-reducers';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import StarfieldAnimation from 'react-starfield-animation';
import BigBangStarField from 'react-big-bang-star-field';

let ParticleParamsDots = {
  particles: {
    size: {
      value: 1,
    },
    line_linked: {
      enable: false,
    },
  },
};

let ParticleParamsLines = {
  particles: {
    size: {
      value: 2,
    },
    line_linked: {
      enable: true,
    },
  },
};

export default function Main() {
  const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile);
  return (
    <div className="main">
      <div className="container main__container">
        <StarfieldAnimation
          style={{
            position: 'absolute',
            width: '100%',
            height: '90vh',
          }}
        />
        {/* <BigBangStarField
          numStars={666}
          maxStarSpeed={0.1}
          scale={4}
          style={{
            position: 'absolute',
            width: '100%',
            height: '90vh',
          }}
          starColor={'202, 215, 255'}
        /> */}
        {/* <Particles className="main__particles" params={ParticleParamsDots} />
        <Particles className="main__particles" params={ParticleParamsLines} /> */}
        <Fade top>
          <div className="main__wrapper-conteiner">
            <div className="main__wrapper__right">
              <div className="main__wrapper__right-inner">
                <ReactTypingEffect
                  text={profile.profession}
                  speed={300}
                  typingDelay={1000}
                  cursor="_"
                />
                <span className="main__name">{profile.name}</span>
                <span className="main__surname">{profile.surname}</span>
              </div>
            </div>

            <div className="main__wrapper__left">
              <Tilt className="Tilt" options={{ max: 20, speed: 4000 }}>
                <input type="image" src={profile.image} alt="photo" className="main__photo" />
              </Tilt>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
