import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard'

import './MovieGrid.css';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className='container'>
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.lentg === 0 && <p>carregando...</p>}
                {topMovies.length && topMovies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default Home;