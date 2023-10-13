import { createWithEqualityFn } from 'zustand/traditional';
// import { devtools } from 'zustand/middleware';

interface UiState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  currentSection: string;
  setCurrentSection: (sectionName: string) => void;
  gallery: { active: boolean; index: number };
  setGallery: ({ active, index }: { active: boolean; index: number }) => void;
}

export const useUiStore = createWithEqualityFn<UiState>()(
  (set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

    currentSection: '',
    setCurrentSection: (sectionName) =>
      set(() => ({ currentSection: sectionName })),
      
    gallery: { active: false, index: 0 },
    setGallery: ({ active, index }) =>
      set(() => ({ gallery: { active, index } })),
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
