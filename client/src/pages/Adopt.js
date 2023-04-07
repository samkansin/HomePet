import '../CSS/Adopt.css';
import PetCard from '../components/PetCard';
import { useLoaderData } from 'react-router-dom';
import { getPetData } from '../petsData';

const Adopt = () => {
  const PetData = useLoaderData();

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
              time={pet.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Adopt;

export const petsLoader = async () => {
  const res = await getPetData();
  return res;
};