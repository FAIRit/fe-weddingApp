import React from 'react';
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h2>Pobieramy się!</h2>
            <div className={styles.church}>
                <div className={styles.bold}><i className="fas fa-church"></i>  Ślub</div>
                <h3>04.09.2021r. Godzina</h3>
                <p>Kościół</p>
            </div>
            <div className={styles.weddingHall}>
                <div className={styles.bold}><i className="fas fa-glass-cheers"></i>  Wesele</div>
                <h3>Sala weselna</h3>
                <p>Godzina</p>
            </div>
            <div className={styles.weddingHall}>
                <div className={styles.bold}><i className="fas fa-gifts"></i>  Prezenty</div>
                <p>Zamiast kwiatów prosimy o butelki wina lub innego kolorowego alkoholu <i className="fas fa-wine-bottle"></i></p>
            </div>


        </div>
    )
}

export default Home
