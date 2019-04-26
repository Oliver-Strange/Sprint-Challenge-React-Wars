import React from "react";
import "./StarWars.css";

function Characters(props) {
  return (
    <div className="characters">
      {/* <img src={props.characters.url} /> */}
      <p className="cName">Name: {props.characters.name}</p>
      <p className="cGender">Gender: {props.characters.gender}</p>
      {/* <img className="cHome" src={props.characters.homeworld} /> */}
      <p className="cBorn">Born: {props.characters.birth_year}</p>
      <p className="cHair">Hair Color: {props.characters.hair_color}</p>
      <p className="cHeight">Height (cm): {props.characters.height}</p>
    </div>
  );
}

export default Characters;
