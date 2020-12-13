/* eslint-disable no-use-before-define */
import React from 'react';
import QuestionList from './QuestionList/QuestionList';
import SecondaryNav from './Header/SecondHeader';
import SideBarLeft from './Tags/Tags';
import './questions.css';

function Questions() {
  return (

    <main>
      <div className="main-content">
        <SecondaryNav />
        <QuestionList />
      </div>
      <div className="side-tag">
        <SideBarLeft />
      </div>
    </main>

  );
}
export default Questions;
