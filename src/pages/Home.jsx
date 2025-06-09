import React, { useEffect, useState } from "react";
import "./Home.css";

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
    async function fetchTrendingMovies() {
      try {
        const res = await fetch(showData);
        const json = await res.json();
        setAllMovieData(json.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchTrendingMovies();
  }, [showData]);

  function trimContent(content) {
    if (content.length > 28) {
      return content.slice(0, 16) + "...";
    }
    return content;
  }

  return (
    <div className="container">
      <div className="heading-btn">
        <h1 className="heading">{heading}</h1>
        <div className="homeBtns">
          <button className="btn1" onClick={() => setShowData(urls[0])}>{btn1}</button>
          <button className="btn2" onClick={() => setShowData(urls[1])}>{btn2}</button>
        </div>
      </div>

      <ul className="scrollBar">
        {allMovieData.map((movie) => (
          <li key={movie.id}>
            <div className="poster">
              <img
                className="poster_image"
                src={`${baseImageURL}${movie?.poster_path}`}
                alt={movie.title || movie.name}
              />
            </div>
            <div className="movieTitle">{trimContent(movie.original_title || movie.name)}</div>
            <div className="releaseDate">{new Date(movie.release_date || movie.first_air_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;