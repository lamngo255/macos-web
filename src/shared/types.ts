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
