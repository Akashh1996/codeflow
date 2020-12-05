/* eslint-disable react/prop-types */
import React from 'react';
import './secondaryNav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterByNoAnswer } from '../../redux/actions/questionAction';

function SecondaryNav({ dispatch }) {
  function handleClick() {
    dispatch(filterByNoAnswer());
  }
  return (
    <header>
      <div className="answer-types">
        <Link
          to="/"
          onClick={() => handleClick()}
        >
          No Answer
        </Link>

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
export default connect()(SecondaryNav);
