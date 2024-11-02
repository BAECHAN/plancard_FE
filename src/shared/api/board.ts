import { axiosInstance } from '@/shared/lib';
import { API_URL } from '@/shared/util';

export const getBoardData = async () => {
  return axiosInstance.get(`${API_URL}/board`);
};
