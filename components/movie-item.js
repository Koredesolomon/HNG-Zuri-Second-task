import classes from './movie-item.module.css'

function MovieItem(props) {
    const { title, image, datereleased, id} = props;

    return (
             <li data-testid='movie-card' className={classes.movieitem}>
            <img data-testid='movie-poster' src={'/' + image} alt={title}></img>
            <h2 data-testid='movie-release-date'>{datereleased}</h2>
            <h1 data-testid='movie-title'>{title}</h1>
            </li>
    )
}

export default MovieItem;