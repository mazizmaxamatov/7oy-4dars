import axios from "axios";

const apiBooks = axios.create({
  baseURL: "https://api.ashyo.fullstackdev.uz",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiBooks;
