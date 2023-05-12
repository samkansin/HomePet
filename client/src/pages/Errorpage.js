import { useRouteError } from 'react-router-dom';
import '../CSS/Errorpage.css';

const Errorpage = () => {
  const error = useRouteError();
  document.querySelector('html').removeAttribute('authen');
  return (
    <div className='error-container'>
      <img
        className='error-img'
        src='https://knightsmsk.github.io/HomePetResource/default%20img/error-page.gif'
        alt=''
      />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <span>
          {error.status} {error.statusText || error.message}
        </span>
      </p>
    </div>
  );
};

export default Errorpage;
