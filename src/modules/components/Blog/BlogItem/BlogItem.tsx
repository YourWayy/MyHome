import React, { useState } from 'react';
import { BlogType } from '../../../../store/blog-reducers';
import { BlogPopUp } from '../BlogPopUp/BlogPopUp';
import space from '../../../common/image/space2.jpg';

export const srtingLenghtCutter = (value: string | number) => {
  if (value && typeof value === 'string') {
    return value.length > 300 ? value.substring(0, 300) + '...' : value;
  } else if (value >= 0 && typeof value === 'number') {
    return value;
  }
  return;
};

export const BlogItem = (props: BlogsPropsType) => {
  const [blogOpen, setBlogOpen] = useState<boolean>(false);

  const onBlogPopUpHandler = () => {
    if (!blogOpen) {
      setBlogOpen(true);
    } else {
      setBlogOpen(false);
    }
  };

  return (
    <>
      <li className="blog__child">
        {blogOpen ? (
          <BlogPopUp
            title={props.blog.title}
            text={props.blog.subtitle}
            img={props.blog.image}
            onButtonHandler={onBlogPopUpHandler}
          />
        ) : (
          ''
        )}

        {props.blog.image ? (
          <img src={props.blog.image} alt="seo" className="blog__img" />
        ) : (
          <img src={space} alt="seo" className="blog__img" />
        )}

        <div className="blog__calender">
          <div className="blog__link" onClick={onBlogPopUpHandler}>
            {props.blog.title}
          </div>
          <div className="blog__info">
            <span className="blog__date">{props.blog.createdAt}</span>
          </div>
          <div className="blog__message"> {srtingLenghtCutter(props.blog.subtitle)}</div>
          <button className="blog__clouse-button" onClick={onBlogPopUpHandler}>
            Read More
          </button>
        </div>
      </li>
    </>
  );
};

type BlogsPropsType = {
  blog: BlogType;
};
