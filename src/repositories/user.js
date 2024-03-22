import { getCollection } from '../database/mongodb.js';

const users_db = await getCollection('users');

export async function getAllUsers() {
  await users_db.insertOne({ name: 'Anusha', password: '123455', age: '21' });
  const users = await users_db.find({}).toArray();
  console.log('IAM IN REPO');
  console.log(users);
  return users;
}

export async function getUser(userEmail) {
  const user = await users_db.find({ email: userEmail }).toArray();
  console.log(user);
  return user;
}

export async function UpdateUser(userid, fullname, email, password) {
  const pass = password;
  var collection = await getCollection('users');
  const query = { UserId: userid };
  console.log(collection, pass);

  const new_values = { $set: { FullName: fullname, Email: email, Password: pass } };
  const u = await collection.updateOne(query, new_values);
  console.log(u);
  return u;
}

export const getUserByEmail = async (email) => {
  const userCollection = await getCollection('users');
  return userCollection.findOne({ email });
};

export const createUser = async (user) => {
  const userCollection = await getCollection('users');
  const result = await userCollection.insertOne(user);
  return result.insertedId;
};
