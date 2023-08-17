import { createWithEqualityFn } from 'zustand/traditional';
import { devtools, persist } from 'zustand/middleware';

interface UiState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUiStore = createWithEqualityFn<UiState>()(
  devtools(
    persist(
      (set) => ({
        isSidebarOpen: false,
        toggleSidebar: () =>
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      }),
      {
        name: 'ui-store',
      }
    )
  ),
  Object.is
);
