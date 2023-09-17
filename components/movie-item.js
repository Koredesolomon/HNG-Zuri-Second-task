import Link from 'next/link' 
import classes from './movie-item.module.css' 


export default function MovieItem({movie}) {

    return (
        <Link className={classes.link} href={`/movie/${movie.id}`}>
            <li data-testid='movie-card' className={classes.movieitem}>
                <img data-testid='movie-poster' src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}   alt='title'></img>
                <h2 data-testid='movie-release-date'>{movie.release_date}</h2>
                <h1 data-testid='movie-title'>{movie.title}</h1>
            </li>
        </Link>
    )
}