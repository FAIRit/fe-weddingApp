import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from './components/Session';



const NavNotAuthorized = (settingClass) => (
    <ul className="navigation">
        <Link to="/">
            <li onClick={() => settingClass("background")}>Home</li>
        </Link>
        <Link to="/Timetable">
            <li>Timetable</li>
        </Link>
    </ul>
)

const NavAuthorized = (settingClass) => (
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
)

function Nav({ settingClass, sticky, authUser }){
    return (
        <AuthUserContext.Consumer>
            <nav className={sticky ? "sticky" : ""}>
                {authUser ? NavAuthorized(settingClass) : NavNotAuthorized(settingClass)}
            </nav>
        </AuthUserContext.Consumer>

    )
}

export default Nav;
