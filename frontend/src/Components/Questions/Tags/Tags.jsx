/* eslint-disable react/prop-types */
import React from 'react';
import './tags.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset } from '../../../redux/actions/questionAction';

function Tags({ tags, dispatch }) {
  /*  const [userPete, setUserPete] = useState(JSON.parse(window.localStorage.getItem('user')));

  useEffect(() => {
    setUserPete(JSON.parse(window.localStorage.getItem('user')));
  }, [user]); */

  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  return (

    <>
      <aside>
        <div className="add-question">
          {!userLocalStorage?.user
            ? <Link to="/">You need to loge in before</Link>
            : <Link to="/add-question">Add Question +</Link>}
        </div>

      </aside>

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
      <aside>
        <div className="wrapper-tags">
          <Link to="/" onClick={() => dispatch(reset())}>All</Link>
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
