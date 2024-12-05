import axios from "axios";






export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e67068cf824a77155eebbb9210999861"
    }
});