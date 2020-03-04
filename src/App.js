import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './screens/Home';
import HeShe from './screens/HeShe';
import Services from './screens/Services';
import WeddingHall from './screens/WeddingHall';
import Timetable from './screens/Timetable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './services/SignInPage';
import SignUpPage from './services/SingUpPage';
import PasswordForget from './services/PasswordForget';

function App() {
  const [classname, setClassname] = useState("background")

  return (
    <Router>
      <h1>Natalia&Konrad</h1>


      <div className={classname}></div>
      <div className="App">

        <Nav settingClass={setClassname} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Couple" component={HeShe} />
          <Route path="/Services" component={Services} />
          <Route path="/Place" component={WeddingHall} />
          <Route path="/Timetable" component={Timetable} />
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/SignIn" component={SignInPage} />
          {/* <Route path="/PasswordForget" component={PasswordForget} /> */}
        </Switch>
      </div>


    </Router>

  );
}

export default App;
