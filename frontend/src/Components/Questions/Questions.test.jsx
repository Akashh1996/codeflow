/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Questions from './Questions';

const buildStore = configureStore([thunk]);

describe('Question', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render no-answer text', () => {
    const initialState = { questionReducer: { tags: [] } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Questions />, { wrapper: Wrapper });
    const noAnswer = document.querySelector('.no-answer');

    expect(noAnswer).toBeInTheDocument();
  });
});
