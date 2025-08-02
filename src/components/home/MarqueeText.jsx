/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const MarqueeText = () => {
  return (
    <>
      <div className="marquee-text">
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>

            </ul>
            <ul className="marquee__content">
            <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
              <Link to='/contact-us'>
                <li>To refer and earn 50,000 click here</li>
              </Link>
            </ul>
          </div>
        </section>


      </div>
    </>
  )
}

export default MarqueeText