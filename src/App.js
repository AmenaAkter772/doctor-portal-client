import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import Appointment from './pages/appointment/Appointment';
import Login from './components/login/login/Login';
import Dashboard from './components/dashboard/dashboard/Dashboard';
import AllPatients from './components/allPatients/allPatients/AllPatients';
import AddDoctor from './components/addDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/login/privateRoute/PrivateRoute'


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/home" component={Home} />
          <Route path ="/appointment" component={Appointment} />
          <PrivateRoute path ="/dashboard"><Dashboard /></PrivateRoute>
          <Route path ="/allPatients" component={AllPatients} />
          <Route path ="/addDoctor" component={AddDoctor} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
