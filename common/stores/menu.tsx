import { create } from "zustand";

export type InitialModalState = {
  isActive: string;
  isOpen: boolean;
};

export type InitialModalAction = {
  setIsActive: (title: string) => void;
  showMenu(): void;
  hideMenu(): void;
  toggleMenu(): void;
};

export const useMenu = create<InitialModalState & InitialModalAction>()(
  (set) => ({
    isActive: "Home",
    setIsActive: (title) => set({ isActive: title }),
    isOpen: false,
    showMenu: () => set({ isOpen: true }),
    hideMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((prev) => ({ isOpen: !prev.isOpen })),
  }),
);
