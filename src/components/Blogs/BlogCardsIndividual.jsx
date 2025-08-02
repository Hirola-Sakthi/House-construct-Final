import React from 'react';
import { Link } from 'react-router-dom';

const BlogCardsIndividual = () => {

  const blogData = [
    {
      title: 'Importance of Vastu Shastra in Modern Home Construction',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '22 January, 2025',
      description: 'Learn how Vastu Shastra influences modern home construction. House Construct helps you design homes with positive energy, balance, and enhanced well-being!',
      image: 'blog/importance-of-vastu-shastra-in-home-construction.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/importance-of-vastu-shastra-in-home-construction'
    },
    {
      title: 'Benefits of Turnkey Construction Services for Homeowners',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '12 February, 2025',
      description: 'Learn how turnkey construction services by House Construct simplify home building. Save time, reduce stress, and ensure quality from design to project completion!',
      image: 'blog/benefits-of-turnkey-construction-services.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/benefits-of-turnkey-construction-services'
    },
    {
      title: 'Best Color Combinations for Home Interior Design in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '5 March, 2025',
      description: 'Find the perfect color combinations for your home in Bangalore. Get expert tips from House Construct to make your space stylish, cozy, and beautiful!',
      image: 'blog/best-color-combinations-for-home-interior-design-in-bangalore.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/best-color-combinations-for-home-interior-design-in-bangalore'
    },
  ];

  return (
    <div className='HomeBlogs-parent'>
      <div className="row">
        {blogData.map((blog, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <Link to={blog.link} style={{ textDecoration: "none" }}>
              <div className="HomeBlogs-sub">
                <div className='HomeBlogs-sub-image'>
                  <img src={blog.image} alt="" />
                </div>
                <p>{blog.date}</p>
                <div className='HomeBlogs-presentations'>
                  <h1>{blog.title}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardsIndividual;
