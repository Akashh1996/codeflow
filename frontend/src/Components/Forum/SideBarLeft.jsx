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
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
          <Link to="/" className="tags__all">React</Link>
        </div>
      </aside>
      <aside>
        <div className="wrapper-tags">
          <p>Top Questions</p>
          <p>Question no 1</p>
        </div>
      </aside>

    </>
  );
}
export default DetailHeader;
