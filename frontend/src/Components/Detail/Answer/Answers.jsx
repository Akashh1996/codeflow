/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined'; import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import './answers.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function Answer({ questionDetail }) {
  debugger;
  const classes = useStyles();
  return (
    <>
      {questionDetail && (
        <>
          <section className="answers-detail">
            <article className="question-article-detail" key={questionDetail._id}>
              <div className="question-detail-article__content">
                <div className="content-header">
                  <div className="image-wrapper">
                    <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4" />

                  </div>
                  <div className="content-header__right">
                    <div className="owner-name">
                      akash
                      {' '}
                    </div>
                    <div className="date-query">
                      Asked at:
                      {' '}
                      <span className="date">{questionDetail.date}</span>
                      {' '}
                    </div>
                  </div>
                  <div className="buttons-user-logged">
                    <div>
                      <IconButton aria-label="delete" className={classes.margin}>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton aria-label="delete" className={classes.margin}>
                        <EditOutlinedIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <div className="content-question-detail">
                  <h2 className="question-title">{questionDetail.questionTitle}</h2>
                  <div className="question__description">

                    {questionDetail?.answers.length > 0
                      ? (
                        <p>
                          {' '}
                          {questionDetail?.answers[0].answer}
                          {' '}
                        </p>
                      ) : (
                        <p>Sorry there aint answer</p>
                      )}

                  </div>
                  <p className="tag">{questionDetail.tag}</p>
                </div>
                <div className="code">
                  {questionDetail.code.code}
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
        </>
      )}

    </>
  );
}

Answer.propTypes = {
  questionDetail: PropTypes.shape({
    questionTitle: PropTypes.string.isRequired,
    questionDescription: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf({}).isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    code: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
    date: PropTypes.shape({}),
  }),

};

Answer.defaultProps = {
  questionDetail: undefined,
};
export default Answer;
