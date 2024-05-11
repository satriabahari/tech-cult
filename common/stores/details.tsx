import { create } from "zustand";

interface detailPopUpProps {
  currentId: number;
  setId: (id: number) => void;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const useDetailPopUpDestinations = create<detailPopUpProps>()((set) => ({
  currentId: 0,
  setId: (id) => set(() => ({ currentId: id })),
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useDetailPopUpEvent = create<detailPopUpProps>()((set) => ({
  currentId: 0,
  setId: (id) => set(() => ({ currentId: id })),
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useDetailPopUpHeroFigure = create<detailPopUpProps>()((set) => ({
  currentId: 0,
  setId: (id) => set(() => ({ currentId: id })),
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
