import http from "./httpService";
import * as endpoint from "../config.json";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  if (!user.isAdmin) user.isAdmin = false;
  if (!user.isTeacher) user.isTeacher = false;
  if (!user.isStudent) user.isStudent = false;
  return http.post(apiEndpoint, user);
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export default {
  register,
  getUsers,
};
