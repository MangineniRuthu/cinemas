import React from 'react';
import "../style.css";
import {Link} from "react-router-dom";

function DisplayMovie({movie}) {
  return (
    <div className='movie-list'>
         {
            movie.map((mv)=>(
                <div key={mv.imdbID} className='movie-card'>
                  <Link to={`/movie/${mv.imdbID}`}>
                    <img src={mv.Poster} alt={mv.Title}/>
                  </Link>  
                </div>
                
            ))
         }
    </div>
  )
}

export default DisplayMovie