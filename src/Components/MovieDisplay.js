import React from 'react';

function MovieDisplay({movies}) {
    const myMovies = movies.map(movie => {
        return (
            <div style={{padding: '1rem'}}>
                <img src={movie.Poster} alt='gaff' />
                <h4>{movie.Title}</h4>
            </div>
        )
    })
    console.log(myMovies)
  return (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {myMovies}
  </div>
  );
}

export default MovieDisplay;
