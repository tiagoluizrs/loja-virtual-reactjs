const saveStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getStorage = (key) => {
    const result = localStorage.getItem(key);
    if(result) return JSON.stringify(result);
    return result;
}

module.exports = {
    saveStorage,
    getStorage
}