import UnauthorizedError from '../errors/unauthorized.js';
import { check } from '../repositories/forms.js';

//Responses can be accessed by the who gave response or who created the form
export default async function AccessResponseAuth(req) {
  const responseId = req.params.responseId;
  const userId = req.user;
  const result = await check(responseId, userId);
  if (result) {
    return true;
  } else {
    UnauthorizedError();
  }
}

//edit...The user must have already edited otherwise just open the form
