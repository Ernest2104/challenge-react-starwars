import React from 'react';
import { Button } from '@mui/material';

const Random = ({random, cardLocation}) => {
  return (
    <div>
      <Button 
        variant='contained' 
        color='error' 
        onClick={() => random(cardLocation)}
      >
        Random
      </Button>
    </div>
  )
}

export default Random;