import React from 'react';
import PetCard from '../PetCard';
import '../../CSS/LatestPetsList.css';

const PetData = [
  {
    id: 1,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Khunpan',
    type: 'Cat',
    breed: 'American Shorthair',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 3,
    ageYear: 0,
    gender: 'Female',
    status: 'Available',
    owner: 'David C.',
    time: '6 hours ago',
  },
  {
    id: 2,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Bella',
    type: 'Cat',
    breed: 'Thai Cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '2',
    ageYear: '0 ',
    gender: 'Male',
    status: 'Adopted',
    owner: 'James B.',
    time: '1 day ago',
  },
  {
    id: 3,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mumu',
    type: 'Dog',
    breed: 'Bulldog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 6,
    ageYear: 0,
    gender: 'Female',
    status: 'Available',
    owner: 'George D.',
    time: '2 days ago',
  },
  {
    id: 4,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mew',
    type: 'Cat',
    breed: 'Bengal',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 10,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    owner: 'Lily M. ',
    time: '3 days ago',
  },
];

const LatestPetsList = () => {
  return (
    <div className='lastestPetsList-container'>
      <div className='lastestPets-title'>
        <h1>Latest Pets</h1>
        <a href='/'>View all &gt;</a>
      </div>
      <div className='lastestPetsList-petList'>
        {PetData.map((pet, index) => {
          return (
            <PetCard
              key={index}
              image_src={pet.image_src}
              name={pet.name}
              type={pet.type}
              breed={pet.breed}
              detail={pet.details}
              ageMonth={pet.ageMonth}
              ageYear={pet.ageYear}
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

export default LatestPetsList;
