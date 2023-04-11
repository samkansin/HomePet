import '../CSS/Adopt.css';
import PetCard from '../components/PetCard';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

const Adopt = () => {
  const PetData = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className='Home'>
      <div className='Home-title'>
        <i className='icon-active' />
        <span>Our Pet</span>
        <i className='icon-active' />
      </div>
      <div className='card-list'>
        {navigation.state === 'loading' ? (
          <Skeleton num='8' />
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

export default Adopt;

export const petsLoader = async () => {
  const res = await fetch('api/pages/Adopt');
  let petList = await res.json();
  if (!res.ok) {
    throw Error(petList.error);
  }
  return petList;
};
