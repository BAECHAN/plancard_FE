import { create } from 'zustand';

export type AuthProvider = 'CREDENTIAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';

export interface User {
  readonly email: string;
  name: string;
  profileImageUrl: string;
  nickname: string;
  phoneNumber: string;

  // 필요에 따라 추가 필드 작성
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  provider?: AuthProvider;
  expiresAt?: number;
}

interface AuthState {
  user: User | null;
  auth: Auth | null;

  // 상태 업데이트 메서드
  updateUser: (userUpdates: Partial<User> | User) => void;
  updateAuth: (authUpdates: Partial<Auth> | Auth) => void;

  // 인증 관련 메서드
  refreshTokens: (accessToken: string, refreshToken: string) => void;
  updateAccessToken: (accessToken: string) => void;

  // 로그인/로그아웃 관리
  login: (auth: Auth, user: User) => void;
  loginWithSSO: (
    provider: Exclude<AuthProvider, 'CREDENTIAL'>,
    auth: Omit<Auth, 'provider'>,
    user: User,
  ) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  user: null,
  auth: null,

  // 상태 업데이트 메서드
  updateUser: userUpdates =>
    set(state => ({
      user: state.user
        ? { ...state.user, ...userUpdates }
        : (userUpdates as User),
    })),
  updateAuth: authUpdates =>
    set(state => ({
      auth: state.auth
        ? { ...state.auth, ...authUpdates }
        : (authUpdates as Auth),
    })),

  // 인증 관련 메서드
  refreshTokens: (accessToken, refreshToken) =>
    set(state => ({
      auth: state.auth
        ? {
            ...state.auth,
            accessToken,
            refreshToken,
            expiresAt: Date.now() + 1000 * 60 * 60, // 예: 1시간
          }
        : null,
    })),

  updateAccessToken: accessToken =>
    set(state => ({
      auth: state.auth
        ? {
            ...state.auth,
            accessToken,
            expiresAt: Date.now() + 1000 * 60 * 60, // 예: 1시간
          }
        : null,
    })),

  /**
   * 일반 로그인
   * @param auth - 인증 정보
   * @param user - 유저 정보
   */
  login: (auth, user) =>
    set({
      auth: { ...auth, provider: 'CREDENTIAL', isAuthenticated: true },
      user,
    }),

  /**
   * SSO 로그인
   * @param provider - 인증 제공자
   * @param auth - 인증 정보
   * @param user - 유저 정보
   */
  loginWithSSO: (provider, auth, user) =>
    set({
      auth: { ...auth, provider, isAuthenticated: true },
      user,
    }),

  /**
   * 로그아웃
   */
  logout: () => set({ user: null, auth: null }),
}));

export default useAuthStore;
