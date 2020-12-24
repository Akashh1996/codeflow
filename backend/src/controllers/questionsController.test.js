const Question = require('../models/questionsModel');
const questionsController = require('./questionsController')(Question);

describe('QuestionsController', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    req = {
      query: {
        tag: 'react',
      },
    };
  });

  describe('find question', () => {
    test('should send error when send function is called', () => {
      Question.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {});
            }),
          }),
        }),
      });
      questionsController.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
