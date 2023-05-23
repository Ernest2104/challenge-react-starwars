import React from 'react';
import Cardi from './Cardi';
import './Cards.css';
import { Card } from '@mui/material';

const Cards = () => {
  return (
    <div className='cards'>
      <Cardi />
      <Cardi />
    </div>
  )
}

export default Cards;