/* eslint-disable react/prop-types */
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header() {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  return (
    <header>
      <div className="answer-types">
        <Link to="/">
          All Questions
        </Link>
        {!userLocalStorage?.user
          ? <Link to="/">You need to loge in before</Link>
          : <Link to="/add-question">Add Question +</Link>}
      </div>

      <div className="select-wrapper ">
        <div className="select-options">
          <select name="cars" id="cars" className="any">
            <option value="volvo" className="no-answer">Volvo</option>
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
