const userKey = 'tkambio-user';

const getUser = () => {
  return JSON.parse(localStorage.getItem(userKey));
}

const setUser = (user) => {
  localStorage.setItem(userKey, JSON.stringify(user));
}

const removeUser = () => {
  localStorage.removeItem(userKey);
}

export {
  getUser,
  setUser,
  removeUser
}