import { Icon } from '@iconify/react';
import classes from './footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.icons}>
                <Icon icon="entypo-social:facebook" color="#111827" />
                <Icon icon="ri:instagram-line" color="#111827" />
                <Icon icon="mdi:twitter" color="#111827" />
                <Icon icon="mdi:youtube" color="#111827" />
            </div>
            <div className={classes.privacy}>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className={classes.copyright}>
                <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
            </div>
        </footer>
    )
}