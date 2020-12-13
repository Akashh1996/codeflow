/* eslint-disable react/prop-types */
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function Header() {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You Must LogIn To Add A question
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <header>
        <div className="answer-types">
          <Link
            to="/"
          >
            All Questions
          </Link>
          {!userLocalStorage?.user
            ? (
              <Link to="/" onClick={handleClickOpen}>
                Add Question+
              </Link>
            )
            : (
              <Link to="/add-question">Add Question +</Link>
            )}

        </div>

      </header>
    </>

  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,

  };
}
export default connect(mapStateToProps)(Header);
