// import React, { useEffect, useState } from "react";
// import singleImage from "../assets/singleImage.webp";
// import "../pages/SinglePages.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { FaPlay } from "react-icons/fa";
// import { useParams } from "react-router-dom";


// function SinglePages() {
//   const [movieData,setMovieData]=useState(null);
//   const percentage = 80;
//   const {id}=useParams();

// useEffect(() => {
//     async function fetchMoviesDetails() {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1912ac6f767998bd9f82c23be3dbc2df`);
//         const data = await response.json();
//         setMovieData(data);
//       } catch (err) {
//         console.error("Error fetching movies:", err);
//       }
//     }
//     fetchMoviesDetails();
//   }, [id]);

//   return (
//     <div className="SinglePosterConatiner">
//       <div className="posterSingleImage">
//         <img src={singleImage} className="singleImage" />
//       </div>
//       <div className="posterSingleContent">
//         <div className="SingleContentTitle">
//           Predator: Killer of Killers (2025)
//         </div>
//         <div className="SingleContentSubTitle">The hunt begins.</div>
//         <div className="singleMovieTheme">
//           <button>Animation</button>
//           <button>Science Fiction</button>
//           <button>Action</button>
//         </div>
//         <div className="singlePagePlayBtns">
//           <div style={{ width: 85, height: 85 }}>
//             <CircularProgressbar
//               value={percentage}
//               text={`${percentage / 10}`}
//               styles={buildStyles({
//                 textColor: "#fff",
//                 pathColor: "green",
//                 trailColor: "rgba(255,255,255,0.1)",
//                 textSize: "34px",
//               })}
//             />
//           </div>
//           <span className="play-button-container">
//             <FaPlay className="play-icon" />
//           </span>
//           Watch Trailer
//         </div>

//         <div className="singleMovieOverview">
//           <span>Overview</span>
//           <p>
//             This original animated anthology follows three of the fiercest
//             warriors in human history: a Viking raider guiding her young son on
//             a bloody quest for revenge, a ninja in feudal Japan who turns
//             against his Samurai brother in a brutal battle for succession, and a
//             WWII pilot who takes to the sky to investigate an otherworldly
//             threat to the Allied cause.
//           </p>
//         </div>
//         <div className="singleMovieDetails">
//           <div className="basic-info">
//             <span className="status">
//               <span className="basic-info-title">Status:</span><span className="basic-info-subtitle">Released</span>
//             </span>
//             <span className="release-date">
//               <span className="basic-info-title">Release-date:</span><span className="basic-info-subtitle">Jun 5, 2025</span>
//             </span>
//             <span className="runtime">
//               <span className="basic-info-title">Runtime:</span><span className="basic-info-subtitle">1h 25m</span>
//             </span>
//           </div>
         
//             <div className=" basic-info director">Director: <span className="basic-info-subtitle">Dan Trachtenberg</span></div>
//             <div className=" basic-info writer">Writer: <span className="basic-info-subtitle">Dan Trachtenberg, Micho Rutare</span></div>
      
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SinglePages;


import React, { useEffect, useState } from "react";
import singleImage from "../assets/singleImage.webp";
import "../pages/SinglePages.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";

function SinglePages() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=1912ac6f767998bd9f82c23be3dbc2df`
        );
        const data = await response.json();
        setMovieData(data);
        console.log(data);
        
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movieData) return <div>Loading...</div>;

  const {
    title,
    tagline,
    release_date,
    overview,
    status,
    runtime,
    vote_average,
    genres,
    poster_path
  } = movieData;

  return (
    <div className="SinglePosterConatiner">
      <div className="posterSingleImage">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : singleImage
          }
          className="singleImage"
          alt={title}
        />
      </div>

      <div className="posterSingleContent">
        <div className="SingleContentTitle">{title} ({release_date?.slice(0, 4)})</div>
        <div className="SingleContentSubTitle">{tagline}</div>

        <div className="singleMovieTheme">
          {genres?.slice(0, 4).map((genre) => (
            <button key={genre.id}>{genre.name}</button>
          ))}
        </div>

        <div className="singlePagePlayBtns">
          <div style={{ width: 85, height: 85 }}>
            <CircularProgressbar
              value={vote_average * 10}
              text={`${vote_average?.toFixed(1)}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "green",
                trailColor: "rgba(255,255,255,0.1)",
                textSize: "34px",
              })}
            />
          </div>
          <span className="play-button-container">
            <FaPlay className="play-icon" />
          </span>
          Watch Trailer
        </div>

        <div className="singleMovieOverview">
          <span>Overview</span>
          <p>{overview}</p>
        </div>

        <div className="singleMovieDetails">
          <div className="basic-info">
            <span className="status">
              <span className="basic-info-title">Status:</span>
              <span className="basic-info-subtitle">{status}</span>
            </span>
            <span className="release-date">
              <span className="basic-info-title">Release Date:</span>
              <span className="basic-info-subtitle">
                {new Date(release_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
              </span>
            </span>
            <span className="runtime">
              <span className="basic-info-title">Runtime:</span>
              <span className="basic-info-subtitle">
                {Math.floor(runtime / 60)}h {runtime % 60}m
              </span>
            </span>
          </div>

          <div className="basic-info director">
            Director: <span className="basic-info-subtitle">Unknown</span>
          </div>
          <div className="basic-info writer">
            Writer: <span className="basic-info-subtitle">Unknown</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePages;
