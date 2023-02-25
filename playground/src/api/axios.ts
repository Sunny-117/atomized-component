import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5173",
});

instance.interceptors.response.use(function (config) {
  const { data } = config;

  return {
    data,
  } as any;
});
export default instance;
