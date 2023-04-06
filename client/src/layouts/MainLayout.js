import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../CSS/MainLayout.css';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
