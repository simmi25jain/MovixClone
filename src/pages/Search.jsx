import React, { useEffect, useState } from 'react'
import './Search.css';

function Search() {
    const [backgroundImg, setBackgroundImg] = useState([]); //useState- Movie data aur selected URL ko manage karta hai
    useEffect(() => { //useEffect- Jab bhi URL change hota hai, API se fresh data fetch hota hai
        fetchBackgroundImg();
    }, []);

    async function fetchBackgroundImg() {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=1912ac6f767998bd9f82c23be3dbc2df"
        );

        const data = await response.json();
        console.log(data);

        // setBackgroundImg(data.results);
        const validMovies = data.results.filter((movie) => movie.backdrop_path);
        setBackgroundImg(validMovies);
    }

    return (
        <>
            <div className='banner'>
                {/* {backgroundImg.map((movies) => {
                    <li key={movies.id}>
                        <img src={`${baseImageURL}${movies.backdrop_path}`} />
                    </li>
                })} */}
                <h1 className="welcome">Welcome.</h1>
                <p className="sub">Millions of movies, TV shows and people to discover. Explore now.</p>
                <div className="searchBox">
                    <input type="text" placeholder="Search for a movie or tv show...." />
                    <button>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search

