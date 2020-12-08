const Question = require('../models/questionsModel');
const questionController = require('./questionController')(Question);

jest.mock('../models/questionModel');

describe('QuestionController', () => {
  let res;
  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
  });
  describe('getMethod', () => {
    test('should give error when called res.send function', () => {
      Question.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      questionController.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send data when called res.json function', () => {
      Question.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      questionController.getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('deleteMethod', () => {
    let req;
    beforeEach(() => {
      req = {
        body: '_id',
      };
    });
    test('should give error when called res.send function', () => {
      Question.findByIdAndRemove = jest.fn().mockImplementationOnce((query, query1, callback) => {
        callback(true, {});
      });

      questionController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send data when called res.json function', () => {
      Question.findByIdAndRemove = jest.fn().mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });

      questionController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('putMethod', () => {
    let req;
    beforeEach(() => {
      req = {
        body: '_id',
      };
    });
    test('should give error when called res.send function', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, query1, callback) => {
        callback(true, {});
      });

      questionController.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send data when called res.json function', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });

      questionController.putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('postMethod', () => {
    let req;
    beforeEach(() => {
      req = {
        body: {},
      };
    });
    test('should give error when called res.send function', () => {
      Question.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      questionController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send data when called res.json function', () => {
      Question.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      questionController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
