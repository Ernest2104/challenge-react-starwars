import React, { useState } from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import List from './List';
import './Home.css';

const Home = ({ allCharacters }) => {

  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {}
  });

  const [listC, setListC] = useState([]);

  const search = (name, cardLocation) => {
    const findCharacter = allCharacters.find(ch => ch.name === name);

    if (cardLocation === 'left') {
      setChars({...chars, cardLeft: findCharacter})
    }

    if (cardLocation === 'right') {
      setChars({...chars, cardRight: findCharacter})
    }
  }

  const addList = () => {
    if (listC.length === 0) {
      setListC(allCharacters);
    } else {
      setListC([]);
    }
  }

  const random = (cardLocation) => {
    function getNumRandom (max) {
      return Math.floor(Math.random()*max)
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = allCharacters.find(ch => ch.id === idRandom);
    if (cardLocation === 'left') {
      setChars({...chars, cardLeft: findCharacter})
    }

    if (cardLocation === 'right') {
      setChars({...chars, cardRight: findCharacter})
    }
  }
  
  return (
    <div className='home'>
      <NavBar search={search} addList={addList} random={random} />
      <h3>Star Wars Battle!!!</h3>
      <Cards characters={chars} />
      <div className='list'>
        <List lista={listC} />
      </div>
    </div>
  )
}

export default Home;