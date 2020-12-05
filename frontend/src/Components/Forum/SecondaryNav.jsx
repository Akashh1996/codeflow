/* eslint-disable react/prop-types */
import React from 'react';
import './secondaryNav.css';
import { Link } from 'react-router-dom';
import { filterByNoAnswer } from '../../redux/actions/questionAction';

function SecondaryNav({ dispatch }) {
  return (
    <header>
      <div className="answer-types">
        <Link to="/">Recent</Link>
        <Link
          to="/"
          onClick={() => dispatch(filterByNoAnswer())}
        >
          No Answer

        </Link>
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
