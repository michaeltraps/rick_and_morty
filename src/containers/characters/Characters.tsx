import React, { useState, useEffect } from 'react';
import { Card, Sheet } from '../../components';
import portal from '../../assets/portal.gif';

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

  // run getCharacters function on page load
  useEffect(() => {
    getCharacters();
  }, []);

  // request 20 random characters from Rick and Morty API
  const getCharacters = () => {
    // create random array of 20 integers between 1 and 826 to populate view
    const randomArray: number[] = [];
    function random() {
      while (randomArray.length < 20) {
        let randomNumber = Math.ceil(Math.random() * 826);
        if (!randomArray.includes(randomNumber)) {
          randomArray.push(randomNumber);
        }
      }
    }
    // call randomizer function
    random();

    // fetch random array of characters from Rick and Morty API
    const url: string = `https://rickandmortyapi.com/api/character/${randomArray}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log('err', err));
  };

  // fetch location informationm from selected character profile
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
        modal={modal}
      />
    );
  }

  return (
    <div data-testid='Characters-1' className='rick__characters_container'>
      {/*if modal is open, X close button has tab priority*/}
      <div onKeyPress={() => getCharacters()} onClick={() => getCharacters()} className='rick__characters_container-portal' tabIndex={modal === true ? -1 : 0}>
        {/* <GiPortal size={70} /> */}
        <img src={portal} alt='swirling portal' />
      </div>
      <div className='rick__header-subtitle'>
        <h3>Click the portal to grab characters from across the multiverse</h3>
      </div>
      <div className='rick__characters'>
        {charactersList}
        {modal === true ? <Sheet selected={selected} locationInfo={locationInfo} setModal={setModal} /> : ''}
      </div>
      {/*If the generated list of characters is any less than the required 20, an dynamic error message will appear on screen */}
      <div className='rick___error-less'>
        {charactersList.length < 20 && charactersList.length !== 0 ? <h3>Malfuntion in transporting some characters.</h3> : ''}
      </div>
      <div className='rick___error-none'>{charactersList.length === 0 ? <h3>Portal malfunction. No characters transported!</h3> : ''}</div>
    </div>
  );
};

export default Characters;
