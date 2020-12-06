import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Forum from './Components/Forum/Forum';
import Detail from './Components/Detail/Detail';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Forum} />
          <Route path="/:tag" exact component={Forum} />
          <Route path="/question/:questionId" exact component={Detail} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
