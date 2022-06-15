import React, { FC } from 'react';

import { Selected } from '../card/Card';
import { LocationInfo } from '../../containers/characters/Characters';

import './sheet.css';

interface IProps {
  selected: Selected;
  locationInfo: LocationInfo;
  setModal: (bool: boolean) => void;
}

const Sheet = ({ selected, locationInfo, setModal }: IProps) => {
  return (
    <div className='rick__sheet'>
      <div className='rick__sheet-inner'>
        <button onClick={() => setModal(false)}>close</button>
        <div className='rick__sheet-inner_character'>
          <div className='rick__sheet-image'>
            <img src={selected.img} alt='Rick and Morty character' />
          </div>
          <div className='rick__sheet-info'>
            <h1>{selected.name}</h1>
            <h3>{selected.status}</h3>
            <h3>{selected.species}</h3>
            <h2>{locationInfo.name}</h2>
            <h3>{locationInfo.type}</h3>
            <h3>{locationInfo.dimension}</h3>
            <h3>{locationInfo.residents.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
