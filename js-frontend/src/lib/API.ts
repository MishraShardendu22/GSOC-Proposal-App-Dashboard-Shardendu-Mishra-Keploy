import { User } from './Types';
import { axiosInstance } from '@/util/axiosInstance';

const registerUserMutation = async (user: User) => {
  const res = await axiosInstance.post('/user/register', {
    name: user.name,
    email: user.email,
    image: user.image,
  });
  return res.data;
};

const RegisterUser = async (user: User) => {
  try {
    return await registerUserMutation(user);
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export { RegisterUser };