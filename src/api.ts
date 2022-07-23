const API_KEY = "0c6f3c84d4564ed4f2afcb7aa3744089";
const BASE_PATH = "https://api.themoviedb.org/3/";

export function getMovies() {
  return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
