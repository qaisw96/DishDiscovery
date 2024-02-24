import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
  const navigate = useNavigate();
  const [isStartSearch, setIsStartSearch] = useState(false);

  const handleStartSearch = (event) =>
    setIsStartSearch(Boolean(event.target.value));

  const onSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;

    navigate(`/?search=${searchValue}`);
  };

  return (
    <form onSubmit={onSubmit} className='flex relative w-full md:w-fit'>
      <input
        name='search'
        type='text'
        id='first_name'
        class='bg-gray-50 border-[1px] border-primary border-dashed outline-0 text-gray-900 h-[45px] text-[18px] px-2 rounded-[4px]  block w-full p-1 '
        placeholder='Search'
        required
        onChange={handleStartSearch}
      />
      <button
        className={`absolute p-3 top-0 right-0 transition-all duration-500 ${
          isStartSearch ? 'bg-primary' : 'bg-slate-300'
        } h-full`}
        type='submit'>
        <IoSearchOutline
          className='transition-all duration-500'
          color={isStartSearch ? 'white' : 'black'}
          size={25}
        />
      </button>
    </form>
  );
};

export default SearchBar;
