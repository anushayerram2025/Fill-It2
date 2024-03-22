import * as userService from '../repositories/user.js';

export const getAllUsers = async () => {
  return await userService.getAllUsers();
};

export async function getUser(user) {
  console.log(user);
  const userId = user.email;
  console.log("Before")
  const result = await userService.getUser(userId);
  console.log("After");
  console.log(result);
  return result;
}

export async function UpdateUser(req) {
  const { userid, fullName, email, password } = req.body;
  const user = await userService.UpdateUser(userid, fullName, email, password);
  return user;
}
