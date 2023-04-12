import React, { useState } from 'react';
import PetCard from '../PetCard';
import '../../CSS/LatestPetsList.css';
import { Link, useNavigation } from 'react-router-dom';
import Skeleton from '../Skeleton';

const LatestPetsList = () => {
  const PetData = [
    {
      id: '1',
      image_src:
        'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/delta.jpg',
      name: 'Delta',
      type: 'Cat',
      breed: 'Thai cat',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
      ageMonth: 8,
      ageYear: 0,
      gender: 'Male',
      status: 'Available',
      ownerID: '6QXC2EFRQY',
      dateTime: '2023-04-10T13:11:24.309Z',
      topic: 'cat',
    },
  ];
  const navigation = useNavigation();
  if (PetData.length > 4) {
    PetData = PetData.slice(0, 4);
  }

  return (
    <div className='lastestPetsList-container'>
      <div className='lastestPets-title'>
        <h1>Latest Pets</h1>
        <Link to='/adopt'>View all &gt;</Link>
      </div>
      <div className='lastestPetsList-petList'>
        {navigation.state === 'loading' ? (
          <Skeleton num='4' />
        ) : (
          PetData.map((pet, index) => {
            return (
              <PetCard
                key={index}
                id={pet.id}
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
                dateTime={pet.dateTime}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default LatestPetsList;

const getLastPet = async (filter) => {
  const res = await fetch('/api/pages/lastPost');
  let petData = await res.json();
  if (!res.ok) {
    throw Error(`Could not filter ${filter}`);
  }
  return petData;
};
