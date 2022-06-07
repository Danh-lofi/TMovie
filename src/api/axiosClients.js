import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClients = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});
// interceptor khi gửi request
axiosClients.interceptors.request.use(async (config) => config);
// Do something before request is sent

// interceptor khi gửi response

axiosClients.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    throw err;
  }
);

export default axiosClients;
