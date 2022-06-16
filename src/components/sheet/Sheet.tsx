import React from 'react';
import { GiWorld } from 'react-icons/gi';

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
      <div className='rick__sheet-inner scale-up-center'>
        <div className='rick__sheet-inner-button'>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div className='rick__sheet_character'>
          <div className='rick__sheet-image'>
            <img src={selected.img} alt='Rick and Morty character' />
          </div>
          <div className='rick__sheet-info'>
            <h1>{selected.name}</h1>
            <h3>Status: {selected.status}</h3>
            <h3>Species: {selected.species}</h3>
            <br />

            <h2>
              <GiWorld />
              {`  ${locationInfo.name}`}
            </h2>
            <h3>Type: {locationInfo.type}</h3>
            <h3>Dimension: {locationInfo.dimension}</h3>
            <h3>Population: {locationInfo.residents.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
