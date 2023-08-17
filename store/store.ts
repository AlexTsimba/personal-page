import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UiState {
  activeLink: string;
  setActiveLink: (newActiveLink: string) => void;
}

export const uiStore = create<UiState>()(
  devtools(
    persist(
      (set) => ({
        activeLink: '/',
        setActiveLink: (newActiveLink) =>
          set(() => ({ activeLink: newActiveLink })),
      }),
      {
        name: 'ui-storage',
      }
    )
  )
);
