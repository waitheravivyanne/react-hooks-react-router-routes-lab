import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page </h1>
    {
      actors.map((director, index)=> {
        const actorMovies = director.movies
        return <div key={index} >
          <h5>{director.name}</h5>
          <ul>
            {
              actorMovies.map((movie, index)=>{
                return <li key={index}>{movie}</li>
              })
            }
          </ul>
        </div>
      })
    }
  </div>;
}

export default Actors;
