import * as userService from '../services/user.js';

export var getAllUsers = async () => {
  const users = await userService.getAllUsers();
  return users;
};

export var getUser = async (req) => {
  const user = await userService.getUser(req.params);
  return user;
};

export async function getMe(req) {
  console.log("Not auth");
  const USER = req.user;
  const user = await userService.getUser(USER);
  return user;
}

export async function UpdateUser(req) {
  const user = await userService.UpdateUser(req);
  return user;
}
