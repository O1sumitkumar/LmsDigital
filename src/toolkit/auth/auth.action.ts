import authApi from '@api/auth/authApi';
import {createAsyncThunk} from '@reduxjs/toolkit';
import userApi from '@api/user/userApi';

interface CreateMemberPayload {
  email: string;
  password: string;
  // Add your member creation payload type here
  // ... other fields
}

interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export const updateUserAccountAction = createAsyncThunk(
  'auth/updateAccount',
  async (payload: CreateMemberPayload, thunkApi) => {
    try {
      const response = await authApi.createMember(payload);
      if (response?.status === 201) {
        return thunkApi.fulfillWithValue(response.data);
      }
      return thunkApi.rejectWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const updateUserPasswordAction = createAsyncThunk(
  'auth/updatePassword',
  async (payload: ChangePasswordPayload, thunkApi) => {
    try {
      const response = await authApi.changePassword(payload);
      if (response?.status === 200) {
        return thunkApi.fulfillWithValue(response.data);
      }
      return thunkApi.rejectWithValue(response);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  },
);

export const getUserProfileAction = createAsyncThunk(
  'auth/getProfile',
  async (_, thunkApi) => {
    try {
      const response = await userApi.getProfile();
      if (response?.status === 200) {
        return thunkApi.fulfillWithValue(response.data);
      }
      return thunkApi.rejectWithValue(response);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  },
);
