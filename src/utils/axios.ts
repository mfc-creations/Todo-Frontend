import axios from "axios";

export default () => {
  const baseURL = "http://localhost:8000/api/v1/todo";

  const axiosInstance = axios.create({
    baseURL: baseURL,
  });

  axiosInstance.interceptors.response.use(
    (response: any) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error: any) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
