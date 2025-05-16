// types.ts
export interface GroupTheme {
  id: number;
  title: string;
  image?: string; // или string | null в зависимости от вашей модели
}

export interface GroupThemeDetailed {
  id: number;
  title: string;
  image?: string; // или string | null в зависимости от вашей модели
  groups: ItemGroup[];
}

export interface ItemGroup {
  id: number;
  title: string;
  theme: GroupTheme;
  image?: string;
}

export interface ItemGroupDetailed {
  id: number;
  title: string;
  theme: GroupTheme;
  image?: string;
  items: Item[];
}

export interface Item {
  id: number;
  title: string;
  body: string;
  group: ItemGroup;
  image?: string;
}
