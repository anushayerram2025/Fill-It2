import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const developmentEnvs = require('../../configs/development.json');
export const get = (key) => {
  return developmentEnvs[key];
};
