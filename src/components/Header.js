import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');

  return (
    <header className='container py-6 md:py-12 flex flex-col gap-4 md:flex-row justify-between items-center'>
      <button onClick={navigateToHome}>
        <h1 className='text-primary font-bold text-2xl'>DishDiscovery</h1>
      </button>
      <SearchBar />
    </header>
  );
};

export default Header;
