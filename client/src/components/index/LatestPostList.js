import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import '../../CSS/LatestPetsList.css';
import PetCard from '../PetCard';
import Skeleton from '../Skeleton';

const LatestPostList = () => {
  const [loading, setLoading] = useState(false);
  const [filterParams] = useSearchParams();
  const PetData = useLoaderData();

  useEffect(() => {
    setLoading(true);
    if (PetData)
      setTimeout(() => {
        setLoading(false);
      }, 500);
  }, [PetData]);

  return (
    <div className='lastestPetsList-container'>
      <div className='lastestPets-title'>
        <h1>Latest Pets</h1>
        <Link
          to={
            filterParams.get('f')
              ? `/adopt?f=${filterParams.get('f')}`
              : '/adopt'
          }
        >
          View all &gt;
        </Link>
      </div>
      <div className='lastestPetsList-petList'>
        {loading ? (
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
                adopted={pet.adopted}
                ownerID={pet.ownerID}
                dateTime={pet.dateTime}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default LatestPostList;

export const getLastestPost = async ({ request }) => {
  const filter = new URLSearchParams(
    request.url.split('http://localhost:3000/')[1]
  ).get('f');
  const res = await fetch(`/api/pages/lastPost/${filter}`);
  if (!res.ok) {
    throw Error(`Could not load last post`);
  }
  return await res.json();
};
