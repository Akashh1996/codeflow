import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from './userAction';
import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('User Actions', () => {
    let mockData;
    let mockError;
    let store;
    beforeEach(() => {
      store = mockStore();
      mockData = { data: 'userData' };
      mockError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    describe(('Add User'), () => {
      test('should dispatch the correct action with success', async () => {
        axios.post = jest.fn().mockResolvedValueOnce(mockData);
        const newUser = 'userData';
        const expectedAction = [{
          type: actionTypes.ADD_USER,
          newUser,
        }];

        await store.dispatch(actions.addUser());

        expect(store.getActions()).toEqual(expectedAction);
      });
      test('should dispatch the correct action with error', async () => {
        axios.post = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.ADD_USER_ERROR,
          error,
        }];

        await store.dispatch(actions.addUser());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
