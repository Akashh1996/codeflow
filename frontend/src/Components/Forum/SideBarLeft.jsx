/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import './sideBarLeft.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterByTag, reset } from '../../redux/actions/questionAction';

function DetailHeader({ tags, dispatch }) {
  function handleClick(tag) {
    dispatch(filterByTag(tag));
  }

  return (

    <>
      <aside>
        <div className="add-question">
          <Link to="/tag">Add Question +</Link>
        </div>

      </aside>

      <aside className="wrapper-tags-fixed">
        <div className="wrapper-tags">
          {tags.map((tag) => (
            <Link
              to={`/${tag}`}
              className="tags__all"
              onClick={() => handleClick(tag)}
            >
              {tag}

            </Link>
          ))}
        </div>

      </aside>
      <aside>
        <div className="wrapper-tags">
          <Link to="/" onClick={() => dispatch(reset())}>Back</Link>
        </div>
      </aside>

    </>
  );
}

function mapStateToProps({ questionReducer }) {
  // eslint-disable-next-line no-debugger
  return {
    tags: questionReducer.tags,
  };
}

export default connect(mapStateToProps)(DetailHeader);
