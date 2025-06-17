import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { urls } from "../Urls";
const baseImageURL = "https://image.tmdb.org/t/p/original";
import './Movies.css'

function Movies({heading,urls}) {
  const [allMovieData, setAllMovieData] = useState([]);
  // const [showData, setShowData] = useState(urls[0]);
  const [showData, setShowData] = useState(() => (urls && urls.length > 0 ? urls[0] : ""));
const [showGenres, setShowGenres] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  // useEffect(() => {
  //   async function fetchTrendingMoviesDay() {
  //     try {
  //       const responses = await Promise.all(urls.map((url) => fetch(url)));
  //       const results = await Promise.all(responses.map((res) => res.json()));
  //       const data = results.flatMap((res) => res.results || []);
  //       setAllMovieData(data);
  //     } catch (err) {
  //       console.error("Error fetching trending movies:", err);
  //     }
  //   }

  //   fetchTrendingMoviesDay();
  // }, [showData]);

  useEffect(() => {
    async function fetchTrendingMoviesDay() {
      try {
        const response = await fetch(showData);
        const result = await response.json();
        const data = result.results || [];
        setAllMovieData(data);
        console.log(data);
        
      } catch (err) {
        console.error("Error fetching trending movies:", err);
      }
    }

    fetchTrendingMoviesDay();
  }, [showData]);
  // console.log(showData);
  function trimContent(content) {
    if (content.length > 28) {
      return content.slice(0, 16) + "...";
    }
    return content;
  }
  const navigate = useNavigate();
  function handleSinglePage(id) {
    navigate(`/SinglePages/${id}`);
  }
  const sortOptions = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
    { label: "Release Date Descending", value: "release_date.desc" },
    { label: "Release Date Ascending", value: "release_date.asc" },
    { label: "Title (A-Z)", value: "original_title.asc" }
  ];
  return (
    <div className="container">
      <div className="heading-btn">
        <h1 className="heading">{heading}</h1>
        {/* <div className="homeBtns"> */}
          <div className="filter">
          <select className='selectGenres'>
            <option value="">Select Genres</option>
            {showGenres.map((genres) => (
              <option key={genres.id} value={genres.id}>{genres.name}</option>
            )
            )}
          </select>

          <select className='selectSortBy'>
            <option value="">Sort By</option>
            {sortOptions.map((sort) => (
              <option key={sort.value} value={sort.value}>{sort.label}</option>
            )
            )}
          </select>

        </div>

        {/* </div> */}
      </div>

      <ul className="scrollBar">
        {allMovieData.map((movie) => (
          <li key={movie.id} onClick={()=>handleSinglePage(movie.id)}>
            <div className="poster">
              <img
                className="poster_image"
                src={`${baseImageURL}${movie?.poster_path}`}
                alt={movie.title || movie.name}
              />
            </div>
            <div className="MovieName">
              {trimContent(movie.original_title || movie.name)}
            </div>
            <div className="releaseDate">
              {new Date(
                movie.release_date || movie.first_air_date
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default Movies;