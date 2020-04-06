import React from 'react';
import style from './Card.module.css';

function Card({ img, alt, title, icon }) {
    return (
        <div className={style.card}>
            <i className={icon}></i><p>{title}</p>
            <img src={img} alt=""></img>
        </div>
    )
}

export default Card
