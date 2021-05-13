const results = document.querySelector('#results');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item">
      <img src="${result.Poster}" alt="">
      <p>${result.Title}</p>
    </li>`;
    results.insertAdjacentHTML("beforeend", movie);
  });
};

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const updateResultsList = (event) => {
  event.preventDefault();
  const input = document.querySelector('.title').value;
  results.innerHTML = '';
  searchMovies(input);
};

export { searchMovies, updateResultsList };
