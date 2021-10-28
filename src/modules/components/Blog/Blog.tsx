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
      <div className="blogs">
        <div className="container blogs__container">
          <SectionTitle title={'Blog'} />
          <section className="blog">
            <div className="content__conteiner">
              <div className="blog__news">
                <ul className="blog__list">
                  {blog.map(blog => <BlogItem key={blog.id} blog={blog} />).reverse()}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
