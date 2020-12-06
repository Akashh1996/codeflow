/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* import React from 'react';
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
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'white',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
