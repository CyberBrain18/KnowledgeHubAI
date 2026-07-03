import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;

export const getDocuments = async () => {
  const { data } = await api.get("/documents");
  return data;
};