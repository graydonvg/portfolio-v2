import { create } from "zustand";

type DrawerState = {
  isNavDrawerOpen: boolean;
  toggleNavDrawer: () => void;
};

const useDrawerStore = create<DrawerState>((set) => ({
  isNavDrawerOpen: false,
  toggleNavDrawer: () =>
    set((state) => ({ isNavDrawerOpen: !state.isNavDrawerOpen })),
}));

export default useDrawerStore;
