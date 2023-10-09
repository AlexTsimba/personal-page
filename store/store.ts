import { createWithEqualityFn } from 'zustand/traditional';
// import { devtools } from 'zustand/middleware';

interface UiState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  currentSection: string;
  setCurrentSection: (sectionName: string) => void;
}

export const useUiStore = createWithEqualityFn<UiState>()(
  (set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    currentSection: '',
    setCurrentSection: (sectionName: string) =>
      set(() => ({ currentSection: sectionName })),
  }),
  Object.is
);

interface ContactFormState {
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  isFlipped: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
}

export const useContactFormStore = createWithEqualityFn<ContactFormState>()(
  (set) => ({
    isPending: false,
    setIsPending: (isPending) => set(() => ({ isPending: isPending })),
    isFlipped: false,
    setIsFlipped: (isFlipped) => set(() => ({ isFlipped: isFlipped })),

    isSuccess: false,
    setIsSuccess: (isSuccess) => set(() => ({ isSuccess: isSuccess })),
  }),
  Object.is
);
