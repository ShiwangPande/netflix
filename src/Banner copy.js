// import React, { useEffect, useState } from "react";
// import axios from "./axios";
// import requests from "./requests";
// import "./Banner.css";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/original/";
// function Banner({ title, fetchUrl, fetchNetflixOriginals, isLargeRow }) {
//   const [movies, movie, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(
//         requests.fetchNetflixOriginals || fetchUrl
//       );
//       setMovie(
//         request.data.results[
//           Math.floor(
//             Math.random() * request.data.results.length - 1 ||
//               request.data.results
//           )
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, [fetchNetflixOriginals || fetchUrl]);

//   console.log(movie);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }
//   const opts = {
//     height: "390",
//     width: "100%",
//     playVars: {
//       autoplay: 1,
//     },
//   };
//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.name || movie?.title || movie?.original_title)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };
//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <h2>{title}</h2>
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           {movies.map(
//             (movie) => (
//             <button
//               key={movie.id}
//               onClick={() => handleClick(movie)}
//               className={`banner_button`}
//               src={`${base_url}${
//                 isLargeRow ? movie.poster_path : movie.backdrop_path
//               }`}
//               alt={movie.name}
//             >
//               Play
//             </button>
//           ))}
//           {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner__description">
//           {truncate(movie?.overview, 150)}
//         </h1>
//       </div>
//       <div className="banner__fadeBottom" />
//     </header>
//   );
// }

// export default Banner;
