import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const Search = ({ cardLocation, search }) => {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <Input 
        type='text'
        name='username'
        value={input.username}
        onChange={(e) => handleChange(e)}
      />
      <Button variant='contained' color='success' onClick={() => search(input, cardLocation)}>Search</Button>
    </div>
  )
}

export default Search