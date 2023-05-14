import {
  Form,
  Link,
  NavLink,
  useSearchParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import '../CSS/NavBar.css';
import '../CSS/BaseColor.css';
import { useAuth } from '../utils/AuthProvider';

const NavBar = () => {
  const [filterParams, setfilterParams] = useSearchParams();
  const [{ filterName, filterImg }, setFilter] = useState({
    filterName: 'All',
    filterImg: 'https://knightsmsk.github.io/HomePetResource/filter/all.png',
  });

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = useRef(null);
  const profileMenu = useRef(null);

  useEffect(() => {
    let filter = filterParams.get('f') || 'All';
    setFilter({
      filterName: filter,
      filterImg: `https://knightsmsk.github.io/HomePetResource/filter/${
        filter === 'Cat' || filter === 'Dog' ? filter.toLowerCase() : 'all'
      }.png`,
    });
  }, [filterParams]);

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
      if (profileMenu.current) {
        if (
          profileMenu.current.classList.contains('active') &&
          !profileMenu.current.contains(e.target)
        ) {
          profileMenu.current.classList.remove('active');
        }
      }
    });

    let elementUnActive = document.querySelector(
      '.NavHomePet li[select="true"]'
    );
    let elementActive = document.querySelector(
      `.NavHomePet li[filter-name="${filterName}"]`
    );

    if (filterElement.classList.contains('active')) {
      filterElement.classList.remove('active');
    }

    if (elementUnActive !== elementActive && elementActive) {
      elementUnActive.removeAttribute('select');
      elementActive.setAttribute('select', 'true');
    }
  }, [filterName]);

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
          <NavLink
            to={filterParams.get('f') ? `/?f=${filterParams.get('f')}` : '/'}
          >
            <i className='icon-logo'></i>
          </NavLink>
          <NavLink
            to={filterParams.get('f') ? `/?f=${filterParams.get('f')}` : '/'}
            onMouseOver={(e) => handleHover(e.currentTarget, e)}
            onMouseOut={(e) => handleHover(e.currentTarget, e)}
          >
            <div className='menu-nav'>
              <span>Home</span>
              <i className='icon-active'></i>
            </div>
          </NavLink>
          <NavLink
            to={
              filterParams.get('f')
                ? `/adopt?f=${filterParams.get('f')}`
                : '/adopt'
            }
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
                  <img src={filterImg} alt='' />
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
                      filterParams.delete('f');
                      setfilterParams(filterParams);
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
                      setfilterParams({ f: 'Dog' });
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
                      setfilterParams({ f: 'Cat' });
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

          <div
            className='profile'
            ref={profileMenu}
            onMouseOver={(e) => {
              e.currentTarget.classList.add('active');
            }}
          >
            <div
              className='profile-img'
              style={{
                backgroundImage: `${
                  auth?.user?.uid
                    ? `url(${auth.user?.profileImg})`
                    : 'url("https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png")'
                }`,
              }}
            ></div>
            <div
              className='user-menu'
              ref={userMenu}
              onMouseOut={() => {
                if (profileMenu.current) {
                  if (profileMenu.current.classList.contains('active')) {
                    profileMenu.current.classList.remove('active');
                  }
                }
              }}
            >
              <ul className='listMenu'>
                {!auth?.user?.email ? (
                  <>
                    <li className='signin'>
                      <Link to='/authen' state={{ from: location.pathname }}>
                        <i className='icon-log_in' /> Log in
                      </Link>
                    </li>
                    <li className='signup'>
                      <Link to='/authen/signup'>
                        <i className='icon-register' /> Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='editProfile'>
                      <Link to='#'>
                        <i className='icon-edit-profile' /> Edit Profile
                      </Link>
                    </li>
                    <li className='verifyAccount'>
                      <Link to='#'>
                        <i className='icon-user-verify' /> Verify Account
                      </Link>
                    </li>
                    <li className='Logout'>
                      <Link
                        onClick={() => {
                          auth.signout(() => navigate('/'));
                        }}
                      >
                        <i className='icon-logout' /> Log out
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
