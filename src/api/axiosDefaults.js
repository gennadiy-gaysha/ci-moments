import axios from "axios";

axios.defaults.baseURL =
  "https://drf-api-app-gaysha-03eb690a65c6.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
