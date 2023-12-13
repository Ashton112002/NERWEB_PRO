import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

export const isAuthenticate = () =>
  localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : false;

export const isAdmin = () =>
  localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt')).user.role === 1
    : false;

export const currentLoggedIn = () =>
  localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt')).user
    : false;

export const loginReq = async ({ email, password }) => {
  const data = { email, password };
  try {
    let res = await axios.post(`${apiURL}/api/signin`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async uId => {
  try {
    let res = await axios.post(`${apiURL}/api/user/signle-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async dispatch => {
  let userId = JSON.parse(localStorage.getItem('jwt'))
    ? JSON.parse(localStorage.getItem('jwt')).user._id
    : '';
  try {
    let responseData = await getUserById(userId);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const signupReq = async ({ name, email, password, cPassword, userImage }) => {
  const data = { name, email, password, cPassword, userImage };
  try {
    let res = await axios.post(`${apiURL}/api/signup`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
