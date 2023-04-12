import { Form, Link, NavLink } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { FilterContext } from '../layouts/MainLayout';
import '../CSS/NavBar.css';
import '../CSS/BaseColor.css';

const NavBar = () => {
  const { filterState, setfilterImg } = useContext(FilterContext);

  useEffect(() => {
    let filterElement = document.querySelector(
      '.NavHomePet .search .filter .btn-filter'
    );

    document.addEventListener('click', (e) => {
      if (
        filterElement.classList.contains('active') &&
        !filterElement.contains(e.target)
      ) {
        filterElement.classList.remove('active');
      }
    });

    let elementUnActive = document.querySelector(
      '.NavHomePet li[select="true"]'
    );
    let elementActive = document.querySelector(
      `.NavHomePet li[filter-name="${filterState[0].filterName}"]`
    );

    if (filterElement.classList.contains('active')) {
      filterElement.classList.remove('active');
    }

    if (elementUnActive !== elementActive) {
      elementUnActive.removeAttribute('select');
      elementActive.setAttribute('select', 'true');
    }
  }, [filterState[0].filterName]);

  const handleHover = (element, event) => {
    const activeHidden = document.querySelector(
      '.NavHomePet .first a .icon-active.hidden'
    );
    const menuActive = document.querySelector(
      '.NavHomePet .first a[aria-current="page"]:not(:first-child) .icon-active'
    );

    if (activeHidden) {
      activeHidden.classList.remove('hidden');
    }

    if (menuActive && event._reactName === 'onMouseOver') {
      if (element.className !== 'active') {
        menuActive.classList.add('hidden');
        element.classList.add('active');
      }
    } else {
      if (
        element.classList.contains('active') &&
        !element.hasAttribute('aria-current')
      ) {
        element.classList.remove('active');
        menuActive.classList.remove('hidden');
      }
    }
  };

  return (
    <>
      <nav className='NavHomePet'>
        <div className='first'>
          <NavLink to='/'>
            <i className='icon-logo'></i>
          </NavLink>
          <NavLink
            to='/'
            onMouseOver={(e) => handleHover(e.currentTarget, e)}
            onMouseOut={(e) => handleHover(e.currentTarget, e)}
          >
            <div className='menu-nav'>
              <span>Home</span>
              <i className='icon-active'></i>
            </div>
          </NavLink>
          <NavLink
            to='/adopt'
            onMouseOver={(e) => handleHover(e.currentTarget, e)}
            onMouseOut={(e) => handleHover(e.currentTarget, e)}
          >
            <div className='menu-nav'>
              <span>Adopt</span>
              <i className='icon-active'></i>
            </div>
          </NavLink>
          <NavLink
            to='/chat'
            onMouseOver={(e) => handleHover(e.currentTarget, e)}
            onMouseOut={(e) => handleHover(e.currentTarget, e)}
          >
            <div className='menu-nav'>
              <span>Chat</span>
              <i className='icon-active'></i>
            </div>
          </NavLink>
          <NavLink
            to='/bookmark'
            onMouseOver={(e) => handleHover(e.currentTarget, e)}
            onMouseOut={(e) => handleHover(e.currentTarget, e)}
          >
            <div className='menu-nav'>
              <span>Bookmark</span>
              <i className='icon-active'></i>
            </div>
          </NavLink>
        </div>

        <Form>
          <div className='search'>
            <div className='filter'>
              <div
                className='btn-filter'
                onClick={(e) => {
                  e.currentTarget.classList.toggle('active');
                }}
              >
                <div className='img-filter'>
                  <img src={filterState[0].filterImg} alt='' />
                </div>
                <i className='icon-up'></i>
                <span className='line'></span>
              </div>
              <div className='select-filter'>
                <ul>
                  <li
                    filter-name='All'
                    select='true'
                    onClick={(e) => {
                      setfilterImg([
                        {
                          filterName:
                            e.currentTarget.getAttribute('filter-name'),
                          filterImg:
                            e.currentTarget.children[0].children[0].src,
                        },
                      ]);
                    }}
                  >
                    <div className='img-filter'>
                      <img
                        src='https://knightsmsk.github.io/HomePetResource/filter/all.png'
                        alt=''
                      />
                    </div>
                    <span className='text-filter'>All</span>
                  </li>
                  <li
                    filter-name='Dog'
                    onClick={(e) => {
                      setfilterImg([
                        {
                          filterName:
                            e.currentTarget.getAttribute('filter-name'),
                          filterImg:
                            e.currentTarget.children[0].children[0].src,
                        },
                      ]);
                    }}
                  >
                    <div className='img-filter'>
                      <img
                        src='https://knightsmsk.github.io/HomePetResource/filter/dog.png'
                        alt=''
                      />
                    </div>
                    <span className='text-filter'>Dog</span>
                  </li>
                  <li
                    filter-name='Cat'
                    onClick={(e) => {
                      setfilterImg([
                        {
                          filterName:
                            e.currentTarget.getAttribute('filter-name'),
                          filterImg:
                            e.currentTarget.children[0].children[0].src,
                        },
                      ]);
                    }}
                  >
                    <div className='img-filter'>
                      <img
                        src='https://knightsmsk.github.io/HomePetResource/filter/cat.png'
                        alt=''
                      />
                    </div>
                    <span className='text-filter'>Cat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='search-input'>
              <input type='text' placeholder='Search...' />
              <i
                className='icon-clear'
                onClick={(e) => {
                  e.currentTarget.previousSibling.value = '';
                }}
              ></i>
            </div>
            <div className='last'>
              <i className='icon-search'></i>
            </div>
          </div>
        </Form>

        <div className='left'>
          <Link to='/post' className='post'>
            <i className='icon-post'></i>
          </Link>
          <div className='noti'>
            <i className='icon-noti'></i>
          </div>
          <div className='profile'>
            <img
              src='https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png'
              alt=''
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
