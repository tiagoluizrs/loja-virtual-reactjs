function userIsLoggedIn(){
    if (false){
        window.location.href = "/login";
    }
}

const login = (email, password) => {
    return 'login';
}

const register = (username, email, password) => {
    return "login";
}

const logout = () => {
    return 'logout'
}

module.exports = {
    userIsLoggedIn,
    login,
    register,
    logout,
};