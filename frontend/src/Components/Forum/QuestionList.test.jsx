/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import QuestionList from './QuestionList';
import loadQuestion from '../../redux/actions/questionAction';

jest.mock('../../redux/actions/questionAction');
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
          {children}
        </Provider>
      );
    };
  });
  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });
  test('should render the compo', () => {
    initialState = { questionReducer: { } };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList />, { wrapper });

    expect(loadQuestion).toHaveBeenCalled();
  });
  test('should render the name in the component', () => {
    initialState = {
      questionReducer: {
        questionList: [{
          tag: 'React',
        }],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<QuestionList />, { wrapper });

    expect(document.querySelector('.tag').textContent).toBe('React');
  });
});
