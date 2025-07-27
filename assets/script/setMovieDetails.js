import {
  apiKey,
  getMovieDetails,
  getMoviesCredits,
} from "/assets/script/getData.js";

/* Set Movie Details */
const setMovieDetails = async (apiKey) => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");

  const dataMovies = await getMovieDetails(apiKey, movieId);
  const movieCredits = await getMoviesCredits(apiKey, movieId);
  console.log(movieCredits);

  /* Set Movies Jumbotron IMG */
  const moviesHeader = document.querySelector("section.hero-detail-movies");
  moviesHeader.style.background = `
   linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
   url("https://image.tmdb.org/t/p/original${dataMovies.backdrop_path}")
  `;
  moviesHeader.style.backgroundPosition = "50% 15%";

  /* Set Movies Poster */
  const cardMovieDetails = document.querySelector(".movie-details");
  const getPoster = document.querySelector(".movie-details img");
  getPoster.setAttribute("alt", `${dataMovies.title}`);
  getPoster.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${dataMovies.backdrop_path}`
  );

  /* Set Movie Titles */
  const getMovieTitle = document.querySelector(".movie-title h1");
  getMovieTitle.innerText = `${dataMovies.title}`;

  /* Set Movies Tag */
  const cardTags = cardMovieDetails.querySelector(".tags-movies");

  dataMovies.genres.slice(0, 3).forEach((tag) => {
    const tagsGenre = document.createElement("span");
    tagsGenre.classList.add("tags");
    tagsGenre.innerText = tag.name;
    cardTags.appendChild(tagsGenre);
  });

  /* Set Movies Release Date */
  const getReleaseDate = document.querySelector("#releaseDate");
  getReleaseDate.innerText = `${dataMovies.release_date}`;

  const duration = dataMovies.runtime.toString();
  const hours = duration.slice(0, 1);
  const minutes = duration.slice(1);
  const getDuration = document.querySelector("#durationMovies");

  getDuration.innerText = `${hours} hours ${minutes} minutes`;

  /* Set Director Name */
  const getSynopsis = document.querySelector(".movie-synopsis p");
  getSynopsis.innerText = `${dataMovies.overview}`;

  const director = movieCredits.crew.find(
    (person) => person.job === "Director"
  );

  const getDirector = document.querySelector("#directorMovies");
  getDirector.innerText = `${director.name}`;

  /* Set Cast name */
  const cast = movieCredits.cast.slice(0, 3);
  const castName = cast.map((artist) => artist.name).join(", ");

  const getCast = document.querySelector("#castName");
  getCast.innerText = `${castName}`;
};

setMovieDetails(apiKey);
