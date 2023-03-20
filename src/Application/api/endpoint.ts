import ENV from "./envProvider";

// IDENTITY
export const GET_TOKEN = ENV.server.name + "/token";
export const GET_USER_DETAIL = ENV.server.name + "/user/detail";
export const REGISTER = ENV.server.name + "/register";
export const LOGOUT = ENV.server.name + "/logout";

// TEST
export const GET_USER_PROFILE = ENV.server.name + "connect/token";
export const GET_ALL_USER = ENV.server.name + "connect/userinfo";
