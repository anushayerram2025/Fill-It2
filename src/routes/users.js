import * as userController from '../controllers/user.js';
import authenticate from '../middlewares/auth.js';

export default [
  {
    method: 'get',
    path: '/',
    middlewares: [authenticate(), userController.getAllUsers],
  },

  {
    method: 'get',
    path: '/me',
    middlewares: [authenticate(), userController.getMe],
  },

  {
    method: 'get',
    path: '/:userId',
    middlewares: [authenticate(), userController.getUser],
  },

  {
    method: 'patch',
    path: '/:userId',
    middlewares: [authenticate(), userController.UpdateUser],
  },
];
