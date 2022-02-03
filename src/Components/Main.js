import React, { useState } from 'react';
import MovieData from './MovieData';
import MovieDisplay from './MovieDisplay';
import SearchBar from './SearchBar';

function Main() {
    
    const [movies, setMovies] = useState(MovieData)
    const [search, setSearch] = useState("")

    
  return (
  <div>
      <SearchBar search={search} setSearch={setSearch} />
      <MovieDisplay movies={movies}/>
  </div>
  );
}

export default Main;
