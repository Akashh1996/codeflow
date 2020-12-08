/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import './add-question.css';
import { connect } from 'react-redux';
import { postQuestion } from '../../redux/actions/questionAction';

function AddQuestion({ dispatch, history }) {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionBody] = useState('');
  const [tag, setQuestionTag] = useState('');
  const [code, setCode] = useState('');

  return (
    <section className="form-section">
      <form>
        <label htmlFor="question-title">
          Question Title
          <input
            type="text"
            onChange={(event) => setQuestionTitle(event.target.value)}
            value={questionTitle}
          />
        </label>
        <label htmlFor="question-description">
          Question Description
          <input
            type="text"
            onChange={(event) => setQuestionBody(event.target.value)}
            value={questionDescription}
          />
        </label>
        <label htmlFor="question-code">
          Your Code
          <textarea
            spellCheck="false"
            type="text"
            onChange={(event) => setCode(event.target.value)}
            value={code}
          />
        </label>
        <label htmlFor="question-tag">
          Question tag
          <input
            type="text"
            onChange={(event) => setQuestionTag(event.target.value)}
            value={tag}
          />
        </label>
        <div>
          <button
            type="button"
            className="button-submit"
            onClick={() => {
              if (!!questionTitle && !!questionDescription && !!code && !!tag) {
                dispatch(postQuestion({
                  questionTitle,
                  questionDescription,
                  tag,
                  code: {
                    code,
                  },
                }));
                setQuestionTitle('');
                setQuestionBody('');
                setQuestionTag('');
                setCode('');
                history.push('/');
              } else {
                alert('fill the form');
              }
            }}
          >
            Submit
          </button>

        </div>

      </form>

    </section>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer?.user?.user,

  };
}
export default connect(mapStateToProps)(AddQuestion);
