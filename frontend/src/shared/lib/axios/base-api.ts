import axios from "axios";

export const BASE_URL = "http://localhost:8000";

const DEFAULT_API_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 6000,
  withCredentials: true,
};

/**
 * Базовое API, может использоваться для любых запросов
 * Но желательно прикручивать свой API к каждому сервису
 */
export const BaseAPI = axios.create({
  ...DEFAULT_API_OPTIONS,
  baseURL: BASE_URL,
});

export const CatalogueAPI = axios.create({
  ...DEFAULT_API_OPTIONS,
  baseURL: BASE_URL + "/catalogue",
});

