import React, { useState, useEffect } from 'react';
import { Card, Sheet } from '../../components';

import './characters.css';

const Characters = () => {

  const [ characters, setCharacters ] = useState<any[]>([])
  const [ selected, setSelected ] = useState({name: '', species:'', status:'', location:'', img:''})
  const [ locationInfo, setLocation ] = useState({});
  const [ modal, setModal ] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  // request 20 random characters from Rick and Morty API
  const getCharacters = () => {
    const random: number[] = Array.from({length:20}, () => Math.floor(Math.random() * 826));
    const url: string = `https://rickandmortyapi.com/api/character/${random}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log('err', err));
  };

  // get the location of a selected character profile
  const getLocation = (name: string) => {
    const url: string = `https://rickandmortyapi.com/api/location/?name=${name}`
    fetch(url)
    .then((data: any) => data.json())
    .then((data: any) => setLocation(data.results[0]))
    .catch((err) => console.log('err', err));
  }
  
  const charactersList = [];
  for (let i: number = 0; i < characters.length; i++) {
    charactersList.push(
    <Card 
    key={characters[i].id} 
    name={characters[i].name}
    status={characters[i].status}
    species={characters[i].species}
    img={characters[i].image}
    location={characters[i].location.name}
    getLocation={getLocation}
    setSelected={setSelected}
    />)
  }

  console.log('location info: ', locationInfo)
  return (
    <div className='rick__characters'>
      {charactersList}
      <Sheet
      selected={selected}
      // locationInfo={locationInfo}
      />
    </div>
  );
};

export default Characters;
