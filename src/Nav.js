import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    const { settingClass } = props

    return (
        <nav>
            <ul className="navigation">
                <Link to="/">
                    <li onClick={() => settingClass("background")}>Home</li>
                </Link>
                <Link to="/Couple">
                    <li>Bride</li>
                </Link>
                <Link to="/Services">
                    <li onClick={() => settingClass("background services")}>Services</li>
                </Link>
                <Link to="/Place">
                    <li>Place</li>
                </Link>
                <Link to="/Timetable">
                    <li>Timetable</li>
                </Link>





            </ul>
        </nav>
    )
}

export default Nav
