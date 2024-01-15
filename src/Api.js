// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://your-laravel-api-url.com/api",
  // You can add headers or other configurations here
});

export const getPosts = () => api.get("/posts");
export const createPost = (data) => api.post("/posts", data);
// Add more functions for other API calls
