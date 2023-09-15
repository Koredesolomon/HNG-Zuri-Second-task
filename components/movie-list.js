import MovieItem from "./movie-item";
import classes from './movie-list.module.css'
import { Icon } from '@iconify/react';

function MovieList (props) {
    const { items } = props;

    return (
    <ul className={classes.movielist}>
        <div className={classes.top}>
            <h1>Featured Movie</h1>
            <a>See more <Icon icon="ep:arrow-right" color="red" /></a>
        </div>
        <div className={classes.main}>
            { items.map((event) => (
            <MovieItem 
            key={event.id}
            title={event.title} 
            datereleased={event.datereleased} 
            image={event.image}
            />
            ))}
        </div>
    </ul>
    )
}

export default MovieList;