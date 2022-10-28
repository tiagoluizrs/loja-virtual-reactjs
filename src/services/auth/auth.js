const { _post } = require("../http/http");
const { getStorage } = require("../storage/storage");

const userIsLoggedIn = () => {
  const result = getStorage("user");
  
  if (result === null) {
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

const authRegister = async (data) => {
  try{
    await _post("auth/register", data);
    window.location.href = "/confirm-email";
  }catch(err){
    alert(`Não foi possível realizar o cadastro, ${err.toString()}`);
  }
};

const authConfirm = async (token) => {
  try{
    return await _post("auth/valida-email", {
      token,
    });
  }catch(err){
    // alert(`Não foi possível realizar a confirmação, ${err.toString()}`);
    return null;
  }
}

const authLogout = () => {
  localStorage.clear();
  window.location.href = "/login";
}

module.exports = {
  userIsLoggedIn,
  authLogin,
  authRegister,
  authLogout,
  authConfirm,
};