import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const search = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieGrid.css';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithQueryURL = `${search}?${apiKey}&query=$${query}`;

        getSearchedMovies(searchWithQueryURL)
    }, [query]);

    return (
        <div className='container'>
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
                {movies.lentg === 0 && <p>carregando...</p>}
                {movies.length && movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default Search;