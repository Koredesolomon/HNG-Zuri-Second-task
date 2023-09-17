import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import classes from './[id].module.css'
import { Icon } from '@iconify/react';

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState(null);

  const [movie, setMovie] = useState({});

  useEffect(() => {
        async function fetchData() {
            try {
                let apiURL =`https://api.themoviedb.org/3/movie/${id}?api_key=56caa2391582294e3d9763cf0505ea87`;
                const response = await fetch(apiURL);
                
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                  setMovie({...data});
            } 
            catch(error) {
                setError(error.message);
            }
        }
        fetchData();
    }, [id]);

  return (
    <div className={classes.card}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarInner}>
          <div className={classes.logo}>
              <img src="/images/tv.png" alt="logo"></img>
              <h1>MovieBox</h1>
          </div>
          <div className={classes.icon}>
            <a><Icon icon="octicon:home-24" color="gray" /><span>Home</span></a>
            <a><Icon icon="bx:camera-movie" color="gray" /><span>Movies</span></a>
            <a><Icon icon="system-uicons:tv-mode" color="gray" /><span>TV Series</span></a>
            <a><Icon icon="fluent:calendar-12-regular" color="gray" /><span>Upcoming</span></a>
            <img src='/images/Rectangle 11.png' alt=''></img>
            <a><Icon icon="iconoir:log-out" color="gray"/><span>Log out</span></a>
          </div>
        </div>
      </div>
      {movie && (
        <div className={classes.movieitem}>
          <span><img src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt='title'></img></span>
          <h2 className={classes.title} data-testid = 'movie-title'>{movie.title}</h2>
          <p className={classes.title} data-testid = 'movie-release-date'>{movie.release_date}</p>
          <p className={classes.title} data-testid = 'movie-runtime'>{movie.runtime}</p>
          <p className={classes.overview} data-testid = 'movie-overview'>{movie.overview}</p>
        </div>
      )}
    </div>
  );
}
export default MovieDetail;