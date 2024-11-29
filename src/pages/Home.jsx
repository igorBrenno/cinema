import React, { useState, useEffect } from 'react';
import { api } from '../api';
import './MoviesComponent.css';

const MoviesComponent = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const respostaMovie = await api.get('/movie/top_rated', {
                params: {
                    page: 1,
                }
            });
            setMovies(respostaMovie.data.results);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="movies-container">
            <h1 className="movies-title">Filmes Populares</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <a href={`/detalhes/${movie.id}`}>
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3 className="movie-title">{movie.title}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesComponent;
