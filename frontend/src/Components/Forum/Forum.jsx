/* eslint-disable no-use-before-define */
import React from 'react';
import QuestionList from './QuestionList';
import SecondaryNav from './SecondaryNav';
import SideBarLeft from './SideBarLeft';
import './forum.css';

function Forum() {
  return (
    <main>
      <div className="side-tag">
        <SideBarLeft />
      </div>
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
export default Forum;
