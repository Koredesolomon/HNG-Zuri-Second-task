import { Icon } from '@iconify/react';
import classes from './nav.module.css'
import { useState } from 'react';



export default function Nav({setSearch}) {
    const [isLoading, setIsLoading] = useState(false);
    const handleSearch = (searchTerm) => {
        setSearch(searchTerm);
        setIsLoading(true);

        setTimeout(() => {
        setSearch(searchTerm);
        setIsLoading(false);
        }, 1000); 
    };
    return (
        <nav className={classes.body}>
            <section className={classes.nav}>
                <div className={classes.logo}>
                    <img src="images/tv.png" alt="logo"></img>
                    <h1>MovieBox</h1>
                </div>
                <div className={classes.search}>
                    <input
                        type="text"
                        placeholder="What do you want to watch?"
                        onChange={(e) => {handleSearch(e.target.value)}}
                    />
                     {isLoading ? (
                        <div className={classes.loader}>Loading...</div> // Display loading indicator
                    ) : (
                        <Icon icon="iconamoon:search-fill" color="white" />
                    )}
                </div>
                <div className={classes.hide}>
                    <img src='images/Menu.png' alt='Menu'></img>
                </div>
            </section>
            <section className={classes.text}>
                <h1>John Wick 3 : <br></br> Parabellum</h1>
                <p>John Wick is on the run after killing a member <br></br> of the international assassins' guild, and with <br></br> a $14 million price tag on his head, he is the <br></br> target of hit men and women everywhere.</p>
                <img src='images/Button.png' alt='button'></img>
            </section>
        </nav>
    )
}