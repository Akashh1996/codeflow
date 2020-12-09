/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './answer-form.css';
import postAnswer from '../../../redux/actions/answerAction';

function AddQuestion({ dispatch }) {
  const [answerDescription, setQuestionTitle] = useState('');
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
            value={answerDescription}
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
          <button
            type="button"
            className="button-submit"
            onClick={() => {
              if (!!answerDescription && !!code) {
                dispatch(postAnswer({
                  answerDescription,
                  code,
                }));
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

export default connect()(AddQuestion);
