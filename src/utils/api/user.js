import axios from "../axios";
// login
async function login({ email, password }) {
  try {
    const response = await axios.post("/login", { email, password });

    if (!response) {
      return {
        error: "Login failed",
      };
    }

    const { token } = response.data.data;

    localStorage.setItem("token", token);

    return;
  } catch (error) {
    console.log(error);
  }
}

// register
async function register({ firstname, lastname, email, password }) {
  try {
    const response = await axios.post("/register", {
      firstname,
      lastname,
      email,
      password,
    });

    if (!response) {
      return {
        error: "Register failed",
      };
    }

    return response.data.data.message;
  } catch (error) {
    console.log(error);
  }
}
