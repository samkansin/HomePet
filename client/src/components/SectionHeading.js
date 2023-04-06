import React from 'react';
import '../CSS/SectionHeading.css';
import '../CSS/BaseColor.css';

const SectionHeading = ({ head, subheadFirst, subheadSecond }) => {
  return (
    <div className='sectionHeading-container'>
      <div className='head'>
        <i className='icon-active'></i>
        <p>{head}</p>
        <i className="icon-active"></i>
      </div>
      <p className='subhead'>{subheadFirst}</p>
      {subheadSecond && <p className='subhead'>{subheadSecond}</p>}
    </div>
  );
};

export default SectionHeading;
