const URL = process.env.REACT_APP_URL_HOST_API;
const PORT = process.env.REACT_APP_PORT_HOST_API;

const _generateHeader = (header) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  let keys = Object.keys(header);
  if (keys.length > 0) {
    for(let key of keys){
      headers[key] = header[key];
    }
  } 
  
  return headers;
}

const _get = async (endpoint, header = null) => {
  const response = await fetch(`http://${URL}:${PORT}/${endpoint}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const _post = async (endpoint, body, headers={}) => {
  headers = _generateHeader(headers);
  try{
    const response = await fetch(`http://${URL}:${PORT}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });
    const data = await response.json();
    return data;
  }catch(err){
    if (err.toString().indexOf("Dados inválidos") > -1) {
      return {
        msg: 'Dados inválidos'
      };
    }
  }
};

const _put = async (endpoint, header = null) => {
  console.log(`${URL}:${PORT}/${endpoint}`);
};

const _patch = async (endpoint, header = null) => {
  console.log(`${URL}:${PORT}/${endpoint}`);
};

const _delete = async (endpoint, header = null) => {
  console.log(`${URL}:${PORT}/${endpoint}`);
};

module.exports = {
  _get,
  _post,
  _put,
  _patch,
  _delete,
};
