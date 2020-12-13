/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import QuestionList from './QuestionList';
import { loadQuestion } from '../../../redux/actions/questionAction';

jest.mock('../../../redux/actions/questionAction');

const buildStore = configureStore([thunk]);

describe('should call loadQuestion if there is no questions', () => {
  let initialState;
  let wrapper;
  let wrapperFactory;
  beforeEach(() => {
    wrapperFactory = (wrapperInitialState) => {
      const store = buildStore(wrapperInitialState);
      store.dispatch = jest.fn();
      return ({ children }) => (
        <Provider store={store}>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </Provider>
      );
    };
  });
  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });
  test('should render the component ', () => {
    initialState = { questionReducer: { } };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList match={{ params: null }} />, { wrapper });

    expect(loadQuestion).toHaveBeenCalled();
  });

  test('should render the component when there is tag on params ', () => {
    initialState = { questionReducer: { } };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList match={{ params: 'react' }} />, { wrapper });

    expect(loadQuestion).toHaveBeenCalled();
  });

  test('should render the component with question title ', () => {
    initialState = {
      questionReducer: {
        displayList: [{
          questionTitle: 'what is react',
        }],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList match={{ params: 'react' }} />, { wrapper });

    expect(document.querySelector('.data-test').textContent).toBe('what is react');
  });

  /*  test('should call the delete Action   ', () => {
    initialState = {
      questionReducer: {
        displayList: [{
          questionTitle: 'what is react',
        }],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList match={{ params: 'react' }} />, { wrapper });

    const buttonElement = document.querySelector('.data-test-delete');

    fireEvent.click(buttonElement);

    expect(deleteQuestion).toHaveBeenCalled();
  }); */
});
