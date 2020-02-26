import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="navigation">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Couple">
                    <li>Bride</li>
                </Link>
                <Link to="/Services">
                    <li>Services</li>
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
