import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Forum from './Components/Forum/Forum';
import Tag from './Components/Forum/Tag';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Forum} />
          <Route path="/:tag" exact component={Tag} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
