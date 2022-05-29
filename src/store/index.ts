import create from "zustand";
import { DockMenu } from "@/shared/constants";

interface Store {
  wallpaperId: number;
  themeId: number;
  maxWindowId: number;
  windowList: Record<string, number>;

  changeWallpaper: (id: number) => void;
  changeTheme: (id: number) => void;
}

export const useStore = create<Store>((set: any) => ({
  wallpaperId: Number(localStorage.getItem("WALLPAPER")) || 6,
  themeId: Number(localStorage.getItem("THEME")) || 0,
  maxWindowId: 0,
  windowList: DockMenu.filter((item) => item.type !== "link").reduce(
    (acc, current) => {
      acc[current.name] = 0;
      return acc;
    },
    {} as any
  ),

  increaseMaxWindowId: () => {
    set({ maxWindowId: set.maxWindowId + 1 });
  },
  changeWindowId: (state, payload: Record<string, string>) => {
    state.windowList[payload.name] = payload.value;
  },
  changeWallpaper: (id: number) => {
    set({ wallpaperId: id });
    localStorage.setItem("WALLPAPER", id.toString());
  },
  changeTheme: (id: number) => {
    set({ themeId: id });
    localStorage.setItem("THEME", id.toString());
  },
}));
