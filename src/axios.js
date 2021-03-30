import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;

// https://www.themoviedb.org/3/trending/all/week?api_key=7365dbc9118f41c12491665ec74fbec5&language=en-US