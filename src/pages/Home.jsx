import { useState } from "react";
import { api } from "../api"
import { useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([])

    const doSomething = async () => {
        const respostaMovie = await api.get('/discover/movie?page=1')
        setMovies(respostaMovie.data.results)
    }
    useEffect(() => {
        doSomething();
    }, [])


    console.log(movies);

    return (
        <>
            <div>
                <h1>HOME</h1>
                {movies.map((item)=>{
                    return(
                        <>
                                                <h3>{item.title}</h3>

                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                        </>
                    )
                }) }
            </div>
        </>
    )
}

export default Home