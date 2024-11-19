import axios from 'axios';
import {API_BASE_URL} from '@config/constants';

const userApi = {
  getProfile: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/profile`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default userApi;
