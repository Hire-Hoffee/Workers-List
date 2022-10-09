import axios from "axios";

const mainInstance = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainInstance;
