import { useEffect, useState } from "react";
import MovieItem from "./movie-item";
import classes from './movie-list.module.css'
import { Icon } from '@iconify/react';

export default function MovieList ({search}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                let apiURL =`https://api.themoviedb.org/3/movie/top_rated?api_key=56caa2391582294e3d9763cf0505ea87`;
                if(search == 200){
                    apiURL =`https://api.themoviedb.org/3/search/top_rated/movie?query=${search}&page=1&api_key=56caa2391582294e3d9763cf0505ea87`;
                }
                const response = await fetch(apiURL);
                if (!response.ok) {
                throw new Error('Network response was not ok');
                setSearchTerm(search)
                }
                const data = await response.json();
                let slicedArray = data.results.slice(0,10);
                setMovies(slicedArray);
            } 
            catch(error) {
                setError(error.message);
            }
        }
        fetchData();
    }, [search]);

    return (
    <ul className={classes.movielist}>
        <div className={classes.top}>
            <h1>Featured Movie</h1>
            <a>See more <Icon icon="ep:arrow-right" color="red" /></a>
        </div>
        <div className={classes.main}>
            {movies.map((movie) => (
            <MovieItem 
            key={movie.id}
            movie={movie}
            />
            ))}
        </div>
    </ul>
    )
}