import React from 'react'
import '../../CSS/OurSuccess.css'
import petsadoptImg from '../../images/petsadopt.png'
import lostpetsImg from '../../images/lostpets.png'

const OurSuccess = () => {
  return (
    <div className="OurSuccess-container">
      {/* <div className="OurSuccess-title">
        <h1>Our Success</h1>
      </div> */}
      <div className="OurSuccess-successList">
        <div className='Oursuccess-successCard'>
          <img alt='' src={petsadoptImg} className='w-[160px]' />
          <div className='text-center'>
            <p>25,000 +</p>
            <p>Pets Adoption</p>
          </div>
        </div>
        <div className='Oursuccess-successCard'>
          <img alt='' src={lostpetsImg} className='w-[160px]' />
          <div>
            <p>3,000 +</p>
            <p>Lost Pets Reunification</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSuccess