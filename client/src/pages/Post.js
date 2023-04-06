import { useState } from 'react';
import { Form } from 'react-router-dom';
import '../CSS/Post.css';
import Dropdown from '../components/Dropdown';
import Select, { components } from 'react-select';

const PetType = [
  { icon: 'dog', name: 'dog' },
  { icon: 'cat', name: 'cat' },
];

const Breed = [
  { value: 'Abyssinian', label: 'Abyssinian' },
  { value: 'Aegean', label: 'Aegean' },
  { value: 'American Curl', label: 'American Curl' },
  { value: 'American Bobtail', label: 'American Bobtail' },
  { value: 'American Shorthair', label: 'American Shorthair' },
  {
    value: 'Persian (Traditional Persian Cat)',
    label: 'Persian (Traditional Persian Cat)',
  },
];

const month = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

const manageYear = () => {
  const lastYear = new Date().getFullYear();
  var year = [];
  for (let i = lastYear; i > lastYear - 15; i--) {
    year.push({ value: i, label: i });
  }
  return year;
};

const CustomDropdownIcon = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className='icon-up'></i>
    </components.DropdownIndicator>
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

const breedStyles = Object.assign({}, baseStyles, {
  control: (provided, state) => ({
    ...provided,
    fontWeight: '500',
    borderRadius: '8px',
    '&:hover': {
      borderColor: state.isFocused ? '#F8E9D9' : '#000',
    },
  }),

  container: (provided) => ({
    ...provided,
    width: '290px',
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

const ageStyle = Object.assign({}, baseStyles, {
  container: (provided) => ({
    ...provided,
    width: '100px',
  }),

  control: (provided, state) => ({
    ...provided,
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

const Post = () => {
  const [{ petIcon, petType }, setPetType] = useState({
    petIcon: '',
    petType: 'Select Pet Type',
  });

  const [selectBreed, setBreed] = useState(null);
  const [selectMonth, setMonth] = useState(null);
  const [selectYear, setYear] = useState(null);

  const [recom, setRecom] = useState(true);

  const handleBreedChange = (selected) => {
    setBreed(selected);
  };
  const handleMonthChange = (selected) => {
    setMonth(selected);
  };
  const handleYearChange = (selected) => {
    setYear(selected);
  };

  const setPetTypeFunction = (icon, type) => {
    setPetType({ petIcon: icon, petType: type });
  };

  return (
    <div className='post-container'>
      <div className='post-title'>
        <span>Pet Details</span>
      </div>
      <Form>
        <div className='information-pet'>
          <p className='Heading'>Information Pet</p>
          <div className='infor-field'>
            <label className='name-field'>
              <p>Name</p>
              <input
                type='text'
                placeholder='Please enter name (required)'
                name='name'
                required
              />
              <span>0/20</span>
            </label>
            <div className='line'></div>
            <div className='petType-field'>
              <p>Select Pet Type</p>
              <div className='selector-petType'>
                <i className={`icon-${petIcon}`}></i>
                <span>{petType}</span>
                <Dropdown data={PetType} setPetType={setPetTypeFunction} />
              </div>
            </div>
            <div className='line'></div>
            <Select
              className='petInfo-select-container'
              classNamePrefix='petInfo-select'
              components={{ DropdownIndicator: CustomDropdownIcon }}
              styles={breedStyles}
              value={selectBreed}
              placeholder='Select Pet Breed'
              onChange={handleBreedChange}
              options={Breed}
              menuPortalTarget={document.body}
              isSearchable
            />
          </div>
        </div>
        <div className='gender_age'>
          <div className='gender'>
            <p className='title'>Gender</p>
            <div className='gender-select'>
              <input type='radio' id='Male' name='gender' />
              <label htmlFor='Male'>Male</label>

              <input type='radio' id='Female' name='gender' />
              <label htmlFor='Female'>Female</label>
            </div>
          </div>
          <div className='line'></div>
          <div className='age'>
            <p className='title'>Age</p>
            <div className='age-select'>
              <Select
                className='petInfo-select-container'
                classNamePrefix='petInfo-select'
                components={{ DropdownIndicator: CustomDropdownIcon }}
                value={selectMonth}
                placeholder='Month'
                styles={ageStyle}
                onChange={handleMonthChange}
                options={month}
                menuPortalTarget={document.body}
                isSearchable
              />
              <Select
                className='petInfo-select-container'
                classNamePrefix='petInfo-select'
                components={{ DropdownIndicator: CustomDropdownIcon }}
                value={selectYear}
                placeholder='Year'
                styles={ageStyle}
                onChange={handleYearChange}
                options={manageYear()}
                menuPortalTarget={document.body}
                isSearchable
              />
            </div>
          </div>
        </div>
        <label className='description'>
          <p>Description</p>
          <textarea rows={10} cols={100} placeholder='Please enter text' />
          <p>0/1000</p>
        </label>
        <div className='uploadImg'>
          <p>Upload an image</p>
          <span>
            require image (JPG, PNG, JPEG, GIF, with a width and height of at
            least ... pixels)
          </span>
          <div className='pet-img'>
            <div className='upload'>
              <img
                src='https://knightsmsk.github.io/HomePetResource/default%20img/picture.png'
                alt=''
              />
            </div>
          </div>
          <ul className='list-img'></ul>
        </div>
        <div className='addTopic'>
          <p>Add topic</p>
          <div className='topic-field'>
            <ul className='list-topic'>
              <div className='input-topic-field'>
                <input type='text' />
              </div>
            </ul>
            <div className='filter-topic'>
              <p>{recom ? 'Recommended' : 'Search results'}</p>
            </div>
          </div>
        </div>
        <button type='submit'>Publish</button>
      </Form>
    </div>
  );
};

export default Post;
