import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Questions from './Components/Questions/Questions';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Questions} />
          <Route path="/:tag" exact component={Questions} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
