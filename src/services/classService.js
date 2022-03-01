import http from "./httpService";
import * as endpoint from "../config.json";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl + "/classes";

export function createClass(data) {
  return http.post(apiEndpoint, data);
}

export default {
  createClass,
};