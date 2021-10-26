import React from 'react';
import { BlogType } from '../../../../store/blog-reducers';

export const BlogItem = (props: BlogsPropsType) => {
  return (
    <>
      <div className="blog__item ">
        <div className="blog__title">
          <span>{props.blog.title}</span>
        </div>
        <img className="blog__image" src={props.blog.image} />
      </div>
      <div className="blog__subtitle">{props.blog.title}</div>
      <div className="blog__text">{props.blog.subtitle}</div>
    </>
  );
};

type BlogsPropsType = {
  blog: BlogType;
};
