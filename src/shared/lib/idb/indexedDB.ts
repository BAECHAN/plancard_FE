import { openDB } from 'idb';

const DB_NAME = 'authDB';
const STORE_NAME = 'tokens';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const saveRefreshToken = async (token: string) => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
  await db.put(STORE_NAME, token, REFRESH_TOKEN_KEY);
};

export const getLocalRefreshToken = async (): Promise<string | undefined> => {
  const db = await openDB(DB_NAME, 1);
  return await db.get(STORE_NAME, REFRESH_TOKEN_KEY);
};

export const deleteRefreshToken = async () => {
  const db = await openDB(DB_NAME, 1);
  await db.delete(STORE_NAME, REFRESH_TOKEN_KEY);
};
