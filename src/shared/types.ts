export interface MenuItemType {
  label: string;
  children: (null | string)[];
}

export interface WallpaperType {
  name: string;
  url: string;
  thumbnail: string;
}

export interface ThemeType {
  name: string;
  thumbnail: string;
  attr: string;
}

export interface DockItemType {
  name: string;
  icon: string;
  type: "iframe" | "component" | "link";
  iframe?: {
    url: string;
    width: number;
    height: number;
  };
  position?: {
    top: string;
    left: string;
  };
  link?: string;
  // component?: Component;
  color?: string;
  background?: string;
}
