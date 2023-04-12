import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, useNavigate } from 'react-router-dom';
import '../CSS/Post.css';
import Select, { components } from 'react-select';
import ClipLoader from 'react-spinners/ClipLoader';

const TypeoFPet = [
  { icon: 'dog', name: 'dog' },
  { icon: 'cat', name: 'cat' },
];

var topic = [
  { topic: 'Cat', used: '2,431' },
  { topic: 'Dog', used: '3,694' },
  { topic: 'น้องแมวหมาหาบ้าน', used: '2M' },
];

const createID = () =>
  Math.random().toString(36).substring(2, 17).toUpperCase();

const manageMonthYear = (fill) => {
  if (fill === 'year') {
    var year = [];
    for (let i = 0; i <= 15; i++) {
      year.push({ value: i, label: i });
    }
    return year;
  } else {
    var month = [];
    for (let i = 0; i < 12; i++) {
      month.push({ value: i, label: i });
    }
    return month;
  }
};

const CustomDropdownIcon = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className='icon-up'></i>
    </components.DropdownIndicator>
  );
};

const control = (props) => {
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

const breedStyles = Object.assign({}, baseStyles, {
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

const ageStyle = Object.assign({}, baseStyles, {
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

const toastError = (message) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

const Post = () => {
  const navigate = useNavigate();
  const [{ petIcon, petType }, setPetType] = useState({
    petIcon: '',
    petType: 'Select Pet Type',
  });

  document.addEventListener('click', (e) => {
    let petType = document.querySelector('.selector-petType .selector.field');
    let Topic = document.querySelector('.topic-field');
    if (petType) {
      if (petType.classList.contains('active') && !petType.contains(e.target)) {
        petType.classList.remove('active');
      }
    }
    if (Topic) {
      if (Topic.classList.contains('active') && !Topic.contains(e.target)) {
        Topic.classList.remove('active');
      }
    }
  });

  const [selectBreed, setBreed] = useState(null);
  const [selectMonth, setMonth] = useState(null);
  const [selectYear, setYear] = useState(null);
  const [recom, setRecom] = useState(true);
  var [countName, setCountName] = useState(0);
  var [countDetails, setCountDetails] = useState(0);
  const [uploadImage, setUploadImage] = useState([]);
  const [selectedTopic, setSelectTopic] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [breeds, setDataBreeds] = useState([]);

  const handleBreedChange = (selected) => {
    setBreed(selected);
  };
  const handleMonthChange = (selected) => {
    setMonth(selected);
  };
  const handleYearChange = (selected) => {
    setYear(selected);
  };

  const handleInputRange = (event, typeInput, limit) => {
    const { value } = event.target;
    if (typeInput === 'name')
      event.target.value = value.replace(new RegExp('. $'), '');
    if (value.length > limit) {
      if (typeInput === 'name') {
        setCountName(limit);
      } else {
        setCountDetails(limit);
      }
      event.target.value = value.slice(0, limit);
    } else {
      let length = value.length;
      if (typeInput === 'name') {
        if (value.includes('.')) length = length - 2;
        setCountName(length);
      } else {
        setCountDetails(length);
      }
    }
  };

  const handleFileImage = (e) => {
    const uploadImgs = e.target.files;
    const uploadImgsArray = Array.from(uploadImgs);
    const images = uploadImgsArray.map((image) => {
      return URL.createObjectURL(image);
    });

    setUploadImage((previousImage) => previousImage.concat(images));
  };

  const fetchBreeds = async (value) => {
    setLoading(true);
    const res = await fetch(`/api/${value}/breeds`);
    let breeds = await res.json();
    if (!res.ok) {
      throw Error(breeds.error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setDataBreeds(breeds);
  };

  const handleSubmit = async (e) => {
    const currentDate = new Date().toISOString();
    const formData = new FormData(e.target);

    if (!formData.get('name')) {
      toastError('Please enter a name pet!');
    } else if (!petIcon) {
      toastError('Please select a type of pet!');
    } else if (!selectBreed) {
      toastError(`Please select a ${petType}'s breed`);
    } else if (!formData.get('gender')) {
      toastError("Please select a pet's gender!");
    } else if (!selectYear || !selectMonth) {
      toastError('Please select the age of the pet!');
    } else if (selectYear['value'] === 0 && selectMonth['value'] === 0) {
      toastError("Age's pet invalid. ERROR: year is 0 and month is 0");
    } else if (!formData.get('details')) {
      toastError('Please enter the description');
    } else if (uploadImage.length === 0) {
      toastError('Please upload a picture of your pet');
    } else {
      const PetData = {
        id: createID(),
        image_src:
          'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
        name: formData.get('name'),
        type: petType,
        breed: selectBreed['value'],
        details: formData.get('details'),
        ageMonth: selectMonth['value'],
        ageYear: selectYear['value'],
        gender: formData.get('gender'),
        status: 'available',
        owner: 'David C.',
        dateTime: currentDate,
        topic: selectedTopic.map((topic) => {
          return topic.topic;
        }),
      };
      await AddNewPost(PetData);
      navigate('/adopt');
    }
  };

  return (
    <div className='post-container'>
      <div className='post-title'>
        <span>Pet Details</span>
      </div>
      <Form replace onSubmit={handleSubmit}>
        <div className='information-pet'>
          <p className='Heading'>Information Pet</p>
          <div className='infor-field'>
            <label className='name-field'>
              <p>Name</p>
              <div
                className={`label-name field ${
                  countName > 0 ? 'inputing' : ''
                }`}
              >
                <input
                  type='text'
                  placeholder='Please enter name (required)'
                  name='name'
                  onChange={(e) => {
                    handleInputRange(e, 'name', 20);
                  }}
                  onKeyDown={(e) => {
                    const pattern = /^[a-zA-Zก-์]+$/;
                    if (!pattern.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <span>{`${countName}/20`}</span>
              </div>
            </label>
            <div className='line'></div>
            <div className='petType-field' pet={petIcon}>
              <p>Select Pet Type</p>
              <div className='selector-petType'>
                <div
                  className='selector field'
                  select={petIcon !== '' ? 'true' : 'false'}
                  onClick={(e) => {
                    e.currentTarget.classList.toggle('active');
                  }}
                >
                  <i className={`icon-${petIcon}`}></i>
                  <span className={petType}>{petType}</span>
                  <i className='icon-up'></i>
                </div>
                <div className='dropdown-petType'>
                  <ul>
                    {TypeoFPet.map((data, key) => {
                      return (
                        <li
                          key={key}
                          dropdown-name={data.name}
                          onClick={async (e) => {
                            let valueType =
                              e.currentTarget.children[1].innerHTML;
                            setPetType({
                              petIcon: valueType,
                              petType: valueType,
                            });
                            fetchBreeds(valueType);
                          }}
                        >
                          <i className={`icon-${data.icon}`}></i>
                          <span className='pet-text'>{data.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {Loading ? (
              <ClipLoader
                color='#f3c79e'
                loading
                size={24}
                cssOverride={{
                  bottom: '0.6rem',
                  margin: '0 5rem',
                  display: 'block',
                  position: 'relative',
                }}
              />
            ) : (
              <>
                <div className='line'></div>
                <Select
                  className='petInfo-select-container'
                  classNamePrefix='petInfo-select'
                  components={{
                    Control: control,
                    DropdownIndicator: CustomDropdownIcon,
                  }}
                  styles={breedStyles}
                  value={selectBreed}
                  placeholder='Select Pet Breed'
                  onChange={handleBreedChange}
                  options={breeds}
                  menuPortalTarget={document.body}
                  isSearchable
                />
              </>
            )}
          </div>
        </div>
        <div className='gender_age'>
          <div className='gender'>
            <p className='title'>Gender</p>
            <div className='gender-select'>
              <input type='radio' id='Male' name='gender' value='male' />
              <label htmlFor='Male'>Male</label>
              <input type='radio' id='Female' name='gender' value='female' />
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
                components={{
                  Control: control,
                  DropdownIndicator: CustomDropdownIcon,
                }}
                value={selectYear}
                placeholder='Year'
                styles={ageStyle}
                onChange={handleYearChange}
                options={manageMonthYear('year')}
                menuPortalTarget={document.body}
                isSearchable
              />
              <Select
                className='petInfo-select-container'
                classNamePrefix='petInfo-select'
                components={{
                  Control: control,
                  DropdownIndicator: CustomDropdownIcon,
                }}
                value={selectMonth}
                placeholder='Month'
                styles={ageStyle}
                onChange={handleMonthChange}
                options={manageMonthYear('month')}
                menuPortalTarget={document.body}
                isSearchable
              />
            </div>
          </div>
        </div>
        <label className='description'>
          <p>Description</p>
          <div className={`desc-input ${countDetails > 0 ? 'inputing' : ''}`}>
            <textarea
              name='details'
              // rows={5}
              // cols={100}
              placeholder='Please enter text'
              onInput={(e) => {
                e.target.style.height = '5px';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              onChange={(e) => {
                handleInputRange(e, 'details', 1000);
              }}
            />
            <p>{`${countDetails}/1000`}</p>
          </div>
        </label>
        <div className='uploadImg'>
          <p>Upload an image</p>
          <span>
            require image (JPG, PNG, JPEG, GIF, with a width and height of at
            least ... pixels)
          </span>
          <div className='pet-img'>
            {uploadImage &&
              uploadImage.map((image) => {
                return (
                  <div key={image} className='preview-img'>
                    <div className='img'>
                      <img src={image} alt='upload' />
                      <i
                        className='icon-delete'
                        onClick={() =>
                          setUploadImage(uploadImage.filter((e) => e !== image))
                        }
                      ></i>
                    </div>
                  </div>
                );
              })}
            <label className='upload'>
              <input
                type='file'
                name='images'
                multiple
                accept='image/jpg, image/png, image/jpeg, image/gif'
                onChange={handleFileImage}
                style={{ display: 'none' }}
              />
              <img
                src='https://knightsmsk.github.io/HomePetResource/default%20img/picture.png'
                alt=''
              />
            </label>
          </div>
          <ul className='list-img'></ul>
        </div>
        <div className='addTopic'>
          <p>Add topic</p>
          <div className='topic-field'>
            <ul className='list-topic'>
              {selectedTopic &&
                selectedTopic.map((item, key) => {
                  return (
                    <li key={key} className='topic'>
                      <span>{item.topic}</span>
                      <i
                        className='icon-close'
                        onClick={() => {
                          topic.push(item);
                          setSelectTopic(
                            selectedTopic.filter((e) => e.topic !== item.topic)
                          );
                        }}
                      ></i>
                    </li>
                  );
                })}
              <div className='input-topic-field'>
                <input
                  type='text'
                  name='topic'
                  onFocus={(e) =>
                    document
                      .querySelector('.topic-field')
                      .classList.add('active')
                  }
                />
              </div>
            </ul>
            <div className='filter-topic'>
              <p>{recom ? 'Recommended' : 'Search results'}</p>
              <ul className='select-topic'>
                {topic.map((item, key) => {
                  return (
                    <li
                      key={key}
                      onClick={(e) => {
                        setSelectTopic(selectedTopic.concat(item));
                        topic = topic.filter(
                          (data) => data.topic !== item.topic
                        );
                      }}
                    >
                      <span>{item.topic}</span>
                      <span>{item.used}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='btn-submit'>
          <button type='submit' className='btn-submit-publish'>
            Publish
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Post;

const AddNewPost = async (newPet) => {
  try {
    let response = await fetch('/api/pages/Post', {
      method: 'POST',
      body: JSON.stringify(newPet),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }).then((res) => {
      if (!res.ok) {
        throw Error({ error: `Could not add new post: ${newPet.name}` });
      }
      return res.json();
    });
    return response;
  } catch (error) {
    console.error('Error adding new post!', error);
  }
};
