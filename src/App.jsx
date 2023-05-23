import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home';
import axios from 'axios';

function App() {

  const [characters, setCaharacters] = useState([]);

  const getAllCharacters = async () => {
    const allData = await axios('https://akabab.github.io/starwars-api/api/all.json');
    setCaharacters(allData.data);
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Home allCharacters={characters}/>
    </>
  )
}

export default App;
