import React from 'react';
import PetCard from '../PetCard';
import '../../CSS/LatestPetsList.css';

const PetData = [
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    image_alt: 'Khunpan',
    name: 'Khunpan',
    breed: 'American Shorthair',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageGender: '3 Months | Female',
    status: 'Available',
    owner: 'David C.',
    time: '6 hours ago',
  },
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    image_alt: 'Bella',
    name: 'Bella',
    breed: 'Thai Cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageGender: '2 Months | Male',
    status: 'Adopted',
    owner: 'James B.',
    time: '1 day ago',
  },
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    image_alt: 'Mumu',
    name: 'Mumu',
    breed: 'Bulldog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageGender: '6 Months | Female',
    status: 'Available',
    owner: 'George D.',
    time: '2 days ago',
  },
  {
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    image_alt: 'Mew',
    name: 'Mew',
    breed: 'Bengal',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageGender: '10 Months | Male',
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
              image_alt={pet.image_alt}
              name={pet.name}
              breed={pet.breed}
              detail={pet.details}
              ageGender={pet.ageGender}
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
