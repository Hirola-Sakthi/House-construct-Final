import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import { PhoneCall } from 'react-feather';
const { Header } = Layout;

const CustomHeader = ({openModal}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Header className="Homepage-header-parent">
      <div className="Homepage-header-subParent">
        <div className='row'>
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container overflow-hidden">
                <div className='main-logo-image col-2'>
                  <Link to='/'>
                    <img src="/mainlogoimg.jpg" alt="" />
                  </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}
                        to="/"
                        style={{ borderBottom: window.location.pathname === '/' ? '3px solid #2f2205 ' : '' }}>Home</Link>

                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${window.location.pathname === '/about-us' ? 'active' : ''}`}
                        style={{ borderBottom: window.location.pathname === '/about-us' ? '3px solid #2f2205 ' : '' }} to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${window.location.pathname === '/services' ? 'active' : ''}`}
                        style={{ borderBottom: window.location.pathname === '/services' ? '3px solid #2f2205 ' : '' }} to="/services" >Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${window.location.pathname === '/house-floor-plans' ? 'active' : ''}`}
                        style={{ borderBottom: window.location.pathname === '/house-floor-plans' ? '3px solid #2f2205 ' : '' }} to="/house-floor-plans">Floor Plans</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link active" to="/portfolio">Portfolio</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link  className={`nav-link ${window.location.pathname === '/commercial-construction' ? 'active' : ''}`}
                        style={{ borderBottom: window.location.pathname === '/commercial-construction' ? '3px solid #2f2205 ' : '' }} to="/commercial-construction">Commercial</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${window.location.pathname === '/contact-us' ? 'active' : ''}`}
                        style={{ borderBottom: window.location.pathname === '/contact-us' ? '3px solid #2f2205 ' : '' }} to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className='header-log-in-button'>
                    <Link to='/contact-us' >Lets Build</Link>
                  </div>

                  {/* <Link to='/contact-us' > */}
                  <div className='getintouch-parent'>
                    <div className='phonecall-icon'>
                      <a href="tel:+91 7557557857" style={{ textDecoration: "none" }}>
                        <PhoneCall />
                      </a>
                    </div>
                    <a href="tel:+91 7557557857" style={{ textDecoration: "none" }}>
                      <p>+91 7557557857​</p>
                    </a>
                  </div>
                  {/* </Link> */}

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}
      <div className="mobile-menu">
        {/* <Button type="primary" className="button"> */}
        <MenuOutlined onClick={() => setDrawerVisible(true)} style={{ fontSize: '24px', color: '#000' }} />
        {/* </Button> */}
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={handleDrawerClose}
          visible={drawerVisible}
          className="drawer-menu"
        >
          <Menu theme="dark" mode="vertical">
            <Menu.Item key="1">
              <Link to="/" className="nav-link">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/services" className="nav-link">Services</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/commercial-construction" className="nav-link">Commercial</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </Header>
    
  );
};

export default CustomHeader;
