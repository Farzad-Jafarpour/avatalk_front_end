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

export function deleteUser(nationalCode) {
  return http.delete(apiEndpoint + "/" + nationalCode);
}

export function editUser(user) {
  if (!user.isAdmin) user.isAdmin = false;
  if (!user.isTeacher) user.isTeacher = false;
  if (!user.isStudent) user.isStudent = false;
  const nationalCode = user.nationalCode;
  return http.put(apiEndpoint + "/" + nationalCode, user);
}
export default {
  register,
  getUsers,
  deleteUser,
  editUser,
};
