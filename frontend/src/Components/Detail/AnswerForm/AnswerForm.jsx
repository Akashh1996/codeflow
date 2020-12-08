/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './answer-form.css';

function AddQuestion() {
  const [questionTitle, setQuestionTitle] = useState('');
  const [code, setCode] = useState('');

  return (
    <section className="answer-form-section">
      <form className="answer-form">
        <div className="add-answer"><h2>Add Your Answer</h2></div>
        <label htmlFor="answer-description">
          Answer Description
          <input
            type="text"
            onChange={(event) => setQuestionTitle(event.target.value)}
            value={questionTitle}
          />
        </label>
        <label htmlFor="answer-code">
          Your Code
          <textarea
            spellCheck="false"
            type="text"
            onChange={(event) => setCode(event.target.value)}
            value={code}
          />
        </label>
        <div>
          {/*    <button
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

 */}
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
