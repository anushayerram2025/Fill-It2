import { pingDatabase } from '../database/mongodb.js';

export const checkServerHealth = () => {
  return { status: 'working' };
};

export const checkDatabaseHealth = async () => {
  const databaseWorking = await pingDatabase();
  return { status: databaseWorking ? 'working' : 'error' };
};
