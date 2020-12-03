/* eslint-disable react/prop-types */
import React from 'react';
import './sideBarLeft.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function DetailHeader({ tags }) {
  return (
    <>
      <aside>
        <div className="add-question">
          <Link to="/">Add Question +</Link>
        </div>

      </aside>

      <aside className="wrapper-tags-fixed">
        <div className="wrapper-tags">
          {tags.map((tag) => (
            <Link to="/" className="tags__all">{tag}</Link>
          ))}
        </div>

      </aside>
      <aside>
        <div className="wrapper-tags">
          <p>Top Questions</p>
          <p>Question no 1</p>
        </div>
      </aside>

    </>
  );
}

function mapStateToProps({ questionReducer }) {
  return {
    tags: questionReducer.tags,
  };
}

export default connect(mapStateToProps)(DetailHeader);
