import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/LatestPetsList.css';
import PetCard from '../PetCard';
import Skeleton from '../Skeleton';
import { FilterContext } from '../../layouts/MainLayout';

const LatestPostList = () => {
  const { filterState } = useContext(FilterContext);
  const [loading, setLoading] = useState(false);
  const [lastPet, setLastPet] = useState([]);

  async function getLast(filter) {
    setLoading(true);
    const res = await fetch(`api/pages/lastPost/${filterState[0].filterName}`);
    if (!res.ok) {
      throw Error(`Could not filter ${filter}`);
    }
    setLastPet(await res.json());
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    getLast();
  }, [filterState[0].filterName]);

  return (
    <div className='lastestPetsList-container'>
      <div className='lastestPets-title'>
        <h1>Latest Pets</h1>
        <Link to='/adopt'>View all &gt;</Link>
      </div>
      <div className='lastestPetsList-petList'>
        {loading ? (
          <Skeleton num='4' />
        ) : (
          lastPet.map((pet, index) => {
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

export default LatestPostList;
