import axios from "../axios";
// login
async function login({ email, password }) {
  try {
    const response = await axios.post("/auth/login", { email, password });

    const { token } = response.data.data.data;

    return token;
  } catch (error) {
    throw error;
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

export { login, register };
