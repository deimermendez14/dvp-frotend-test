import axios from 'axios';

export const getUsersService = async (username) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${username}`
  );
  return { response };
};
