import axios from "axios";

const USER_API_URL = "http://localhost:9000/user/";

const register = (username: string, email: string, password: string) => {
  return axios.post(USER_API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(USER_API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      // alert(JSON.stringify(response.data)); // for debugging purposes
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(USER_API_URL + "logout").then((response) => {
    return response.data;
  });
};


const getCurrentUser = (): any | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};



/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };


  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    fakeAuthProvider,
  }
  
  export default AuthService;