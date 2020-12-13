/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadQuestionDetail } from '../../redux/actions/questionAction';
import Answer from './Answer/Answers';
import AnswerForm from './AnswerForm/AnswerForm';
import '../Questions/QuestionList/questionList.css';
import './detail.css';

function Detail({ dispatch, questionDetail, match }) {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  const [id] = useState(match.params.questionId);
  useEffect(() => {
    dispatch(loadQuestionDetail(id));
  }, [id]);

  return (
    <>
      {questionDetail && (
        <>
          <section className="question-detail" key={questionDetail._id}>
            <article className="question-article-detail" key={questionDetail._id}>
              <div className="question-detail-article__content">
                <div className="content-header">
                  <div className="image-wrapper">
                    <Avatar alt="Remy Sharp" src={questionDetail?.owner?.photo} />

                  </div>
                  <div className="content-header__right">
                    <div className="owner-name">
                      {questionDetail?.owner?.displayName}
                      {' '}
                    </div>
                    <div className="date-query">
                      Asked at:
                      {' '}
                      <span className="date">{questionDetail.date}</span>
                      {' '}
                    </div>
                  </div>
                </div>
                <div className="content-question-detail">
                  <h2 className="question-title">{questionDetail.questionTitle}</h2>
                  <div className="question__description">
                    <p>
                      {' '}
                      {questionDetail.questionDescription}
                      {' '}
                    </p>
                  </div>
                  <Link to={`/${questionDetail.tag}`} className="tag-detail">{questionDetail.tag}</Link>
                </div>
                <div className="code">
                  {questionDetail.code}
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
          <div className="answers"><h1 className="answer-title">Answers</h1></div>
          <Answer key={Date.now()} />
          {!userLocalStorage?.user ? (
            <h1>login</h1>
          ) : (
            <section className="answer-form">
              <AnswerForm />
            </section>
          )}
        </>
      )}

    </>
  );
}

Detail.propTypes = {
  questionDetail: PropTypes.shape({
    questionTitle: PropTypes.string.isRequired,
    questionDescription: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object).isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

Detail.defaultProps = {
  questionDetail: undefined,
};

function mapStateToProps(state) {
  return {
    questionDetail: state.questionReducer.questionDetail,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(Detail);
