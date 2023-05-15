import '../CSS/Adopt.css';
import PetCard from '../components/PetCard';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Skeleton from '../components/Skeleton';
import ClipLoader from 'react-spinners/ClipLoader';

const Adopt = () => {
  const [loading, setLoading] = useState(false);
  const [skeletonLenght, setSkeletonLenght] = useState(8);

  const PetData = useLoaderData();
  useEffect(() => {
    setLoading(true);
    if (PetData) {
      setSkeletonLenght(PetData.length);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [PetData]);

  return (
    <div className='Home'>
      <div className='Home-title'>
        <i className='icon-active' />
        <span>Our Pet</span>
        <i className='icon-active' />
      </div>
      {
        loading && PetData.length === 0 ? (
          <div className='loading'>
            <ClipLoader
              color='#f3c79e'
              loading
              size={32}
            />
          </div>
        )
          : (
            PetData.length === 0 && !loading && (
              <>
                <div className='no-pet-img'>
                  <img
                    src='https://knightsmsk.github.io/HomePetResource/default%20img/not-found.gif'
                    alt=''
                  />
                </div>
                <div className='no-pet'>
                  <span>There are no posts of pets on the site.</span>
                </div>
              </>
            ))
      }
      <div className='card-list'>
        {loading ? (
          <Skeleton num={skeletonLenght} />
        ) : (
          PetData.map((pet, index) => {
            return (
              <PetCard
                key={index}
                PetID={pet.PetID}
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

export default Adopt;

export const petsLoader = async ({ request }) => {
  const filter = new URLSearchParams(
    request.url.split('http://localhost:3000/adopt')[1]
  ).get('f');
  const res = await fetch(`/api/pages/Adopt/${filter}`);
  let petList = await res.json();
  if (!res.ok) {
    throw Error(petList.error);
  }
  return petList;
};
