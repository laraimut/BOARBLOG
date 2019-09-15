import  axios from "axios";
function getLatestMovies(i = 0){
   return axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=08603a286b0923c2b0fafeb42ac7d970&language=en-US&page=1")
        .then(res => {
            return res.data.results.splice(i,i+1);
        });
}
function getTopRated(i =0){
    return axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=08603a286b0923c2b0fafeb42ac7d97&language=en-US&page=1")
        .then(res => {
            return res.data.results.splice(i,i+1);
        });
}

export  default getLatestMovies;