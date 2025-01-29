import { UserInfo } from '@/entities/user/type';
import { API_URL } from '@/shared/const';
import { axiosInstance } from '@/shared/lib';

const updateUserInfo = async (data: UserInfo) => {
  return axiosInstance.put(`${API_URL}/user-info`, data);
};

export default updateUserInfo;
