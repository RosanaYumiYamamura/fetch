const moviesContainer = document.getElementById("moviesContainer");
const URL = "https://662de9aaa7dda1fa378b8b0c.mockapi.io/";
function getAll (){
  fetch(URL + "movies")
    .then(res => res.json())
    .then(movies => renderMovies(movies));
}

function renderMovies(movies) {
 for (const movie of movies) {
   const movieCard = document.createElement("article");
   const movieData = `
   <h3>${movie.title}</h3>
   <p>${movie.year}</p>
   <p>${movie.director}</p>
   <p>${movie.genre.join(" - ")}</p>
   <p>⚡rating: ${movie.rate}</p>
   <img src="${movie.poster}" alt="${movie.title}"/>
   `;
   movieCard.innerHTML = movieData;
   moviesContainer.appendChild(movieCard);
 }
}

function clearProductsList() {
    ProductsList.querySelectorAll("*").forEach(child =>child.remove());
}

getAll();