import axios from "axios";

export const getUserInformation = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);

  return { response };
};
