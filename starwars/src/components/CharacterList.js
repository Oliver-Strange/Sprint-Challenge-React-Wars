import React from 'react';
import Characters from './Characters';

function CharacterList(props) {
    return(
        <div>
            {props.characters.map((characters, index) => (
                <Characters key={index} characters={characters}/>
            ))}
        </div>
    );
};

export default CharacterList;