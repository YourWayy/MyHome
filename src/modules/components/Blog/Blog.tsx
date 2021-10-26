import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BlogType, getBlogTC } from '../../../store/blog-reducers';
import { AppRootStateType } from '../../../store/store';
import Header from '../Header/Header';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './Blog.scss';
import { BlogItem } from './BlogItem/BlogItem';

export const Blog = () => {
  const blog = useSelector<AppRootStateType, Array<BlogType>>(state => state.blog.blog);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getBlogTC());
    window.scrollTo(0, 0);
  }, [dispatch, pathname]);

  return (
    <>
      <Header type={'blog'} />
      <div className="blog">
        <div className="container blog__container">
          <SectionTitle title={'Blog'} />

          {blog.reverse().map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};
