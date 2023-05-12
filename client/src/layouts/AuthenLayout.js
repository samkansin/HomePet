import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/AuthenLayout.css';

import React from 'react';

const AuthenLayout = () => {
  document.querySelector('html').setAttribute('authen', true);
  return (
      <div className='authen-container'>
        <div className='authen-field'>
          <Link to='/' className='goHome'>
            <i className='icon-logo'></i>
            <span>homepet</span>
          </Link>
          <div className='field-container'>
            <Outlet />
          </div>
        </div>
        <div className='authen-img'>
          {/* <img
          src='https://knightsmsk.github.io/HomePetResource/default%20img/authen-img.png'
          alt=''
        /> */}
        </div>
        <ToastContainer />
      </div>
  );
};

export default AuthenLayout;
