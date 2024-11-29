import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useParams } from 'react-router-dom';

const MovieDetailsComponent = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    const fetchMovieDetails = async () => {
        try {
            const respostaMovie = await api.get(`/movie/${id}`);
            setMovie(respostaMovie.data);
        } catch (error) {
            console.error("Erro ao buscar os detalhes do filme:", error);
        }
    };

    useEffect(() => {
        fetchMovieDetails(); 
    }, [id]);

    if (!movie) {
        return <div>Carregando...</div>;  
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                alt={movie.title} 
            />
            <p>{movie.overview}</p>
            <p><strong>Lançamento:</strong> {movie.release_date}</p>
            <p><strong>Nota:</strong> {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetailsComponent;
