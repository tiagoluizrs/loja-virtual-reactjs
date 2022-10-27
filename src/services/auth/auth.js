const { _post } = require("../http/http");

const userIsLoggedIn = () => {
    if (false){
        window.location.href = "/login";
    }
}

const authLogin = async (userEmail, password) => {
  const result = await _post("auth/login", {
    userEmail,
    password,
  });
  return result;
};

const authRegister = (username, email, password) => {
  return "login";
};

const authLogout = () => {
    return 'logout'
}

module.exports = {
  userIsLoggedIn,
  authLogin,
  authRegister,
  authLogout,
};