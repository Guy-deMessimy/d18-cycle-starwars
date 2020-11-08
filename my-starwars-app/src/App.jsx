import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:characterId" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}

export default App;
