import mainInstance from ".";

const apiServices = {
  async getSpecificUsers(department) {
    try {
      const result = await mainInstance.get(`/users?__example=${department}`);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async dynamicData() {
    try {
      const result = await mainInstance.get("/users?__dynamic=true");
      return result;
    } catch (error) {
      throw error;
    }
  },
  async errorRequest() {
    try {
      const result = await mainInstance.get("/users?__code=500&__dynamic=true");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default apiServices;
