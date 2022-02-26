import http from "./httpService";
import * as endpoint from "../config.json";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    name: user.name,
    lastName: user.lastName,
    nationalCode: user.nationalCode,
    password: user.password,
  });
}
