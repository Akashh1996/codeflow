/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import './answers.css';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../../redux/actions/answerAction';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function Answer({ questionDetail, dispatch }) {
  const classes = useStyles();
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  function canDelete(userId, ownerId) {
    debugger;
    const checkOwner = userId === ownerId;
    return checkOwner;
  }

  return (
    <>

      {questionDetail?.answers?.length > 0 && questionDetail.answers.map((answer) => (
        <section className="answers-detail" key={answer._id}>
          <article className="question-article-detail">
            <div className="question-detail-article__content">
              <div className="content-header">
                <div className="image-wrapper">
                  <Avatar alt="Remy Sharp" src={answer.user.photo} />

                </div>
                <div className="content-header__right">
                  <div className="owner-name">
                    {answer.user.displayName}
                    {' '}
                  </div>
                  <div className="date-query">
                    Posted At:
                    {' '}
                    <span className="date">{questionDetail.date}</span>
                    {' '}
                  </div>
                </div>
                <div className="buttons-user-logged">
                  {
                  canDelete(userLocalStorage?.user._id, answer?.user?._id) && (
                    <>
                      <div>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => dispatch(deleteAnswer(answer._id))}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </div>

                    </>
                  )
                  }

                </div>
              </div>

              <div className="code">
                {answer.code}
              </div>
              <div className="content-footer">
                <div className="content-footer__left">
                  <div className="icon-wrapper">
                    <ThumbUpAltOutlinedIcon />
                    <span>{questionDetail.likes}</span>
                  </div>
                  <div className="icon-wrapper">
                    <ThumbDownOutlinedIcon />
                    <span>{questionDetail.dislikes}</span>
                  </div>
                  <div className="icon-wrapper">
                    <QuestionAnswerOutlinedIcon />
                    <span>{questionDetail.answers?.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      ))}

    </>
  );
}

Answer.propTypes = {
  questionDetail: PropTypes.shape({
    questionTitle: PropTypes.string.isRequired,
    questionDescription: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object).isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    code: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
  }),

};

Answer.defaultProps = {
  questionDetail: undefined,
};

function mapStateToProps(state) {
  return {
    questionDetail: state.questionReducer.questionDetail,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(Answer);
