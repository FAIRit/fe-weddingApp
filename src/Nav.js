import React from 'react';
import { Link } from 'react-router-dom'


function Nav({ settingClass, sticky, authUser }) {
    return (<nav className={sticky ? "sticky" : ""}>
        {authUser ? NavAuthorized : NavNotAuthorized}
    </nav>)
}

const NavNotAuthorized = (props) => (
    <ul className="navigation">
        <Link to="/">
            <li onClick={() => props.settingClass("background")}>Home</li>
        </Link>
        <Link to="/Timetable">
            <li>Timetable</li>
        </Link>
    </ul>
)

const NavAuthorized = (props) => (
    <ul className="navigation">
        <Link to="/">
            <li onClick={() => props.settingClass("background")}>Home</li>
        </Link>
        <Link to="/Couple">
            <li>Bride</li>
        </Link>
        <Link to="/Services">
            <li onClick={() => props.settingClass("background services")}>Services</li>
        </Link>
        <Link to="/Place">
            <li>Place</li>
        </Link>
        <Link to="/Timetable">
            <li>Timetable</li>
        </Link>
    </ul>
)

export default Nav;
