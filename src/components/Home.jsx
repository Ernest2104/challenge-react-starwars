import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import List from './List';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <Cards />
      <div className='list'>
        <List />
      </div>
    </div>
  )
}

export default Home;