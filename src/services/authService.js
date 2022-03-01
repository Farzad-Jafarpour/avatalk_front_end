import http from "./httpService";
import * as endpoint from "../config.json";
import jwtDecode from "jwt-decode";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl + "/auth";

export async function login(nationalCode, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    nationalCode,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
