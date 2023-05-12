import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/MainLayout.css';
import Loading from '../components/Loading';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  document.querySelector('html').setAttribute('authen', false);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <Loading />
  ) : (
    <>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
