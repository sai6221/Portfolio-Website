import React from 'react'
// import PropTypes from 'prop-types';
import '/src/css/skillsScreen.css';

function Skillcomponent({ imageUrl, name }) {
  return (
    <div className="skill-component">
      <div className="skill-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
}


export default Skillcomponent;