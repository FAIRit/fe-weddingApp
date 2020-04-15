import React from 'react';
import TimetableIcon from '../components/TimetableIcon';
import styles from './Timetable.module.css';
import castle from '../Icons/disneyland-castle.svg';
import invitation from '../Icons/love-and-romance.svg';
import bed from '../Icons/bed.svg';
import thankyou from '../Icons/thank-you.svg';
import dress from '../Icons/wedding-dress.svg';
import guests from '../Icons/guest.svg';
import rings from '../Icons/diamond.svg';
import dance from '../Icons/newlyweds.svg';
import calendar from '../Icons/calendar.svg';
import party from '../Icons/fun.svg';

function Timetable() {
    return (
        <section>
            <div className={styles.timetable}>
                <div className={styles.leftSide}>
                    <TimetableIcon src={castle} alt="castle" time="12 miesięcy" />
                    <TimetableIcon src={dress} alt="dress" time="6-9 miesięcy" />
                    <TimetableIcon src={invitation} alt="invitation" time="3 miesiące" />
                    <TimetableIcon src={bed} alt="bed" time="1 miesiąc" />
                    <TimetableIcon src={thankyou} alt="thankyou" time="1-2 dni" />
                </div>
                <div className={styles.rightSide}>
                    <TimetableIcon src={guests} alt="guests" time="10-11 miesięcy" />
                    <TimetableIcon src={rings} alt="rings" time="4-5 miesięcy" />
                    <TimetableIcon src={dance} alt="first dance" time="2 miesiące" />
                    <TimetableIcon src={calendar} alt="timetable" time="1 tydzień" />

                </div>
            </div>
            <div className={styles.weddingDay}>
                <p>
                    Pamiętajcie, że to Wasz dzień. Dziś bawcie się najlepiej na świecie!
                </p>
                <img src={party} alt="party" className={styles.partyIcon} />
            </div>
            <div className={styles.freeIcons}>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </section>
    )
}

export default Timetable
