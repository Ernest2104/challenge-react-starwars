import React from 'react';
import Cardi from './Cardi';
import './Cards.css';
import { Card } from '@mui/material';

const Cards = ({ characters }) => {

  const left = characters.cardLeft.name ? characters.cardLeft : null;
  const right = characters.cardRight.name ? characters.cardRight : null;

  return (
    <div className='cards'>
      <Cardi character={left} />
      <Cardi character={right} />
    </div>
  )
}

export default Cards;