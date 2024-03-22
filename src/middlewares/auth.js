import UnauthenticatedError from '../errors/unauthenticated.js';
import * as jwt from '../utils/jwt.js';

export default function () {
  return async function (req, _res, next) {
    const user = await getLoggedInUser(req);

    if (!user) {
      throw new UnauthenticatedError('User is not logged in.');
    }

    req.user = user;
    next();
  };
}

const getLoggedInUser = async (req) => {
  const authorizationHeader = req.get('authorization');
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split(' ')[1];
    try {
      const payload = jwt.verifyToken(token);
      return payload;
    } catch (error) {
      return null;
    }
  }
  return null;
};
