import React from 'react';
import styles from './TimetableIcon.module.css';

function TimetableIcon({ src, alt, time }) {
    return (
        <div className={styles.desc}>
        {time}
        <img src={src} className={styles.icon} alt={alt} />
        </div>
    )
}

export default TimetableIcon;
