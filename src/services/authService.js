import http from "./httpService";
import * as endpoint from "../config.json";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl + "/auth";

export function login(nationalCode, password) {
  return http.post(apiEndpoint, { nationalCode, password });
}
