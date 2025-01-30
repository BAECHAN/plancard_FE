import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// GitHub 레포지토리 이름을 여기에 직접 입력
const REPOSITORY_NAME = 'plancard_FE';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? `/${REPOSITORY_NAME}/` : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
