import React, { useRef, useState } from 'react';
import useSynState from '../hooks/useSynState';
import { Form } from 'react-router-dom';
import { EmailField, PasswordField, AlreadySomething } from './Login';
import '../CSS/Register.css';

const STEP = 3;

const Register = () => {
  const stepCount = useSynState(1);

  const handleStep = () => {
    const bar = document.querySelector('.progress-bar .bar');
    if (stepCount.get() !== STEP) {
      stepCount.set(stepCount.get() + 1);
    } else stepCount.set(2);

    bar.style.width = `${((stepCount.get() - 1) / (STEP - 1)) * 100}%`;
  };

  return (
    <>
      <div className='register-title'>
        <h1 className='title'>Get started is easy!</h1>
        <p className='subtitle'>
          Let's get started with us in just 3 simple steps
        </p>
      </div>
      <ProgressStep count={stepCount.get()} />

      <Form className='register-form authen-form'>
        <FirstStep />
      </Form>

      <div className='register submit-authen'>
        <button type='submit'>
          {stepCount !== STEP ? 'Next' : 'Get start'}
        </button>
      </div>
      <AlreadySomething forLogin={false} />
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

const FirstStep = () => {
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
      ref.classList.add('pass');
    } else {
      if (ref.classList.contains('pass')) {
        ref.classList.remove('pass');
      }
    }
  };

  return (
    <>
      <div className='register email-field'>
        <EmailField />
      </div>
      <div
        className='register password-field'
        onChange={({ target }) => {
          ValidatePassword(oneLower.current, checkLower, target.value);
          ValidatePassword(minimum.current, checkMinimum, target.value);
          ValidatePassword(oneUpper.current, checkUpper, target.value);
          ValidatePassword(oneNumber.current, checkNumber, target.value);
        }}
      >
        <PasswordField confirm={false} forLogin={false} />
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
      <div className='register confirm password-field'>
        <PasswordField confirm={true} forLogin={false} />
      </div>
    </>
  );
};
