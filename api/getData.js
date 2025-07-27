const apiKey = process.env.TMDB_API_KEY;

/* Fetch Popular Movies */
export const getPopularMovies = async (apiKey) => {
  const storageMovies = localStorage.getItem("popularMovies");

  if (storageMovies) {
    return JSON.parse(storageMovies);
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    const dataMovies = response.data.results;
    localStorage.setItem("popularMovies", JSON.stringify(dataMovies));

    return dataMovies;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Fetch genreMovies */
export const getGenre = async (apiKey) => {
  const storageMovies = localStorage.getItem("genreMovies");

  if (storageMovies) {
    return JSON.parse(storageMovies);
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );

    const dataGenreMovies = response.data.genres;
    localStorage.setItem("genreMovies", JSON.stringify(dataGenreMovies));

    return dataGenreMovies;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Fetch Movies Details */
export const getMovieDetails = async (apiKey, movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    const dataMovieDetails = response.data;

    return dataMovieDetails;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Fetch Movies Credits */
export const getMoviesCredits = async (apiKey, movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );

    const dataMovieCredits = response.data;
    return dataMovieCredits;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};
