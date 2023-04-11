import React from 'react';
import PetCard from '../PetCard';
import '../../CSS/LatestPetsList.css';
import { useLoaderData, Link, useNavigation } from 'react-router-dom';
import Skeleton from '../Skeleton';

const LatestPetsList = () => {
  var PetData = useLoaderData();
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

export const getLastPet = async () => {
  const res = await fetch('/api/pages/lastPost');
  var LastPet = await res.json();
  if (!res.ok) {
    throw Error(LastPet.error);
  }
  return LastPet;
};
