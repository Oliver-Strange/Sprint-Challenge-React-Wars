import React from 'react';
import './StarWars.css';

function Characters(props) {
    return(
        <div className='characters'>
           <p className='cName'>name: {props.characters.name}</p>
           <p className=''>gender: {props.characters.gender}</p>
        </div>
    );
};

export default Characters;