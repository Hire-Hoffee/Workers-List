import store from "../store";

const requestInterceptor = (config) => {
  store.dispatch({ type: "utils/changeUtilsState", payload: { stateName: "isLoading", stateValue: true } });
  return config;
};

const responseInterceptor = (response) => {
  store.dispatch({ type: "utils/changeUtilsState", payload: { stateName: "isLoading", stateValue: false } });
  return response;
};

const errorInterceptor = (error) => {
  store.dispatch({ type: "utils/changeUtilsState", payload: { stateName: "isError", stateValue: true } });
  return Promise.reject(error);
};

export { requestInterceptor, responseInterceptor, errorInterceptor };
