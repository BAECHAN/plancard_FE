import { API_URL } from '@/shared/const';
import { axiosInstance } from '@/shared/lib';

export const getUserList = async () => {
  return axiosInstance.get(`${API_URL}/user-list`);
};
