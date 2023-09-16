import { Icon } from '@iconify/react';
import classes from './nav.module.css'



export default function Nav({setSearch}) {
    const handleSearch = (searchTerm) => {
        setSearch(searchTerm);
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
                    <Icon icon="iconamoon:search-fill" color="white"/>
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