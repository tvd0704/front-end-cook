import jwt_decode from "jwt-decode";

export const decodeToken = (token: string) => token ? jwt_decode(token) : null;