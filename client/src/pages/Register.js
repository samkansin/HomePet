import React, { useRef, useState } from 'react';
import useSynState from '../hooks/useSynState';
import { Form } from 'react-router-dom';
import ROLES_LIST from '../utils/rolesList';
import { useAuth } from '../utils/AuthProvider';
import { createID, uploadImageToServer } from './Post';

import {
  EmailField,
  PasswordField,
  AlreadySomething,
  InputField,
  toastWarning,
  toastError,
} from './Login';
import '../CSS/Register.css';

const STEP = 3;
const PrefixName = ['Mr.', 'Mrs.', 'Miss'];
const default_img =
  'https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png';

const Register = () => {
  const stepCount = useSynState(1);
  const [prefix, setPrefix] = useState('Prefix');
  const [email, setEmail] = useState();
  const [checkPassword, setCheckPassword] = useState(0);
  const authenDataForm = useRef();
  const [profileImg, setProfileImg] = useState(default_img);
  const [newUser, setNewUser] = useState(null);

  const [DataRegister, setDataRegister] = useState({});

  const auth = useAuth();

  const stepElementList = [
    <FirstStep
      checkPassword={checkPassword}
      setCheckPassword={setCheckPassword}
    />,
    <SecondStep prefix={prefix} setPrefix={setPrefix} />,
    <ThirdStep profileImg={profileImg} setProfileImg={setProfileImg} />,
  ];

  const collectDataStepList = [
    collectFirstStep,
    collectSecondStep,
    collectThirdStep,
  ];

  const titleStep = [
    {
      title: 'Get started is easy!',
      subtitle: "Let's get started with us in just 3 simple steps",
    },
    {
      title: 'Information',
      subtitle: "Let's get started with us in just 3 simple steps",
    },
    {
      title: 'Upload Image Profile',
      subtitle: 'You can upload image profile every time you want',
    },
  ];

  return (
    <>
      <Form
        className='register-form authen-form'
        ref={authenDataForm}
        onSubmit={(e) => {
          collectDataStepList[stepCount.get() - 1](
            e,
            setDataRegister,
            stepCount,
            checkPassword,
            prefix,
            auth,
            DataRegister
          );
        }}
      >
        <div className='register-title'>
          <h1 className='title'>{titleStep[stepCount.get() - 1].title}</h1>
          <p className='subtitle'>{titleStep[stepCount.get() - 1].subtitle}</p>
        </div>
        <ProgressStep count={stepCount.get()} />

        {stepElementList[stepCount.get() - 1]}

        <div className='register submit-authen'>
          <button type='submit' onClick={(e) => {}}>
            {stepCount.get() !== STEP ? 'Next' : 'Get start'}
          </button>
        </div>
        <AlreadySomething forLogin={false} />
      </Form>
    </>
  );
};

export default Register;

const ProgressStep = ({ count }) => {
  const CircleStep = ({ numStep }) => (
    <>
      <span className={`step ${numStep <= count ? 'doing' : ''}`}>
        {numStep}
      </span>
    </>
  );

  return (
    <div className='progress-step'>
      <div className='steps'>
        {Array(STEP)
          .fill(<CircleStep />)
          .map((item, index) =>
            React.cloneElement(item, { key: index, numStep: index + 1 })
          )}
        <div className='progress-bar'>
          <span className='bar'></span>
        </div>
      </div>
    </div>
  );
};

const FirstStep = ({ checkPassword, setCheckPassword }) => {
  const oneLower = useRef();
  const minimum = useRef();
  const oneUpper = useRef();
  const oneNumber = useRef();

  let checkLower = (value) => /[a-z]+/.test(value);
  let checkUpper = (value) => /[A-Z]+/.test(value);
  let checkMinimum = (value) => value.length >= 8;
  let checkNumber = (value) => /[0-9]+/.test(value);

  const ValidatePassword = (ref, validate, value) => {
    if (validate(value)) {
      if (!ref.classList.contains('pass')) {
        ref.classList.add('pass');
        setCheckPassword(checkPassword + 1);
      }
    } else {
      if (ref.classList.contains('pass')) {
        ref.classList.remove('pass');
        setCheckPassword(checkPassword - 1);
      }
    }
  };

  return (
    <>
      <div className='register email input-field'>
        <EmailField />
      </div>
      <div
        className='register password input-field'
        onChange={({ target }) => {
          ValidatePassword(oneLower.current, checkLower, target.value);
          ValidatePassword(minimum.current, checkMinimum, target.value);
          ValidatePassword(oneUpper.current, checkUpper, target.value);
          ValidatePassword(oneNumber.current, checkNumber, target.value);
        }}
      >
        <PasswordField
          confirm={false}
          forLogin={false}
          name='password'
          placeholder='Enter password'
        />
        <ul className='validatePassword'>
          <li>
            <span className='oneLower' ref={oneLower}>
              <i className='icon-clear' />
              one lowercase character
            </span>
            <span className='minimumCha' ref={minimum}>
              <i className='icon-clear' />8 character minimum
            </span>
          </li>
          <li>
            <span className='oneUpper' ref={oneUpper}>
              <i className='icon-clear' />
              one uppercase character
            </span>
            <span className='oneNumber' ref={oneNumber}>
              <i className='icon-clear' />
              one number
            </span>
          </li>
        </ul>
      </div>
      <div className='register confirm-password input-field'>
        <PasswordField
          confirm={true}
          forLogin={false}
          name='confirm'
          placeholder='Enter Confirm password'
        />
      </div>
    </>
  );
};

const SecondStep = ({ prefix, setPrefix }) => {
  const prefixDropdown = useRef();
  document.addEventListener('click', (e) => {
    if (prefixDropdown.current)
      if (
        prefixDropdown.current.classList.contains('active') &&
        !prefixDropdown.current.contains(e.target)
      ) {
        prefixDropdown.current.classList.remove('active');
      }
  });
  return (
    <>
      <div className='register fullname input-field'>
        <p className='title'>
          Full Name <span className='required'>(required)</span>
        </p>
        <p className='subtitle'>
          Your full name must be exactly as it appear on your ID card.
        </p>
        <div className='prefix-fullname'>
          <div
            className='input-container dropdown'
            ref={prefixDropdown}
            onClick={(e) => e.currentTarget.classList.toggle('active')}
            select={prefix !== 'Prefix' ? 'true' : 'false'}
          >
            <div className='selector'>
              <p>{prefix}</p>
              <i className='icon-up'></i>
            </div>
            <div className='dropdown-selector'>
              <ul>
                {PrefixName.map((data) => {
                  return (
                    <li
                      key={data}
                      onClick={(e) => {
                        setPrefix(data);
                      }}
                    >
                      <span>{data}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <InputField
            name='firstName'
            placeholder='Enter first name'
            type='text'
          />
          <InputField
            name='lastName'
            placeholder='Enter last name'
            type='text'
          />
        </div>
      </div>
      <div className='register display-name input-field'>
        <p>Display Name</p>
        <InputField
          name='displayName'
          placeholder='Enter display name'
          type='text'
        />
      </div>
      <div
        className='register phone input-field'
        onKeyDown={(e) => {
          if (!/[0-9]+$/.test(e.key) && e.key !== 'Backspace') {
            e.preventDefault();
          }
        }}
        onKeyUp={(e) => {
          formatPhoneNumber(e);
        }}
      >
        <p>
          Phone <span className='required'>(required)</span>
        </p>
        <InputField
          name='phone'
          placeholder='Enter phone'
          type='text'
          icon='icon-phone'
          maxlength={12}
        />
      </div>
    </>
  );
};

const ThirdStep = ({ profileImg, setProfileImg }) => {
  const ClearImg = useRef();
  const file = useRef();

  const handleProfileImage = (e) => {
    const uploadImg = e.target.files;
    if (uploadImg.length > 0) {
      const blob = URL.createObjectURL(uploadImg[0]);
      setProfileImg(blob);
      if (ClearImg.current && file.current) {
        ClearImg.current.classList.add('active');
      }
    }
  };
  return (
    <>
      <div className='register uploadProfile-field'>
        <div className='uploadProfileContainer'>
          <label className='uploadProfile'>
            <input
              ref={file}
              type='file'
              name='profileImage'
              accept='image/jpg, image/jpeg, image/png'
              onChange={handleProfileImage}
              style={{ display: 'none' }}
            />
            <div
              className='profileImg'
              style={{ backgroundImage: `url('${profileImg}')` }}
            ></div>
          </label>
          <i
            className='icon-delete'
            ref={ClearImg}
            onClick={(e) => {
              setProfileImg(default_img);
              file.current.value = '';
              ClearImg.current.classList.remove('active');
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

const formatPhoneNumber = (e) => {
  let { value } = e.target;
  let { length } = value;

  value = value.split(' ').join('');

  if (length < 9 && length > 0) {
    e.target.value = value.match(/.{1,3}/g).join(' ');
  }
};

const handleStep = (stepCount) => {
  const bar = document.querySelector('.progress-bar .bar');
  if (stepCount.get() !== STEP) {
    stepCount.set(stepCount.get() + 1);
  } else stepCount.set(2);

  bar.style.width = `${((stepCount.get() - 1) / (STEP - 1)) * 100}%`;
};

const collectFirstStep = async (
  e,
  setDataRegister,
  stepCount,
  checkPassword
) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const uid = createID();
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm');

  if (email && password && confirmPassword) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      toastError('Not valid email', false);
    } else if (checkPassword !== 4) {
      toastError(
        'Please ensure that the password meets the specified requirements.',
        false
      );
    } else if (password !== confirmPassword) {
      toastError('Password not match to the confirm password!', false);
    } else {
      try {
        let res = await fetch(`/auth/check/${email}`);
        if (res.ok) {
          setDataRegister({ uid, email, password });
          handleStep(stepCount);
        } else if (res.status === 409) {
          toastError('Email is already taken!');
        } else toastError('Register new user: Failed', false);
      } catch (err) {
        toastError(`Error. Try again later (${err})`);
      }
    }
  } else {
    toastWarning('Please enter Email and Password');
  }
};

const collectSecondStep = (
  e,
  setDataRegister,
  stepCount,
  checkPassword,
  prefixName
) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  let displayName = formData.get('displayName');
  let phone = formData.get('phone');
  phone = phone.split(' ').join('');

  if (prefixName !== 'Prefix' && firstName && lastName) {
    if (phone) {
      var fullName = `${prefixName} ${firstName} ${lastName}`;
      if (!displayName) {
        displayName = fullName;
      }
      setDataRegister((prevData) => ({
        ...prevData,
        fullName,
        displayName,
        phone,
      }));
      handleStep(stepCount);
    } else {
      toastWarning('Please enter your phone number');
    }
  } else {
    toastWarning('Please Select Prefix, Enter first name and last name');
  }
};

const collectThirdStep = async (
  e,
  setDataRegister,
  stepCount,
  checkPassword,
  prefix,
  auth,
  DataRegister
) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let profileImg = formData.get('profileImage');
  let imgData = new FormData();

  if (!profileImg) profileImg = default_img;
  else {
    imgData.append('files', profileImg);
    profileImg = await uploadImageToServer(imgData);
    profileImg = `/api/images/${profileImg}`;
    Registration({ ...DataRegister, profileImg }, auth);
  }
};

const Registration = async (regisData, auth) => {
  const { email, password } = regisData;
  try {
    let res = await fetch('/auth/register', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ ...regisData, roles: { User: ROLES_LIST.User } }),
    });
    if (res.ok) {
      let login = await fetch('/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ email, password }),
      });
      if (login.ok) {
        const data = await login.json();
        const user = data;
        await auth.signin(user);
      } else if (login.status === 401) {
        toastError('Unauthorized');
      } else {
        toastError('login error');
      }
    } else {
      let msgError = 'Register new user: Failed ';
      if (res.status === 409) {
        msgError += 'Email is already taken!';
      } else {
        msgError = (await res.json()).message;
      }
      toastError(msgError, false);
    }
  } catch (err) {
    toastError(`Error. Try again later (${err})`);
  }
};
