import '../CSS/Adopt.css';
import PetCard from '../components/PetCard';

const PetData = [
  {
    image_src:
      'https://www.central.co.th/e-shopping/storage/2020/12/CUTE-KITTY.jpg',
    name: 'Khunpan',
    breed: 'American Shorthair',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    age: '3 Months',
    gender: 'Female',
    status: 'Available',
    owner: 'David C.',
    time: '6 hours ago',
  },
  {
    image_src:
      'https://cdn.onemars.net/sites/whiskas_th_r81SA_mwh5/image/thumb_cat-breeds-01_1652358723718.jpeg',
    name: 'Bella',
    breed: 'Thai Cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    age: '2 Months',
    gender: 'Male',
    status: 'Adopted',
    owner: 'James B.',
    time: '1 day ago',
  },
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mumu',
    breed: 'Bulldog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    age: '6 Months',
    gender: 'Female',
    status: 'Available',
    owner: 'George D.',
    time: '2 days ago',
  },
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mew',
    breed: 'Bengal',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    age: '10 Months',
    gender: 'Male',
    status: 'Available',
    owner: 'Lily M. ',
    time: '3 days ago',
  },
];

const Adopt = () => {
  return (
    <div className='Home'>
      <div className='Home-title'>
        <i className='icon-active' />
        <span>Our Pet</span>
        <i className='icon-active' />
      </div>
      <div className='card-list'>
        {PetData.map((pet, index) => {
          return (
            <PetCard
              key={index}
              image_src={pet.image_src}
              name={pet.name}
              breed={pet.breed}
              detail={pet.details}
              age={pet.age}
              gender={pet.gender}
              status={pet.status}
              owner={pet.owner}
              time={pet.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Adopt;
