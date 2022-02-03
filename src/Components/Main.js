import React, { useEffect, useState } from 'react';
import MovieData from './MovieData';
import MovieDisplay from './MovieDisplay';
import SearchBar from './SearchBar';

function Main() {
    
    const [movies, setMovies] = useState(MovieData)
    const [search, setSearch] = useState("")
    
    const getMovieRequest = (search) => {
        const searchedMovie = (movies.filter(function(ele){
            return ele.Title.toLowerCase().includes(search.toLowerCase())
        }))
    
          setMovies(searchedMovie)
        
    }

    useEffect(() => {
      getMovieRequest(search)
    }, [search])
    
  return (
  <div>
      <SearchBar search={search} setSearch={setSearch} />
      <MovieDisplay movies={movies}/>
  </div>
  );
}

export default Main;
