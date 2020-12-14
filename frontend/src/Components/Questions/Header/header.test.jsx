/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SecondHeader from './SecondHeader';

const buildStore = configureStore([thunk]);

describe('SecondHeader', () => {
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

  test('should render the component with text of button', () => {
    initialState = { userReducer: { user: null } };
    wrapper = wrapperFactory(initialState);

    render(<SecondHeader />, { wrapper });
    expect(document.querySelector('#add-question').textContent).toBe('Add Question+');
  });

  test('should render the component with text of button when there is user', () => {
    initialState = { userReducer: { user: null } };

    const userMock = {
      user: {
        _id: 'someId',
      },
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<SecondHeader />, { wrapper });

    expect(document.querySelector('.add-question-logged').textContent).toBe('#Add Question +');
  });
});
