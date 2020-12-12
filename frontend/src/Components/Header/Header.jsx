/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, signInWithGoogle, saveUserFromLocalStorage } from '../../redux/actions/userAction';
import './header.css';
import { reset } from '../../redux/actions/questionAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    padding: theme.spacing(0),

  },
  title: {
    flexGrow: 1,

  },
  AppBar: {
    backgroundColor: 'white',
    color: '#0077CC',
    fontSize: 10,
  },
  signUp: {
    marginRight: theme.spacing(4),

  },
}));

function Header({ dispatch }) {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  useEffect(() => {
    dispatch(saveUserFromLocalStorage(userLocalStorage?.user));
  }, []);

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon
                className="menu-button"
                style={{
                  width: '45', height: '40px', marginBottom: '6px',
                }}
              />
            </IconButton>
            <Link to="/" className="logo-home" onClick={() => dispatch(reset())}>
              <img src="https://trello-attachments.s3.amazonaws.com/5f9fe516582bea5ce01d06b2/5f9fe5242167b873b8f1f631/0c1019756f0969e79917b92aeebebab7/Screenshot_(264).png" alt="logo" className="logo" />
            </Link>

            {!userLocalStorage?.user ? (
              <Button
                type="button"
                color="inherit"
                className={classes.signUp}
                onClick={() => {
                  dispatch(signInWithGoogle());
                }}
              >
                Sign in
              </Button>
            ) : (
              <Button
                type="button"
                color="inherit"
                className={classes.signUp}
                onClick={() => dispatch(signOut())}
              >
                Sign Out
              </Button>
            )}
            <div><h1>{userLocalStorage?.user.displayName}</h1></div>
          </Toolbar>
        </AppBar>
      </div>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div>akash</div>
      </SwipeableDrawer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}
export default connect(mapStateToProps)(Header);
