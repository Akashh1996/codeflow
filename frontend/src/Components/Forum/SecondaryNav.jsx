import React from 'react';
import './secondaryNav.css';
import { Link } from 'react-router-dom';

function SecondaryNav() {
  return (
    <header>
      <div className="answer-types">
        <Link to="/">Recent</Link>
        <Link to="/">No Answer</Link>
        <Link to="/">Most Answered</Link>
        <Link to="/">Most Disliked</Link>
      </div>

      <div className="select-wrapper ">
        <div className="select-options">
          <select name="cars" id="cars" className="any">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

        </div>

      </div>
    </header>
  );
}
export default SecondaryNav;
