/* eslint-disable react/prop-types */
import React from 'react';
import './tags.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Tags({ tags }) {
  return (
    <>

      <aside className="wrapper-tags-fixed">
        <div className="wrapper-tags">
          {tags.map((tag) => (
            <Link
              to={`/${tag}`}
              className="tags__all"
              key={tag}
            >
              {tag}

            </Link>
          ))}
        </div>

      </aside>

    </>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.questionReducer.tags,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(Tags);
