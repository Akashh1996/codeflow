import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Questions from './Components/Questions/Questions';
import Header from './Components/Header/Header';
import AddQuestion from './Components/AddQuestion/AddQuestion';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Questions} />
          <Route path="/add-question" exact component={AddQuestion} />
          <Route path="/:tag" exact component={Questions} />
          <Route path="/question/:questionId" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
