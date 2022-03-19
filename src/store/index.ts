import create from "zustand";

interface Store {
  currentUser: null | undefined;
  wallpaperId: number;
  themeId: number;

  setCurrentUser: (user: any) => void;
  updateWall: () => void;
}

export const useStore = create<Store>((set: any) => ({
  currentUser: undefined,
  wallpaperId: Number(localStorage.getItem("WALLPAPER")) || 6,
  themeId: Number(localStorage.getItem("THEME")) || 0,

  setCurrentUser: (user: any) => set({ currentUser: user }),
  changeWallpaper: (id: number) => set({ wallpaperId: id }),
  changeTheme: (id: number) => set({ themeId: id }),
  updateWall: () => set({ wallpaperId: 0 }),
}));
