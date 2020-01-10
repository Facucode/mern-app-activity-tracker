import React from 'react';
//Brouwser router premite crear rutas, url para la app
//Route sirve para especificar las rutas
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import CreateActivity from './components/CreateActivity'
import ActivitiesList from './components/ActivitiesList'
function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
      <Route path="/activities" component={ActivitiesList}/>
      <Route path="/editactivity/:id" component={CreateActivity}/>
      <Route path="/createactivity" component={CreateActivity}/>
      </div>

      </Router>
  );
}
// path="/"  cuando visite la ruta inicial de
// la app que muestre el componente x
// exact para que muestre solo esa ruta
export default App;
