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
      const id = toastLoading('Please wait...');
      const response = await fetch('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();

        const user = data;
        await auth.signin(user, () => navigate(from, { replace: true }));
      } else if (response.status === 401) {
        toastUpdateLoading('Unauthorized', id, 'error');
      } else {
        toastUpdateLoading('Login Error', id, 'error');
      }
    } catch (error) {
      toastError(`Error. Try again later: (${error})!`);
    } finally {
      setLoading(false);
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
    <Form onSubmit={handleSubmit} className='login-form authen-form'>
      <h1 className='login-title'>Hi, WelcomeBack!</h1>
      <div className='login email input-field'>
        <EmailField />
      </div>
      <div className='login password input-field'>
        <PasswordField
          confirm={false}
          forLogin={true}
          name='password'
          placeholder='Enter password'
        />
      </div>
      <div className='submit-authen'>
        <button type='submit'>Login</button>
      </div>
      <AlreadySomething forLogin={true} />
    </Form>
  );
};

export default Login;

export const InputField = ({ name, placeholder, type, icon, maxlength }) => {
  return (
    <label className='input-container' onMouseDown={(e) => e.preventDefault()}>
      {icon && <i className={icon} />}
      <input
        onMouseDown={(e) => e.stopPropagation()}
        onInput={(e) => {
          focusInputting(
            e.currentTarget.value,
            e.currentTarget.parentNode.classList
          );
        }}
        type={type}
        autoComplete='off'
        className={name}
        name={name}
        placeholder={placeholder}
        maxLength={maxlength && maxlength}
      />
      {type === 'password' && (
        <i className='icon-open-password' onClick={showPassword}></i>
      )}
    </label>
  );
};

export const EmailField = () => {
  return (
    <>
      <p>Email address</p>
      <InputField
        name='email'
        placeholder='Enter email'
        type='email'
        icon='icon-at'
      />
    </>
  );
};

const showPassword = (e) => {
  e.target.classList.toggle('show');
  if (!e.target.classList.contains('show')) {
    e.target.previousElementSibling.setAttribute('type', 'password');
  } else {
    e.target.previousElementSibling.setAttribute('type', 'text');
  }
};

export const PasswordField = ({
  confirm,
  forLogin,
  name,
  placeholder,
  type,
  icon,
}) => {
  return (
    <>
      <p>
        {confirm ? 'Confirm Password' : 'Password'}
        {forLogin && <Link to='forgot'>Forgot Password?</Link>}
      </p>
      <InputField
        name={name}
        placeholder={placeholder}
        type='password'
        icon='icon-password'
      />
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
  if (target !== '' || !parent.contains('inputting')) {
    parent.add('inputting');
  } else {
    parent.remove('inputting');
  }
};

export const toastWarning = (message, autoClose) => {
  toast.warn(message, {
    position: 'top-center',
    autoClose: typeof autoClose === 'boolean' ? autoClose : 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const toastError = (message, autoClose) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: typeof autoClose === 'boolean' ? autoClose : 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const toastLoading = (message) => {
  return toast.loading(message, {
    position: 'top-center',
    theme: 'light',
  });
};

export const toastUpdateLoading = (message, id, type) => {
  toast.update(id, {
    render: message,
    type: type || 'success',
    autoClose: 2000,
    isLoading: false,
  });
};
