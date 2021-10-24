import React from 'react';
import Header from '../Header/Header';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './Blog.scss';
import { BlogItem } from './BlogItem/BlogItem';

export const Blog = () => {
  return (
    <>
      <Header type={'blog'} />
      <div className="skills">
        <div className="container skills__container">
          <SectionTitle title={'Blog'} />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </>
  );
};
