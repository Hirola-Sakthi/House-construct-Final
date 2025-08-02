import React from 'react'
import { Link } from 'react-router-dom'

const Blogsbanner = () => {
  return (
    <>
      <div className='Blogsbanner-parent'>
        <div className="service-banner-subparent" style={{ backgroundImage: "url('/servicepage/servicebanner.jpg')" }}>
          <div className='service-banner-text'>
            <div className='text-line'>
              <p><Link to='/'>Home</Link></p>
              <h6>.</h6>
              <p><Link to='#'>Blogs</Link></p>
            </div>
            <h1>Blogs</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogsbanner