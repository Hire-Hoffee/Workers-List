import axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const mainInstance = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
  headers: {
    "Content-Type": "application/json",
  },
});

mainInstance.interceptors.request.use(requestInterceptor);
mainInstance.interceptors.response.use(responseInterceptor);

export default mainInstance;
