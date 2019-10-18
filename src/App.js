import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FindRepository from './views/FindRepository';
import ListContributors from './views/ListContributors';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={FindRepository} />
          <Route path='/contributors' exact component={ListContributors} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
