import axios from "axios";
// Set the base URL for all Axios requests
axios.defaults.baseURL =
  "https://drf-api-app-gaysha-03eb690a65c6.herokuapp.com/";
// Set the default Content-Type header for POST requests to "multipart/form-data"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// Allow sending credentials (like cookies) with cross-origin requests
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
