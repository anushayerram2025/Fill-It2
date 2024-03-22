import authRoutes from './auth.js';
import userRoutes from './users.js';
import formRoutes from './forms.js';

export default [
  { prefix: '/auth', routes: authRoutes },
  { prefix: '/users', routes: userRoutes },
  { prefix: '/forms', routes: formRoutes },
];
