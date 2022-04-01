import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/api/v1"
    : "https://api.zashaura.com";

const setAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return { Authorization: "" };
  }
};

const request = axios.create({
  baseURL,
  headers: setAuthHeader(),
});

export default request;
