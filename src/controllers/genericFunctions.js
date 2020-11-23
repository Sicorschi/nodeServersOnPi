function catchError(err) {
    const errorMessage = {
      message: err.message
    };
    return errorMessage;
}


function send200Status(input) {
    const succesMessage = {
      message: `${input} was succesfully deployed`
    };
    return succesMessage;
}


function parsePass(body) {
  const { name, userName, password, description } = body;
  const parsedData = {
    name,
    userName,
    password,
    description
  };
  return parsedData;
}

function parseAvatar(body) {
  const { name, password, description, imgUrl } = body;
  const parsedData = {
    name,
    password,
    description,
    imgUrl
  };
  return parsedData;
}

module.exports = {
    catchError,
    send200Status,
    parsePass,
    parseAvatar
}