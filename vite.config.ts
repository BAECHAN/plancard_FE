import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/', // GitHub Actions에서 환경 변수로 설정 가능
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
