import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../utils/AuthProvider';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  let from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataLogin = new FormData(e.target);
    let email = dataLogin.get('email');
    let password = dataLogin.get('password');

    if (!email || !password) {
      return toastWarning('Please enter your email or password');
    }

    try {
      setLoading(true);
      toastLoading('Please wait...');
      const response = await fetch('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const accessToken = data?.accessToken;
        const roles = data?.roles;
        const user = { email, roles, accessToken };
        await auth.signin(user, () => navigate(from, { replace: true }));
      } else if (response.status === 401) {
        toastError('Unauthorized');
      } else {
        toastError('login error');
      }
    } catch (error) {
      toastError(`Error. Try again later: (${error})!`);
    } finally {
      setLoading(false);
      toastUpdateLoading('Successfully logged in');
    }
  };

  //Redirect when logon
  const redirect = useCallback(() => {
    if (!loading && auth?.user?.email) {
      console.log('redirect to ', from, auth.user.email, window.history.state);
      if (from) {
        console.log('redirect to', from);
        return navigate(from, { replace: true });
      } else {
        if (window.history.state && window.history.state.idx > 0) {
          navigate(-1);
        } else {
          navigate('/', { replace: true });
        }
      }
    }
  }, [auth.user.email, from, loading, navigate]);

  useEffect(() => redirect(), [redirect]);

  return (
    <Form onSubmit={handleSubmit} className='login-form'>
      <h1 className='login-title'>Hi, WelcomeBack!</h1>
      <div className='login email-field'>
        <EmailField />
      </div>
      <div className='login password-field'>
        <PasswordField confirm={false} forLogin={true} />
      </div>
      <div className='submit-authen'>
        <button type='submit'>Login</button>
      </div>
      <AlreadySomething forLogin={true} />
    </Form>
  );
};

export default Login;

export const EmailField = () => {
  return (
    <>
      <p>Email address</p>
      <label className={'input-container'}>
        <i className='icon-at'></i>
        <input
          onInput={(e) => {
            focusInputting(
              e.currentTarget.value,
              e.currentTarget.parentNode.classList
            );
          }}
          autoComplete='off'
          className='email'
          type='email'
          name='email'
          placeholder='Enter email'
        />
      </label>
    </>
  );
};

export const PasswordField = ({ confirm, forLogin }) => {
  const showPassword = (e) => {
    e.target.classList.toggle('show');
    if (!e.target.classList.contains('show')) {
      e.target.previousElementSibling.setAttribute('type', 'password');
    } else {
      e.target.previousElementSibling.setAttribute('type', 'text');
    }
  };
  return (
    <>
      <p>
        {confirm ? 'Confirm Password' : 'Password'}
        {forLogin && <Link to='forgot'>Forgot Password?</Link>}
      </p>
      <label className={'input-container'}>
        <i className='icon-password'></i>
        <input
          onInput={(e) => {
            focusInputting(
              e.currentTarget.value,
              e.currentTarget.parentNode.classList
            );
          }}
          type='password'
          name={confirm ? 'confirm' : 'password'}
          placeholder='Enter password'
        />
        <i className='icon-open-password' onClick={showPassword}></i>
      </label>
    </>
  );
};

export const AlreadySomething = ({ forLogin }) => {
  let title, path, textLink;
  if (forLogin) {
    title = "Don't you";
    path = 'signup';
    textLink = 'Sign Up';
  } else {
    title = 'Already';
    path = '/authen';
    textLink = 'Login';
  }
  return (
    <p className='already-field'>
      {title} have an account? <Link to={path}>{textLink}</Link>
    </p>
  );
};

const focusInputting = (target, parent) => {
  console.log(target);
  if (target !== '' || !parent.contains('inputting')) {
    parent.add('inputting');
  } else {
    parent.remove('inputting');
  }
};

const toastWarning = (message) => {
  toast.warn(message, {
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const toastError = (message) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const toastLoading = (message) => {
  toast.loading(message, {
    position: 'top-center',
    theme: 'dark',
  });
};

const toastUpdateLoading = (message) => {
  toast.update(toastLoading, {
    render: message,
    type: 'success',
    isLoading: false,
  });
};
