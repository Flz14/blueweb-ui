import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import setAuthToken from "../helpers/setAuthToken";

const API_URL = "http://192.168.1.211:4000/api/auth/";

const login = async (userData) => {
  const result = await axios.post(API_URL + "login", userData).catch((err) => {
    console.log(err.response);
    return err.response;
  });
  setAuthToken(result.data);
  return result;
};

const logout = async () => {
  const result = await axios
    .get(API_URL + "logout", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      localStorage.removeItem("token");
      return err.response;
    });
  localStorage.removeItem("token");
};

const isAuthenticated = async () => {
  const result = await axios
    .get(API_URL + "validateToken", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return {
        isAuth: false,
        role: null,
        id: null,
      };
    });
  if (result.status === 200) {
    return {
      isAuth: true,
      role: result.data.user.role,
      id: result.data.user.id,
    };
  } else {
    return result;
  }
};

export default {
  login,
  logout,
  isAuthenticated,
};
