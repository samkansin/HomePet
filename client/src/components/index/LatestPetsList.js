import React from 'react';
import PetCard from '../PetCard';
import '../../CSS/LatestPetsList.css';
import { useLoaderData } from 'react-router-dom';

const LatestPetsList = () => {
  var PetData = useLoaderData();
  console.log(PetData);
  if (PetData.length > 4) {
    PetData = PetData.slice(0, 4);
  }

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
        })}
      </div>
    </div>
  );
};

export default LatestPetsList;
