import * as homeService from '../services/home.js';

export const checkServerHealth = () => {
  return homeService.checkServerHealth();
};

export const checkDatabaseHealth = () => {
  return homeService.checkDatabaseHealth();
};
