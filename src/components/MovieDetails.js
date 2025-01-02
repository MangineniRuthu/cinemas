import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons';
import "../style.css";
function MovieDetails() {
    const {id}=useParams();
    const [movie,setMovie]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const API_KEY = 23467511;
    useEffect(()=>{
        const fetchDetails=async ()=>{
            try{
                const response=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
                const data=await response.json();
                if(data.Response === 'True'){
                    setMovie(data);
                }
            }catch(error){
                setError("Failed to fetch the data");
                setLoading(false);
            }
        }
        fetchDetails();
    },[id]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div>
        <div className='movie-details'>
           { movie &&(
                <>
                    <img src={movie.Poster} alt={movie.Title}/>
                    <p><strong>Title:</strong> {movie.Title}</p>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Released:</strong> {movie.Released}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Writer:</strong> {movie.Writer}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    <p><strong>Awards:</strong> <FontAwesomeIcon icon={faAward}/> {movie.Awards}</p>
                    <p><strong>ImdbRating:</strong> &#9733; {movie.imdbRating}</p>
                </>
            )}             
        </div>
    </div>
  )
}

export default MovieDetails