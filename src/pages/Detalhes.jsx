import React, { useState, useEffect } from 'react';
import { api } from '../api';

const MoviesComponent = () => {
    const [movies, setMovies] = useState([]);

    const doSomething = async () => {
        // Realiza a consulta e busca filmes com o parâmetro 'adult=true'
        const respostaMovie = await api.get('/discover/movie', {
            params: {
                page: 5,
            }
        });
        setMovies(respostaMovie.data.results);  // Armazena os filmes recebidos
    };

    useEffect(() => {
        doSomething();  // Executa a consulta assim que o componente for montado
    }, []);

    console.log(movies);  // Apenas para depuração (pode ser removido depois)

    return (
        <div>
            <h1>Filmes</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesComponent;
