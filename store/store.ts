import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

interface UiState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  currentSection: string;
  setCurrentSection: (sectionName: string) => void;
}

export const useUiStore = createWithEqualityFn<UiState>()(
  devtools(
    // persist(
    (set) => ({
      isSidebarOpen: false,
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      currentSection: '',
      setCurrentSection: (sectionName: string) =>
        set(() => ({ currentSection: sectionName })),
    }),
    {
      name: 'ui-store',
    }
    // )
  ),
  Object.is
);
