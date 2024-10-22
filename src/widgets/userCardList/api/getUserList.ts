import { axiosInstance } from '@/shared/lib';
import { API_URL } from '@/shared/util';

export const getUserList = async () => {
  return axiosInstance.get(`${API_URL}/user-list`);
};
