import React from 'react';
import '../../CSS/OurSuccess.css';

const OurSuccess = () => {
  return (
    <div className='OurSuccess-container'>
      {/* <div className="OurSuccess-title">
        <h1>Our Success</h1>
      </div> */}
      <div className='OurSuccess-successList'>
        <div className='Oursuccess-successCard'>
          <img
            alt=''
            src='https://knightsmsk.github.io/HomePetResource/index%20img/petsadopt.png'
            className='w-[160px]'
          />
          <div className='text-center'>
            <p>25,000 +</p>
            <p>Pets Adoption</p>
          </div>
        </div>
        <div className='Oursuccess-successCard'>
          <img
            alt=''
            src='https://knightsmsk.github.io/HomePetResource/index%20img/lostpets.png'
            className='w-[160px]'
          />
          <div>
            <p>3,000 +</p>
            <p>Lost Pets Reunification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
