/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';
import BlogCardsIndividual from '../Blogs/BlogCardsIndividual';
const HomeBlogs = () => {

  return (
    <>
      <div className='HomeBlogs-parent'>
        <div className="">
          <div className='HomeBlogs-title'>
            <div>
              <p>FROM OUR BLOG</p>
              <h2>Recent Posts</h2>
            </div>
            <div className='Home-blogs-viewmorebutton'>
              <button className='WhoweraeAbout-sub-viewmore-button'>
                <Link to="/blogs">View More</Link>
                <ArrowUpRight />
              </button>
            </div>
          </div>
          <BlogCardsIndividual />
        </div>
      </div>
    </>
  );
};

export default HomeBlogs;
