import axios from 'axios';
import {API_BASE_URL} from '@config/constants';

const authApi = {
  createMember: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/create-member`,
        payload,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },

  changePassword: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/change-password`,
        payload,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authApi;
