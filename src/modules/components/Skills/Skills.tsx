import React, { HTMLAttributes } from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';
import Skill from './Skill/Skill';
import Slide from 'react-reveal/Slide';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { SkillInitialStateType } from '../../../store/skills-reducers';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export default function Skills() {
  const skills = useSelector<AppRootStateType, SkillInitialStateType>(state => state.skills);
  return (
    <div className="skills">
      <div className="container skills__container">
        <SectionTitle title={'About Me'} />
        <div className="skills__video-wrapper">
          <iframe
            width="820"
            height="520"
            src="https://www.youtube.com/embed/CGJ8OLK2dao"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
