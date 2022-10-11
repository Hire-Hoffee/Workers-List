import store from "../store"

const requestInterceptor = (config) => {
  store.dispatch({ type: "utils/changeLoading", payload: true })
  return config;
};

const responseInterceptor = (response) => {
  store.dispatch({ type: "utils/changeLoading", payload: false })
  return response;
};

export { requestInterceptor, responseInterceptor };
