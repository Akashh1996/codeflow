/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import signInWithGoogle from '../../redux/actions/userAction';

function Header({ dispatch, user }) {
  return (

    <>
      {user
      && <img src={user.photoURL} alt="" />}
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

function mapStateToProps(state) {
  debugger;
  return {
    user: state.userReducer.user,
    isLogged: state.userReducer.isLogged,
  };
}
export default connect(mapStateToProps)(Header);
