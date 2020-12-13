/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import { loadUserQuestion } from '../../redux/actions/userAction';

function UserProfile({ match, dispatch, userQuestion }) {
  const { userId } = match.params;
  useEffect(() => {
    dispatch(loadUserQuestion(userId));
  }, [userQuestion?.length, userId]);

  return (
    <>
      {userQuestion && userQuestion.length && userQuestion.map((questions) => (
        <div>
          {questions.questionDescription}
        </div>
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    userQuestion: state.userReducer.userQuestion,
  };
}
export default connect(mapStateToProps)(UserProfile);
