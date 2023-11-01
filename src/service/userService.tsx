import http from "../http-common";
import IUser from "../types/user";



const login = (data: IUser) => {
  return http.post<any>(`/login`, data);
};

const register = (data:IUser) => {
  return http.post<any>(`/register`, data);
}

const signOut = () => {
  return http.post<any>(`/signOut`);
}

const userService = {
  login,
  register,
  signOut
};

export default userService;
