/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */

import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import signInWithGoogle, { logOut } from '../../redux/actions/userAction';
import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(0),
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

function Header({ dispatch, user }) {
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
        <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" className="logo-home">
              <img src="https://trello-attachments.s3.amazonaws.com/5f9fe516582bea5ce01d06b2/5f9fe5242167b873b8f1f631/0c1019756f0969e79917b92aeebebab7/Screenshot_(264).png" alt="logo" className="logo" />
            </Link>

            {!user ? (
              <Button
                type="button"
                color="inherit"
                className={classes.signUp}
                onClick={(event) => {
                  event.preventDefault();
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
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(logOut());
                }}
              >
                Sign Out
              </Button>
            )}

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
  debugger;
  return {
    user: state.userReducer.user,
    isLogged: state.userReducer.isLogged,
  };
}
export default connect(mapStateToProps)(Header);
