import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogType, getBlogTC } from '../../../store/blog-reducers';
import { AppRootStateType } from '../../../store/store';
import Header from '../Header/Header';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './Blog.scss';
import { BlogItem } from './BlogItem/BlogItem';

export const Blog = () => {
  const blog = useSelector<AppRootStateType, Array<BlogType>>(state => state.blog.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogTC());
  }, [dispatch]);

  console.log(blog);
  return (
    <>
      <Header type={'blog'} />
      <div className="skills">
        <div className="container skills__container">
          <SectionTitle title={'Blog'} />

          {blog.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};
