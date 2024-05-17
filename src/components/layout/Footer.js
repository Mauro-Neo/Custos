import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(params) {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100000104703270&mibextid=ZbWKwL" target='blank' className={styles.no_link_color}><FaFacebook /></a>                   
                </li>
                <li>
                <a href="https://www.instagram.com/mauro_neo/" target='blank' className={styles.no_link_color}><FaInstagram /></a> 
                </li>
                <li>
                <a href="https://www.linkedin.com/in/mauro-silva-2a5677184/" target='blank' className={styles.no_link_color}><FaLinkedin /></a>  
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Custos</span> &copy; 2024 - By Mauro Silva
            </p>
        </footer>
    )
}

export default Footer