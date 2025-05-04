import User from '../models/userModel.js';

export const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};
