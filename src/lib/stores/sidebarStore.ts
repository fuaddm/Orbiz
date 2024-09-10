import { create } from 'zustand';

type sidebarStoreType = {
  isOpen: boolean;
  toggle: () => void;
};

export const useSidebarStore = create<sidebarStoreType>()((set) => {
  return {
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  };
});
