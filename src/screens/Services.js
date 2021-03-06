import React from 'react';
import Card from '../components/Card';
import hall from '../images/4e54c4a950039f2749513cb3f65af175.jpg';
import flowers from '../images/Kwiaty-wesele-Edan-Art-26.jpg';
import music from '../images/Untitleddesign.png';
import img from '../images/3e25e05d2fa9203fa78167531376b40f.jpg';
import styles from './Services.module.css';

function Services() {
    return (
        <div className={styles.services}>
            <Card img={hall} alt="sala weselna" title="SALA WESELNA" icon="fas fa-place-of-worship icon" />
            <Card img={flowers} alt="kwiaty" title="KWIATY" icon="fab fa-pagelines icon" />
            <Card img={music} alt="muzyka" title="MUZYKA" icon="fas fa-music icon" />
            <Card img={img} alt="sala weselna" title="SALA WESELNA" icon="fas fa-heart icon" />
        </div>
    )
}

export default Services
