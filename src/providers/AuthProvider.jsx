'use client';

import { getMe } from '@/lib/api/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (authData) => {
    const {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      user: newUser,
    } = authData;

    localStorage.setItem('accessToken', newAccessToken);
    if (newRefreshToken) {
      localStorage.setItem('refreshToken', newRefreshToken);
    }
    localStorage.setItem('user', JSON.stringify(newUser));

    setAccessToken(newAccessToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');

    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    async function restoreAuth() {
      try {
        const savedToken = localStorage.getItem('accessToken');
        const savedUser = JSON.parse(localStorage.getItem('user') || 'null');

        if (savedToken) {
          const latestUserData = await getMe(savedToken);
          const mergedUser = { ...savedUser, ...latestUserData };

          setAccessToken(savedToken);
          setUser(mergedUser);
          localStorage.setItem('user', JSON.stringify(mergedUser));
        }
      } catch (error) {
        console.error('로그인 정보 복원 실패:', error);
        logout();
      } finally {
        setIsLoading(false);
      }
    }

    restoreAuth();
  }, []);

  const value = {
    user,
    accessToken,
    login,
    logout,
    isLoading,
    isLoggedIn: Boolean(user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 안에서 사용해야 합니다.');
  }
  return context;
}
