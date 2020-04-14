import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import frame from '../images/abstract-3166168_640.png';
import { withAuthentication } from '../components/Session';

function Home({ authUser }) {
    return (
        <section className={styles.home}>
            <h2 className={styles.gettingMarried}>Pobieramy się!</h2>
            {!authUser ? <>
                <section>
                    Zaloguj się i powiedz nam, ze będziesz tego dnia z nami! Bardzo na <strong>Ciebie</strong> liczymy <i className="far fa-smile"></i>
                </section>
                <Link to="/SignIn" className={styles.signIn}>
                    <img src={frame} alt="frame" className={styles.frame}></img>
                    <button className={styles.button}>Zaloguj się</button>

                </Link>
                <Link to="/SignUp" className={styles.signIn}>
                    <button className={styles.button}>Zarejestruj się</button>
                    <img src={frame} alt="frame" className={styles.revertFrame}></img>
                </Link>
            </>
                : null}



            <section className={styles.home}>
                <div className={styles.bold}><i className="fas fa-church"></i>  Ślub</div>
                <h3>Odbędzie się 04.09.2021r. o godzinie 14:00</h3>
                <p>w <a href="http://www.swjozefmorag.elblag.opoka.org.pl/index.php/2015-04-05-21-52-57" target="blank" className={styles.link}>Parafii Rzymskokatolickiej św. Józefa w Morągu</a></p>
            </section>
            <section className={styles.topBorder}>
                <div className={styles.bold}><i className="fas fa-glass-cheers"></i>  Wesele</div>
                <p>wyprawimy w <a href="http://mcawgerczak.pl/" target="blank" className={styles.link}>Mazurskim Centrum Aktywnego Wypoczynku <strong>Gerczak</strong></a></p>
                <p>Rozpocznie się o godzinie 16:00</p>
            </section>
            <section className={styles.topBorder}>
                <div className={styles.bold}><i className="fas fa-gifts"></i>  Prezenty</div>
                <p>Zamiast kwiatów prosimy o butelki wina lub innego kolorowego alkoholu <i className="fas fa-wine-bottle"></i></p>
            </section>
        </section>
    )
}

export default withAuthentication(Home);
