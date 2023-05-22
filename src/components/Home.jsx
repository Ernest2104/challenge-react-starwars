import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import List from './List';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
      <NavBar />
      <Cards />
      <div>
        <List />
      </div>
    </div>
  )
}

export default Home;