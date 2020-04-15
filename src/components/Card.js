import React from 'react';
import style from './Card.module.css';

function Card({ img, alt, title, icon }) {
    return (
        <div className={style.card}>
            <span className={style.icon}>
                <i className={icon}></i>
                <p className={style.title}>{title}</p>
                </span>
            <img src={img} alt={alt} className={style.img}></img>
        </div>
    )
}

export default Card
