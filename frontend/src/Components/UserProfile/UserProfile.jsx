/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUserQuestion } from '../../redux/actions/userAction';
import '../Questions/QuestionList/questionList.css';
import '../Detail/detail.css';
import './user-profile.css';

function UserProfile({ dispatch, userQuestion, match }) {
  const [id] = useState(match.params.userId);
  useEffect(() => {
    dispatch(loadUserQuestion(id));
  }, [id]);

  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  return (
    <>
      <section className="user-data">
        <div className=" user-image-wrapper">
          <img src={userLocalStorage?.user.photo} alt="userImage" className="userImage" />
        </div>
        <h2 className="user-name">{userLocalStorage?.user.displayName}</h2>
        <p>{userLocalStorage?.user.email}</p>
      </section>
      {userQuestion && userQuestion?.length > 0 && userQuestion?.map((question) => (
        <section className="question-detail user-question-detail" key={Date.now() * Math.random()}>
          <article className="question-article-detail">
            <div className="question-detail-article__content">
              <div className="content-header">
                <div className="image-wrapper">
                  <Avatar alt="Remy Sharp" src={question?.owner?.photo} />

                </div>
                <div className="content-header__right">
                  <div className="owner-name">
                    {question?.owner?.displayName}
                    {' '}
                  </div>
                  <div className="date-query">
                    Asked at:
                    {' '}
                    <span className="date">{question.date}</span>
                    {' '}
                  </div>
                </div>
              </div>
              <div className="content-question-detail">
                <h2 className="question-title">{question.questionTitle}</h2>
                <div className="question__description">
                  <p>
                    {' '}
                    {question.questionDescription}
                    {' '}
                  </p>
                </div>
                <div className="tag-detail">{question.tag}</div>
              </div>
              <div className="code">
                {question.code}
              </div>
              <div>
                {question.answers.length > 0
                  ? (
                    <div>
                      {question.answers.map((answer) => (
                        <section className="answers-detail" key={Date.now() * Math.random()}>
                          <article className="question-article-detail" key={Date.now() * Math.random()}>
                            <div className="question-detail-article__content" key={Date.now() * Math.random()}>
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
                                    <span className="date">hello</span>
                                    {' '}
                                  </div>
                                </div>
                              </div>

                              <div className="code" key={Date.now() * Math.random()}>
                                {answer.code}
                              </div>
                            </div>
                          </article>
                        </section>
                      ))}
                    </div>
                  ) : (
                    <h1>There are no ans yet</h1>
                  )}
              </div>
            </div>
          </article>
        </section>

      ))}

    </>
  );
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userQuestion: PropTypes.arrayOf(PropTypes.object),
};
UserProfile.defaultProps = {
  userQuestion: [],
};

function mapStateToProps(state) {
  return {
    userQuestion: state.userReducer.userQuestion,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(UserProfile);
