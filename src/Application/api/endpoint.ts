import ENV from "./envProvider";

// IDENTITY
export const GET_TOKEN = ENV.server.hostendpoint + "/token";
export const GET_USER_DETAIL = ENV.server.hostendpoint + "/user/detail";
export const REGISTER = ENV.server.hostendpoint + "/register";
export const LOGOUT = ENV.server.hostendpoint + "/logout";

// TEST
export const GET_USER_PROFILE = ENV.server.hostendpoint + "connect/token";
export const GET_ALL_USER = ENV.server.hostendpoint + "connect/userinfo";