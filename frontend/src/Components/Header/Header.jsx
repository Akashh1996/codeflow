/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../redux/actions/questionAction';

function Header({ dispatch }) {
  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          dispatch(signInWithGoogle());
        }}
      >
        Sign in

      </button>
    </>

  );
}
export default connect()(Header);
