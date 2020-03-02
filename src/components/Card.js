import React from 'react';
import style from './Card.module.css';
import img from '../images/4e54c4a950039f2749513cb3f65af175.jpg'

function Card() {
    return (
        <div className={style.card}>
            <i class="fas fa-holly-berry"></i><p>dekoracje</p>
            <img src={img}></img>
        </div>
    )
}

export default Card
