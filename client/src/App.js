import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Examples from './pages/Examples';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/examples" component={Examples} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
