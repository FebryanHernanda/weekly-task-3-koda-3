import { apiKey, getPopularMovies, getGenre } from "../../api/getData.js";

/* Set All Movies List */
const setListMovies = async (apiKey) => {
  const dataMovies = await getPopularMovies(apiKey);
  const dataGenre = await getGenre(apiKey);

  const cardContainer = document.querySelector("#card-container-listMovies");

  dataMovies.forEach((movie) => {
    const cardMovies = document.createElement("div");
    cardMovies.classList.add("card-movies");

    const cardDesc = document.createElement("div");
    cardDesc.classList.add("movies-desc");

    cardMovies.innerHTML = `
    <div class="movies-img">
      <img
          src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"
          alt="${movie.title}"
      />
      <div class="card-overlay">
          <div class="button-overlay">
          <a href="/pages/movies/detail-movies.html?id=${movie.id}">
              <button>Details</button>
          </a>
          <a href="/pages/payment/order.html">
              <button>Buy Tickets</button>
          </a>
          </div>
      </div>`;

    cardDesc.innerHTML = `
      <div class="movies-desc">
            <h3 class="text-large font-regular">${movie.title}</h3>
            <div class="tags-movies">
            </div>
      </div>
        
        `;

    const cardTags = cardDesc.querySelector(".tags-movies");

    const findGenre = movie.genre_ids.map((id) => {
      const genre = dataGenre.find((genre) => genre.id === id);
      const tagsGenre = document.createElement("span");
      tagsGenre.classList.add("tags");
      tagsGenre.innerText = `${genre.name}`;

      return tagsGenre;
    });

    findGenre.slice(0, 3).forEach((tag) => {
      cardTags.appendChild(tag);
    });

    cardMovies.append(cardDesc);
    cardContainer.appendChild(cardMovies);
  });
};

setListMovies(apiKey);
