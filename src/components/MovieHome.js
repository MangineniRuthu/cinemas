import React from "react";
import "../style.css";
import DisplayMovie from "./DisplayMovie";
import CopyRights from "./CopyRights";
import { useState, useEffect,useCallback } from "react";

function MovieHome() {
  const [moviename, setMovieName] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = 23467511;

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSearch = useCallback(async () => {
    if (!moviename.trim()) {
      setError("Please enter a movie name.");
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${moviename}&apikey=${API_KEY}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setError(data.Error);
        setMovie([]);
      }
    } catch (error) {
      setError("Failed to fetch the data");
      setMovie([]);
    }
    setLoading(false);
  },[moviename,API_KEY]);

  useEffect(() => {
    if (moviename.trim()) {
      handleSearch();
    }
  }, [moviename,handleSearch]);

  return (
    <div>
      <h1 className="head-tag">Movie App</h1>
      <div className="container">
        <div className="search">
          <input
            className="mv_search"
            type="text"
            name="movie"
            value={moviename}
            placeholder="Search for Movie Name"
            onChange={handleChange}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
          {loading && <p>Loading....</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
      <DisplayMovie movie={movie} />
      <CopyRights />
    </div>
  );
}

export default MovieHome;
