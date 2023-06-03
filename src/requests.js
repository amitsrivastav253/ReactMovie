const Api_Key = "c45a857c193f6302f2b5061c3b85e743";
const movie_id = "";
const requests = {
    fetchAllMovie : `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US&page=1`,
    fetchMovieDetail : `https://api.themoviedb.org/3/movie/?api_key=${Api_Key}&language=en-US`,
    fetchCastDetail:`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_Key}&language=en-US`,
    fetchUpComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_Key}&language=en-US&page=1`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_Key}&language=en-US&page=1`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=10749`,
  
}


export default requests;

