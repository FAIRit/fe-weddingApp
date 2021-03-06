import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './screens/Home';
import Services from './screens/Services';
import Guests from './screens/Guests';
import Timetable from './screens/Timetable';
import PasswordForget from './services/PasswordForget';
import Bride from './screens/Bride';
import Groom from './screens/Groom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './services/SignInPage';
import SignUpPage from './services/SingUpPage';
import { withAuthentication } from './components/Session';

function App({ authUser }) {
  const [classname, setClassname] = useState("background")

  return (
    <Router>
      <h1>{`Natalia&Konrad`}</h1>
      <div className={classname}></div>
      <div className="App">
        <Nav settingClass={setClassname} authUser={authUser} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Services" component={Services} />
          <Route path="/Place" component={Guests} />
          <Route path="/Timetable" component={Timetable} />
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/SignIn" component={SignInPage} />
          <Route path="/PasswordForget" component={PasswordForget} />
          <Route path="/Bride" component={Bride} />
          <Route path="/Groom" component={Groom} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
