import axios from "axios";

const token = localStorage.getItem('accessToken');

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
     'Authorization': `Bearer ${token}`
  }
});