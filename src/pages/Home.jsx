import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';


const baseImageURL = "https://image.tmdb.org/t/p/original";

function Home() {
  const [trendingMoviesDay, setTrendingMoviesDay] = useState([]);
  useEffect(() => {
    fetchTrendingMoviesDay();
  }, []);

  async function fetchTrendingMoviesDay() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=1912ac6f767998bd9f82c23be3dbc2df&language=en-US"
    );

    const data = await response.json();
    console.log(data);


    setTrendingMoviesDay(data.results);
    console.log(data.results);

  }

  return (
    <div>
      <h1>Trending movies by day</h1>
      <ul>
        {trendingMoviesDay.map((movieDay) => (
          <li key={movieDay.id}>
            <div className="poster">
              <img className="poster_image" src={`${baseImageURL}${movieDay.
              poster_path
              }`} />
              </div>
            <div>{movieDay.original_title}</div>
            <div>{movieDay.release_date}</div>
          </li>
        ))}</ul>
    </div>
  );
}

export default Home;