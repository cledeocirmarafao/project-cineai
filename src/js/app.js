const moodTextArea = document.getElementById("mood-textarea");
const searchButton = document.getElementById("search-button");

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
});

function setupEventListeners() {
  moodTextArea.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSearch();
    }
  });
  searchButton.addEventListener("click", handleSearch);
}

async function handleSearch() {
  searchButton.disabled = true;
  searchButton.textContent = "Buscando, aguarde...";

  const mood = moodTextArea.value.trim();

  if (!mood) {
    alert("Please enter your current mood to get movie recommendations.");
    return;
  }

  try {
    const response = await fetch(
      "https://cledeocirmarafao.app.n8n.cloud/webhook/cineai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt: mood }),
      }
    );
    const data = await response.json();

    if (data && data.results.length > 0) {
      const resultsSection = document.getElementById("results-section");
      const moviesSection = document.getElementById("movies-section");

      resultsSection.classList.add("show");

      moviesSection.innerHTML = data.results
        .map((movie) => {
          const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          const title = movie.title || movie.name || "Título indisponível";
          const overview = movie.overview || "N/A";
          const release = movie.release_date || movie.first_air_date || "N/A";
          const rating =
            movie.vote_average != null ? movie.vote_average.toFixed() : "N/A";

          return `
              <article class="movie-content">
                <img src="${poster}" alt="${title} poster" class="movie-poster"/>
                <div class="movie-info">
                  <h3 class="movie-title">${title}</h3>
                  <p class="movie-overview">${overview}</p>
                  <p class="movie-meta">Lançamento: <span class="date">${release}</span> </p>
                  <p class="movie-rating">Avaliação: ⭐ ${rating}</p>
                </div>
              </article>
            `;
        })
        .join("");
    }
  } catch (error) {
    alert("We are receiving many requests, please come back later.");
  } finally {
    searchButton.disabled = false;
    searchButton.textContent = "Buscar Filme Perfeito";
  }
}
