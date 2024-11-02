import { UserInfo } from '@/entities/user';
import { axiosInstance } from '@/shared/lib';
import { API_URL } from '@/shared/util';

const updateUserInfo = async (data: UserInfo) => {
  return axiosInstance.put(`${API_URL}/user-info`, data);
};

export default updateUserInfo;
