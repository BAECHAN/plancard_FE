import {
  axiosInstance,
  deleteRefreshToken,
  getLocalRefreshToken,
  saveRefreshToken,
} from '@/shared/lib';
import { API_URL } from '@/shared/util';

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post(`${API_URL}/login`, {
    email,
    password,
  });
  await saveRefreshToken(response.data.refreshToken);
  return response;
};

/** logout 시 refreshToken 제거 */
export const logout = async () => {
  const refreshToken = await getLocalRefreshToken();
  if (refreshToken) {
    await axiosInstance.post(`${API_URL}/logout`, { token: refreshToken });
    await deleteRefreshToken();
  }
};

/**
 * @description refreshToken을 indexedDB에 가지고 있다면 서버에 accessToken을 요청합니다.
 */
export const getAccessToken = async () => {
  const refreshToken = await getLocalRefreshToken();

  if (refreshToken) {
    return axiosInstance.post(`${API_URL}/token`, { token: refreshToken });
  }
  throw new Error('No refresh token available');
};
