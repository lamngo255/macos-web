import create from "zustand";

interface Store {
  currentUser: null | undefined;

  setCurrentUser: (user: any) => void;
}

export const useStore = create<Store>((set: any) => ({
  currentUser: undefined,
  setCurrentUser: (user: any) => set({ currentUser: user }),
}));
