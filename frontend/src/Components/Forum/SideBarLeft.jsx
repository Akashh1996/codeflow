import React from 'react';
import './sideBarLeft.css';
import { Link } from 'react-router-dom';

function DetailHeader() {
  return (
    <>
      <aside>
        <div className="add-question">
          <Link to="/">Add Question +</Link>
        </div>

      </aside>

      <aside className="wrapper-tags-fixed">
        <div className="wrapper-tags">
          <p className="tags__all">React</p>
          <p className="tags__all">React</p>
          <p className="tags__all">React</p>
          <p className="tags__all">React</p>
          <p className="tags__all">React</p>
          <p className="tags__all">React</p>
        </div>
      </aside>

      <aside>
        <p>akash</p>
        <p>akash</p>
        <p>akash</p>
        <p>akash</p>
        <p>akash</p>
        <p>akash</p>
      </aside>

    </>
  );
}
export default DetailHeader;
