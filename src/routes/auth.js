import * as authController from '../controllers/auth.js';

export default [
  {
    method: 'get',
    path: '/login/google',
    middlewares: [authController.loginWithGoogle],
  },
  {
    method: 'get',
    path: '/handle/google-response',
    middlewares: [authController.handleGoogleResponse],
  },
];
