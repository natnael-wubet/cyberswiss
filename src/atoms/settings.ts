import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'de' | 'fr' | 'it';

export interface Settings {
  theme: Theme;
  language: Language;
  notifications: boolean;
  soundEnabled: boolean;
}

export const settingsState = atom<Settings>({
  key: 'settingsState',
  default: {
    theme: 'system',
    language: 'en',
    notifications: true,
    soundEnabled: true,
  },
  effects_UNSTABLE: [persistAtom],
});
