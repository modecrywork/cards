import axios from "axios";

class AxiosService {
  constructor() {}

  sendRequiest = async (method, url, data) => {
    try {
      return await axios({ method, url, data });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new AxiosService();
