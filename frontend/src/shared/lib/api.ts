// catalogueApi.ts
import { CatalogueAPI } from "./axios/base-api";
import { GroupTheme, ItemGroup, Item, GroupThemeDetailed, ItemGroupDetailed } from "./types";

export const CatalogueService = {
  // GroupTheme methods
  getThemes: async (): Promise<GroupTheme[]> => {
    const response = await CatalogueAPI.get("/themes/");
    return response.data.results;
  },

  getTheme: async (id: number): Promise<GroupTheme> => {
    const response = await CatalogueAPI.get(`/themes/${id}/`);
    return response.data.results;
  },

  createTheme: async (
    themeData: Omit<GroupTheme, "id">
  ): Promise<GroupTheme> => {
    const response = await CatalogueAPI.post("/themes/", themeData);
    return response.data.results;
  },

  updateTheme: async (
    id: number,
    themeData: Partial<GroupTheme>
  ): Promise<GroupTheme> => {
    const response = await CatalogueAPI.patch(`/themes/${id}/`, themeData);
    return response.data.results;
  },

  deleteTheme: async (id: number): Promise<void> => {
    await CatalogueAPI.delete(`/themes/${id}/`);
  },

  // ItemGroup methods
  getGroups: async (): Promise<ItemGroup[]> => {
    const response = await CatalogueAPI.get("/groups/");
    return response.data.results;
  },

  getGroup: async (id: number): Promise<ItemGroup> => {
    const response = await CatalogueAPI.get(`/groups/${id}/`);
    return response.data.results;
  },

  createGroup: async (
    groupData: Omit<ItemGroup, "id" | "theme"> & { theme_id: number }
  ): Promise<ItemGroup> => {
    const response = await CatalogueAPI.post("/groups/", groupData);
    return response.data.results;
  },

  updateGroup: async (
    id: number,
    groupData: Partial<ItemGroup>
  ): Promise<ItemGroup> => {
    const response = await CatalogueAPI.patch(`/groups/${id}/`, groupData);
    return response.data.results;
  },

  deleteGroup: async (id: number): Promise<void> => {
    await CatalogueAPI.delete(`/groups/${id}/`);
  },

  // Item methods
  getItems: async (): Promise<Item[]> => {
    const response = await CatalogueAPI.get("/items/");
    return response.data.results;
  },

  getItem: async (id: number): Promise<Item> => {
    const response = await CatalogueAPI.get(`/items/${id}/`);
    return response.data.results;
  },

  createItem: async (
    itemData: Omit<Item, "id" | "group"> & { group_id: number }
  ): Promise<Item> => {
    const response = await CatalogueAPI.post("/items/", itemData);
    return response.data.results;
  },

  updateItem: async (id: number, itemData: Partial<Item>): Promise<Item> => {
    const response = await CatalogueAPI.patch(`/items/${id}/`, itemData);
    return response.data.results;
  },

  deleteItem: async (id: number): Promise<void> => {
    await CatalogueAPI.delete(`/items/${id}/`);
  },

  // Для загрузки изображений (если нужно)
  uploadImage: async (
    file: File,
    modelType: "theme" | "group" | "item",
    id: number
  ): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await CatalogueAPI.post<{ image_url: string }>(
      `/${modelType}s/${id}/upload_image/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.image_url;
  },

  /**
   * Получить все группы внутри конкретной темы
   * @param themeId ID темы
   */
  getThemeById: async (themeId: number): Promise<GroupThemeDetailed> => {
    const response = await CatalogueAPI.get<GroupThemeDetailed>(`/themes/${themeId}`);
    return response.data;
  },

  /**
   * Получить все подгруппы внутри конкретной группы
   * @param groupId ID группы
   */
  getGroupById: async (groupId: number): Promise<ItemGroupDetailed> => {
    const response = await CatalogueAPI.get<ItemGroupDetailed>(`/groups/${groupId}`);
    return response.data;
  },

  /**
   * Получить все изделия внутри группы/подгруппы
   * @param groupId ID группы/подгруппы
   */
  getItemsByGroup: async (groupId: number): Promise<Item[]> => {
    const response = await CatalogueAPI.get<Item[]>(
      `/groups/${groupId}/items/`
    );
    return response.data;
  },
};
