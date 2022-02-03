import React from 'react';

function SearchBar({setSearch, value}) {
  return ( 
  <div>
      <input 
            placeholder='Search'
            value={value}
            onChange={(e) => setSearch(e.target.value)}
      />
  </div>
  );
}

export default SearchBar;
