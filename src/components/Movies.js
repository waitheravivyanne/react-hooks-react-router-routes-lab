import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
     <h1>Movies Page</h1>
  {
    movies.map((movie, index)=>{
      const movieGenre = movie.genres
      return <div key={index}>
        <h4>{movie.title}</h4>
        <p>{movie.time}</p>
        <ul>
          {
            movieGenre.map((genre, index)=>{
              return <li key={index} >{genre}</li>
            })
          }
          </ul>
      </div>
    })
  }
  </div>;
}

export default Movies;
