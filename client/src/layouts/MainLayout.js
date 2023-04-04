import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

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
