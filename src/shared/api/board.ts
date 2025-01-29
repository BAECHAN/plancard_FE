import { API_URL } from '@/shared/const';
import { axiosInstance } from '@/shared/lib';

export const getBoardData = async () => {
  return axiosInstance.get(`${API_URL}/board`);
};
