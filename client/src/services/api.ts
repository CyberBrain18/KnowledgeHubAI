import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export default api;

export const getDocuments = async () => {
  const { data } = await api.get("/documents");
  return data;
};