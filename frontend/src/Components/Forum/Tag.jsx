/* eslint-disable no-use-before-define */
import React from 'react';
import QuestionList from './QuestionList';
import SideBarLeft from './SideBarLeft';
import './forum.css';

function Forum() {
  return (

    <main>
      <div className="main-content">
        <QuestionList />
      </div>
      <div className="side-tag">
        <SideBarLeft />
      </div>
    </main>

  );
}
export default Forum;
