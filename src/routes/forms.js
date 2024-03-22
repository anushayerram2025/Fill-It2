import authenticate from '../middlewares/auth.js';
import authorisation from '../middlewares/authorization.js';
import * as formService from '../controllers/forms.js';

export default [
  {
    method: 'get',
    path: '/',
    middlewares: [authenticate, authorisation, formService.getForms],
  },
  {
    method: 'post',
    path: '/',
    middlewares: [authenticate, authorisation, formService.createForm],
  },
  {
    method: 'get',
    path: '/:formId',
    middlewares: [authenticate, formService.getForm],
  },
  {
    method: 'post',
    path: '/:formId',
    middlewares: [authenticate, formService.saveResponse],
  },
  {
    method: 'get',
    path: '/:formId/responses',
    middlewares: [authenticate, authorisation, formService.getResponses],
  },
  {
    method: 'get',
    path: '/:formId/responses/:responseId',
    middlewares: [authenticate, authorisation, formService.getResponse],
  },
  {
    method: 'get',
    path: '/:formId/fill',
    middlewares: [authenticate],
  },
];
