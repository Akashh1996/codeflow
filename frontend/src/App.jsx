import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Forum from './Components/Forum/Forum';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
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
