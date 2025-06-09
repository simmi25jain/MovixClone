import React, { useEffect, useState } from "react";
import "./Home.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

function Home({ heading, btn1, btn2, urls }) {
  const [allMovieData, setAllMovieData] = useState([]);

  useEffect(() => {
    async function fetchTrendingMoviesDay() {
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const results = await Promise.all(responses.map((res) => res.json()));
        const data = results.flatMap((res) => res.results || []);
        setAllMovieData(data);
      } catch (err) {
        console.error("Error fetching trending movies:", err);
      }
    }

    fetchTrendingMoviesDay();
  }, [urls]);

  return (
    <div className="container">
      <div className="heading-btn">
        <h1 className="heading">{heading}</h1>
        <div className="homeBtns">
          <button className="btn1">{btn1}</button>
          <button className="btn2">{btn2}</button>
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
            <div className="movieTitle">{movie.original_title || movie.name}</div>
            <div className="releaseDate">{movie.release_date || movie.first_air_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;