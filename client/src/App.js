import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Doctors from "./components/Doctors"
import Doctor from "./components/Doctor"
import Patient from "./components/Patient"
import NewPatient from "./components/NewPatient"

function App() {
  return (
    <Switch>
      <Route exact path = "/" component = {Doctors} />
      <Route exact path = "/doctors/:id" component = {Doctor} />
      <Route exact path = "/doctors/:id/patients/:patient_id" component = {Patient} />
      <Route exact path = "/patients/new" component = {NewPatient} />
    </Switch>
  );
}

export default App;
