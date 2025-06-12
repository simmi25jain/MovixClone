import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const baseImageURL = "https://image.tmdb.org/t/p/original";

function Home({ heading, btn1, btn2, urls }) {
  const [allMovieData, setAllMovieData] = useState([]);
  const [showData, setShowData] = useState(urls[0]);

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
    return content
  }
  const navigate = useNavigate();
  function handleSinglePage(id) {
    navigate(`/SinglePages/${id}`);
  }
  return (
    <div className="container">
      <div className="heading-btn">
        <h1 className="heading">{heading}</h1>
        <div className="homeBtns">
          <button className="btn1" onClick={() => setShowData(urls[0])}>
            {btn1}
          </button>
          <button className="btn2" onClick={() => setShowData(urls[1])}>
            {btn2}
          </button>
        </div>
      </div>

      <ul className="scrollBar">
        {allMovieData.map((movie) => 
          (
          <li key={movie.id} onClick={() => handleSinglePage(movie.id)} >
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

export default Home;