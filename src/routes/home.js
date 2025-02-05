import * as homeControllers from '../controllers/home.js';

export default [
  {
    method: 'get',
    path: '/health-check/server',
    middlewares: [homeControllers.checkServerHealth],
  },
  {
    method: 'get',
    path: '/health-check/database',
    middlewares: [homeControllers.checkDatabaseHealth],
  },
];
