import { components } from 'react-select';

export const CustomDropdownIcon = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className='icon-up'></i>
    </components.DropdownIndicator>
  );
};

export const control = (props) => {
  const selected = props.hasValue ? 'has-option' : '';
  return (
    <div className={selected}>
      <components.Control
        {...props}
        classNamePrefix={selected}
      ></components.Control>
    </div>
  );
};

const baseStyles = {
  dropdownIndicator: (base, state) => ({
    ...base,
    fontSize: '0.55rem',
    transition: 'all .2s ease-in',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  singleValue: (base) => ({
    ...base,
    fontWeight: '500',
  }),
};

export const breedStyles = Object.assign({}, baseStyles, {
  control: (provided, state) => ({
    ...provided,
    fontWeight: '500',
    borderRadius: '8px',
    '&:hover': {
      borderColor: state.isFocused ? '#F18F1B' : '#000',
    },
  }),

  container: (provided) => ({
    ...provided,
    width: '320px',
  }),

  option: (provided, state) => ({
    ...provided,
    fontWeight: '500',
    backgroundColor: state.isFocused ? '#F8E9D9' : null,
    color: state.isFocused ? '#F18F1B' : 'black',
    ':active': {
      ...provided[':active'],
      backgroundColor: !state.isDisabled
        ? state.isSelected
          ? '#F8E9D9'
          : null
        : undefined,
    },
  }),
});

export const ageStyle = Object.assign({}, baseStyles, {
  container: (provided) => ({
    ...provided,
    width: '90px',
  }),

  control: (provided, state) => ({
    ...provided,
    height: '45px',
    fontWeight: '500',
    textAlign: 'center',
    borderRadius: '8px',
    '&:hover': {
      borderColor: state.isFocused ? '#F8E9D9' : '#000',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: state.isFocused ? '#F8E9D9' : null,
    color: state.isFocused ? '#F18F1B' : 'black',
    ':active': {
      ...provided[':active'],
      backgroundColor: !state.isDisabled
        ? state.isSelected
          ? '#F8E9D9'
          : null
        : undefined,
    },
  }),
});
