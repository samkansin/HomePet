import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/MainLayout.css';
import Loading from '../components/Loading';

export const FilterContext = createContext();

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [filterState, setfilterImg] = useState([]);

  useEffect(() => {
    setfilterImg([
      {
        filterName: 'All',
        filterImg:
          'https://knightsmsk.github.io/HomePetResource/filter/all.png',
      },
    ]);
  }, []);

  document.querySelector('html').setAttribute('loading', loading);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <Loading />
  ) : (
    <FilterContext.Provider value={{ filterState, setfilterImg }}>
      <>
        <NavBar />
        <div className='container'>
          <Outlet />
        </div>
        <ToastContainer />
      </>
    </FilterContext.Provider>
  );
};

export default MainLayout;
