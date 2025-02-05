import CustomError from './custom-error.js';

class BadRequestError extends CustomError {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}

export default BadRequestError;
