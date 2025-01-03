import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3/"
const api_key='a090ba10638551e7e96f7b47601deca8'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a090ba10638551e7e96f7b47601deca8';
//https://api.themoviedb.org/3/trending/all/day?api_key=a090ba10638551e7e96f7b47601deca8
const getTrendingVideos=axios.get( `${movieBaseUrl}trending/all/day?api_key=${api_key}`);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}