import React, { useState } from 'react';
import SearchImage from '../assets/search.png';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        spellCheck={false}
      />
      <button onClick={handleSearch}><img src={SearchImage} alt="search" /></button>
    </div>
  );
};

export default Search;