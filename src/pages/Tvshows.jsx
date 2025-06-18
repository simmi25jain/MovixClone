import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { urls } from "../Urls";
const baseImageURL = "https://image.tmdb.org/t/p/original";
import "./Movies.css";

function Tvshows({ heading, urls }) {
  const [allMovieData, setAllMovieData] = useState([]);
  const [showData, setShowData] = useState(urls[0]);
  const [showGenres, setShowGenres] = useState([]);
  const [selectGenres, setSelectGenres] = useState("");
  const [sortBy, setSortBy] = useState("");

  const sortOptions = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
    { label: "Release Date Descending", value: "release_date.desc" },
    { label: "Release Date Ascending", value: "release_date.asc" },
    { label: "Title (A-Z)", value: "original_title.asc" },
  ];

  // useEffect(() => {
  //   async function fetchFilteredMovies() {
  //     const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  //     const api_key = "57ba7c00ee14d8883b9d0fd8084391a0";
  //     let url = ${baseUrl}?api_key=${api_key};

  //     if (selectGenres) {
  //       url += &with_genres=${selectGenres};
  //     }
  //     if (sortBy) {
  //       url += &sort_by=${sortBy};
  //     }

  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       const data = result.results || [];
  //       setAllMovieData(data);
  //     }
  //     catch (err) {
  //       console.error("Error fetching movies:", err);
  //     }
  //   }
  //   fetchFilteredMovies();
  // }, [selectGenres, sortBy]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        // When filter/sort is applied, use discover API
        if (selectGenres || sortBy) {
          setAllMovieData([]);
          const baseUrl = "https://api.themoviedb.org/3/discover/tv";
          const api_key = "57ba7c00ee14d8883b9d0fd8084391a0";
          let url = `${baseUrl}?api_key=${api_key}`;

          if (selectGenres) {
            url += `&with_genres=${selectGenres}`;
          }
          if (sortBy) {
            url += `&sort_by=${sortBy}`;
          }
          console.log(url);

          const response = await fetch(url);
          const result = await response.json();
          const data = result.results || [];
          console.log(data);
          setAllMovieData(data);
        }
        // Otherwise, load initial data from urls
        else {
          const responses = await Promise.all(urls.map((url) => fetch(url)));
          const results = await Promise.all(responses.map((res) => res.json()));
          const data = results.flatMap((res) => res.results || []);
          console.log(data);

          setAllMovieData(data);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        0;
      }
    }

    fetchMovies();
  }, [selectGenres, sortBy, showData]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=57ba7c00ee14d8883b9d0fd8084391a0`
        );
        const result = await response.json();
        const data = result.genres || [];
        setShowGenres(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    }
    fetchGenres();
  }, []);

  // useEffect(() => {
  //   async function fetchAllMoviesDay() {
  //     try {
  //       const responses = await Promise.all(urls.map((url) => fetch(url)));
  //       const results = await Promise.all(responses.map((res) => res.json()));
  //       const data = results.flatMap((res) => res.results || []);
  //       setAllMovieData(data);
  //     } catch (err) {
  //       console.error("Error fetching all movies:", err);
  //     }
  //   }

  //   fetchAllMoviesDay();
  // }, [showData]);

  function trimContent(content) {
    if (content.length > 28) {
      return content.slice(0, 16) + "...";
    }
    return content;
  }
  const navigate = useNavigate();
  function handleSinglePage(id) {
    navigate(`/SinglePages/${id}?type=tv`);
  }

  return (
    <div className="container">
      <div className="heading-btn">
        <h1 className="heading">{heading}</h1>
        <div className="filter">
          <select
            className="selectGenres"
            value={selectGenres}
            onChange={(e) => setSelectGenres(e.target.value)}
          >
            <option value="">Select Genres</option>
            {showGenres.map((genres) => (
              <option key={genres.id} value={genres.id}>
                {genres.name}
              </option>
            ))}
          </select>
          <select
            className="selectSortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            {sortOptions.map((sort) => (
              <option key={sort.value} value={sort.value}>
                {sort.label}
              </option>
            ))}
          </select>
                  
        </div>
      </div>

      <ul className="movieList">
        {allMovieData.map((movie) => (
          <li key={movie.id} onClick={() => handleSinglePage(movie.id)}>
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
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tvshows;