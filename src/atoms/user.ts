import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface User {
  id: string;
  name: string;
  email: string;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
