import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from './components/Session';
import SignOut from './services/SignOut';

const NavNotAuthorized = ({ settingClass }) => (
	<ul className="navigation notAuth">
		<Link to="/">
			<li onClick={() => settingClass('background')}>Home</li>
		</Link>
		<Link to="/Timetable">
			<li>Timetable</li>
		</Link>
	</ul>
);

const NavAuthorized = ({ settingClass }) => (
	<ul className="navigation">
		<Link to="/">
			<li onClick={() => settingClass('background')}>Home</li>
		</Link>
		<Link to="/Couple">
			<li>Bride</li>
		</Link>
		<Link to="/Services">
			<li onClick={() => settingClass('background services')}>Services</li>
		</Link>
		<Link to="/Place">
			<li>Place</li>
		</Link>
		<Link to="/Timetable">
			<li>Timetable</li>
		</Link>
		<Link to="/">
			<li>
				<SignOut />
			</li>
		</Link>
	</ul>
);

function Nav({ settingClass, sticky, authUser }) {
	return (
		<nav className={sticky ? 'sticky' : ''}>
			<AuthUserContext.Consumer>
				{(sticky) =>
					authUser ? (
						<NavAuthorized settingClass={settingClass} />
					) : (
						<NavNotAuthorized settingClass={settingClass} />
					)}
			</AuthUserContext.Consumer>
		</nav>
	);
}

export default Nav;
