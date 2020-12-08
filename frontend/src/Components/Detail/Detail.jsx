/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined'; import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { loadQuestionDetail } from '../../redux/actions/questionAction';
import Answer from './Answer/Answers';
import AnswerForm from './AnswerForm/AnswerForm';
import '../Questions/QuestionList/questionList.css';
import './detail.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function Detail({ dispatch, questionDetail, match }) {
  const [id] = useState(match.params.questionId);
  const classes = useStyles();
  useEffect(() => {
    if (!questionDetail || id !== questionDetail._id) {
      dispatch(loadQuestionDetail(id));
    }
  }, []);
  return (
    <>
      {questionDetail && (
        <>
          <section className="question-detail">
            <article className="question-article-detail" key={questionDetail._id}>
              <div className="question-detail-article__content">
                <div className="content-header">
                  <div className="image-wrapper">
                    <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4" />

                  </div>
                  <div className="content-header__right">
                    <div className="owner-name">
                      akash
                      {' '}
                    </div>
                    <div className="date-query">
                      Asked at:
                      {' '}
                      <span className="date">{questionDetail.date}</span>
                      {' '}
                    </div>
                  </div>
                  <div className="buttons-user-logged">
                    <div>
                      <IconButton aria-label="delete" className={classes.margin}>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton aria-label="delete" className={classes.margin}>
                        <EditOutlinedIcon />
                      </IconButton>
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
                  {questionDetail.code.code}
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
        </>
      )}
      <div className="answers"><h1 className="answer-title">Answers</h1></div>
      <section className="all-answers">
        <Answer questionDetail={questionDetail} />
      </section>
      <section className="answer-form">
        <AnswerForm />
      </section>
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
    code: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
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
  };
}

export default connect(mapStateToProps)(Detail);
