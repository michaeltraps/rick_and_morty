import React, { useState, useEffect } from 'react';
import { Card, Sheet } from '../../components';

import './characters.css';

// export for use TS typing in Sheet component
export interface LocationInfo {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: {}[];
}

// container component for character cards
const Characters = () => {
  // useState React hooks for characters, selected card, location of selected card, and modal boolean
  const [characters, setCharacters] = useState<any[]>([]);
  const [selected, setSelected] = useState({ name: '', species: '', status: '', location: '', img: '' });
  const [locationInfo, setLocation] = useState({ id: 0, name: '', type: '', dimension: '', residents: [] });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  // request 20 random characters from Rick and Morty API
  const getCharacters = () => {
    const random: number[] = Array.from({ length: 20 }, () => Math.floor(Math.random() * 826));
    const url: string = `https://rickandmortyapi.com/api/character/${random}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log('err', err));
  };

  // get the location of a selected character profile
  const getLocation = (name: string) => {
    const url: string = `https://rickandmortyapi.com/api/location/?name=${name}`;
    fetch(url)
      .then((data: any) => data.json())
      .then((data: any) => setLocation(data.results[0]))
      .catch((err) => console.log('err', err));
  };

  // creates character list to display on UI
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
        setModal={setModal}
      />
    );
  }

  console.log('location info: ', locationInfo);
  console.log('selected: ', selected);

  return (
    <div className='rick__characters'>
      {charactersList}
      {modal === true ? <Sheet selected={selected} locationInfo={locationInfo} setModal={setModal} /> : ''}
    </div>
  );
};

export default Characters;
