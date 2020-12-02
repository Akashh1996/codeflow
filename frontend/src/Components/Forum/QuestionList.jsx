/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './questionList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import loadQuestion from '../../redux/actions/questionAction';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },

}));

function QuestionList({ dispatch, questionList }) {
  const classes = useStyles();
  useEffect(() => {
    if (!questionList || !questionList?.length) { dispatch(loadQuestion()); }
  }, [questionList?.length]);

  return (
    <>
      {questionList && questionList.length > 0 && questionList.map((question, index) => (
        <article className="question-article" key={index}>
          <div className="question-article__content">
            <div className="content-header">
              <div className="image-wrapper">
                <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4" />

              </div>
              <div className="content-header__right">
                <div>
                  akash
                  {' '}
                </div>
                <div>
                  Asked at:
                  {' '}
                  <span>123</span>
                  {' '}
                </div>
              </div>
              <div className="buttons-user-logged">
                <div>
                  <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <IconButton aria-label="delete" className={classes.margin}>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div className="content-question">
              <h2><Link href="www.google.com">{question.questionTitle}</Link></h2>
              <p className="question__description">
                {' '}
                {question.questionDescription}
                {' '}
              </p>
              <p className="tag">React</p>
            </div>
            <div className="content-footer">
              <div className="content-footer__right">
                <div className="icon__thumbUp">
                  <span className="icons">
                    <ThumbUpAltOutlinedIcon />
                    {question.likes}
                  </span>

                  <span />
                </div>
                <div className="icon__thumbDown">
                  <span className="icons">
                    <ThumbDownOutlinedIcon />
                    {' '}
                    {question.dislikes}
                  </span>
                </div>
                <div className="icon__comment">
                  {' '}
                  <span className="icons">
                    <ChatBubbleOutlineOutlinedIcon />
                  </span>
                  {' '}
                  <span>Answer</span>
                  {' '}
                  {/* <span>5</span> */}
                </div>
              </div>
              <div className="content-footer__left">
                <Button variant="contained" color="primary">
                  Primary
                </Button>

              </div>
            </div>
          </div>
        </article>

      ))}
    </>
  );
}

QuestionList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.object),
};
QuestionList.defaultProps = {
  questionList: [],
};

function mapStateToProps(state) {
  return {
    questionList: state.questionReducer.questionList,
  };
}

export default connect(mapStateToProps)(QuestionList);
