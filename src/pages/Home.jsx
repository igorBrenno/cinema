import React, { useState, useEffect } from 'react';
import { api } from '../api';

const MoviesComponent = () => {
    const [movies, setMovies] = useState([]); 

    const fetchMovies = async () => {
        try {
            const respostaMovie = await api.get('/discover/movie', {
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
        <div>
            <h1>Filmes</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <a href={`/detalhes/${movie.id}`}>
                            <h3>{movie.title}</h3>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesComponent;
