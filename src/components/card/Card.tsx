import React from 'react';

import './card.css';

interface Props {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
  modal: boolean;
  getLocation: (name: string) => void;
  setSelected: (character: object) => void;
  setModal: (bool: boolean) => void;
}

export interface Selected {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
}

const Card = ({ name, status, species, img, location, getLocation, setSelected, setModal, modal }: Props) => {
  return (
    <div
      data-testid='Card-1'
      tabIndex={modal === true ? -1 : 0}
      className='rick__card'
      onClick={() => {
        getLocation(location);
        setSelected({ name: name, status: status, species: species, img: img, location: location });
        setModal(true);
      }}
      onKeyPress={() => {
        getLocation(location);
        setSelected({ name: name, status: status, species: species, img: img, location: location });
        setModal(true);
      }}
    >
      <div className=' rick__card-img'>
        <img src={img} alt='Rick and Morty character' />
      </div>
      <div className='rick__card-stats'>
        <h5>{name}</h5>
        <h4>Status: {status} </h4>
        <h4>Species: {species} </h4>
      </div>
      <div className='rick__card-more'></div>
    </div>
  );
};

export default Card;
