import { Axios } from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/api/v1"
    : "https://api.zashaura.com";

const get_auth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
};

const axios = new Axios({
  baseURL: baseURL,
  headers: get_auth(),
  maxRedirects: 1,
});

export default axios;
