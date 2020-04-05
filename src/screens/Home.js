import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h2 className={styles.gettingMarried}>Pobieramy się!</h2>
            <Link to="/SignIn">
                <button>Zaloguj się</button>
            </Link>
            <Link to="/SignUp">
                <button>Zarejestruj się</button>
            </Link>
            <div className={styles.home}>
                <div className={styles.bold}><i className="fas fa-church"></i>  Ślub</div>
                <h3>04.09.2021r. Godzina</h3>
                <p>Kościół</p>
            </div>
            <div className={styles.topBorder}>
                <div className={styles.bold}><i className="fas fa-glass-cheers"></i>  Wesele</div>
                <h3>Sala weselna</h3>
                <p>Godzina</p>
            </div>
            <div className={styles.topBorder}>
                <div className={styles.bold}><i className="fas fa-gifts"></i>  Prezenty</div>
                <p>Zamiast kwiatów prosimy o butelki wina lub innego kolorowego alkoholu <i className="fas fa-wine-bottle"></i></p>
            </div>


        </div>
    )
}

export default Home
