/* eslint-disable react/prop-types */
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterByNoAnswer } from '../../../redux/actions/questionAction';

function Header({ dispatch }) {
  return (
    <header>
      <div className="answer-types">
        <Link
          to="/"
          onClick={() => dispatch(filterByNoAnswer())}
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
export default connect()(Header);
